import Card from '../components/Card';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import FilterSection from '../components/FilterSection';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function ProjectsPage() {
  // const [projects, setProjects] = useState(null);
  // const [projects, loading, error] = useCollection(db.collection('projects'));
  const [user] = useAuthState(auth);
  const [search, setSearch] = useState('');
  const [isChecked, setIsChecked] = useState({
    module1: false,
    module2: false,
    module3: false,
  });
  const [projects, setProjects] = useState(null);

  const fetchProjects = async (input) => {
    if (!input) {
      const q = query(collection(db, 'projects'));
      const querySnapshot = await getDocs(q);
      setProjects(querySnapshot.docs);
    } else if (input) {
      const q = query(collection(db, 'projects'));
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

  // const handleSearch = (search) => {
  //   console.log(search);
  // };

  // const handleChecked = (checked) => {
  //   console.log(checked);
  // };

  return (
    <div className=" flex flex-col gap-6">
      <FilterSection
        changeSearchState={changeSearchState}
        changeCheckedState={changeCheckedState}
      />
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {projects?.map((obj) => {
            {
              /* console.log(obj.data().FavBy.includes(user.uid)); */
            }
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
