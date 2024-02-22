import Card from "../components/Card";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import FilterSection from "../components/FilterSection";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

function ProjectsPage() {
  // const [projects, setProjects] = useState(null);
  // const [projects, loading, error] = useCollection(db.collection('projects'));
  const [user] = useAuthState(auth);
  const [search, setSearch] = useState("");
  const [isChecked, setIsChecked] = useState({});
  const [projects, setProjects] = useState(null);

  const fetchModuleProject = () => {
    var isCLicked = false;
    const conditionalArr = [];
    for (const [key, value] of Object.entries(isChecked)) {
      if (value) {
        isCLicked = true;
        conditionalArr.push(key);
      }
    }
    return isCLicked
      ? query(collection(db, "projects"), where("module", "in", conditionalArr))
      : query(collection(db, "projects"));
  };

  const fetchProjects = async (input) => {
    if (!input) {
      const q = fetchModuleProject();
      const querySnapshot = await getDocs(q);
      setProjects(querySnapshot.docs);
    } else if (input) {
      const q = fetchModuleProject();
      const querySnapshot = await getDocs(q);
      const filteredProjects = querySnapshot.docs.filter((doc) =>
        doc.data().title.toLowerCase().includes(input.toLowerCase())
      );
      setProjects(filteredProjects);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (search) {
      fetchProjects(search);
    } else if (!search) {
      fetchProjects();
    }
  }, [search, isChecked]);

  const changeSearchState = (e) => {
    e.persist();
    setSearch(e.target.value);
  };

  const changeCheckedState = (e) => {
    setIsChecked((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };


  return (
    <div>
      <FilterSection
        changeSearchState={changeSearchState}
        changeCheckedState={changeCheckedState}
      />
      <div className="w-[100%] flex justify-center">
        <div className="columns-1 md:columns-2 lg:columns-3 py-5">
          {projects?.map((obj) => {
            return (
              <Card
                obj={obj.data()}
                key={obj.id}
                id={obj.id}
                isFav={obj.data().FavBy.includes(user?.uid)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
