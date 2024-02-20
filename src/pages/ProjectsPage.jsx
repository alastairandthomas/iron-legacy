import sample from '../assets/sample.json';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';

function ProjectsPage() {
  // const [projects, setProjects] = useState(null);
  const [projects, loading, error] = useCollection(db.collection('projects'));

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
            return <Card obj={obj.data()} key={obj.id} id={obj.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
