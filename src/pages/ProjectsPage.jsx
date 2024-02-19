import sample from '../assets/sample.json';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

function ProjectsPage() {
  const [projects, setProjects] = useState(null);
  const API_URL = 'https://ironhackprojects-backend.adaptable.app';

  useEffect(() => {
    axios
      .get(`${API_URL}/projects`)
      .then((response) => setProjects(response.data))
      .catch((err) => console.log(err));
  }, [projects]);

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
          {projects &&
            projects.map((obj) => {
              return <Card obj={obj} />;
            })}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
