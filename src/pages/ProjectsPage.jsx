import sample from '../assets/sample.json';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function ProjectsPage() {
  // const [projects, setProjects] = useState(null);
  const [projects, loading, error] = useCollection(db.collection('projects'));
  const [user] = useAuthState(auth);

  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/projects`)
  //     .then((response) => setProjects(response.data))
  //     .catch((err) => console.log(err));
  // }, [projects]);

  return (
    <>
      <section className="container flex justify-center">
        <h1> All IronHack Projects </h1>
      </section>
      <div className="container flex flex-row-reverse">
        <h3>Filter</h3>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {projects?.docs.map((obj) => {
            {
              /* console.log(obj.data().FavBy.includes(user.uid)); */
            }
            return (
              <Card
                obj={obj.data()}
                key={obj.id}
                id={obj.id}
                isFav={obj.data().FavBy.includes(user.uid)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
