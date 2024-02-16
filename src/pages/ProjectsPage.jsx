import sample from "../assets/sample.json";
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

function ProjectsPage() {

const [projects, setProjects] = useState(null);
const API_URL = "https://ironhackprojects-backend.adaptable.app"

useEffect(() => {
  axios
    .get(`${API_URL}/projects`)
    .then(response => setProjects(response.data))
    .catch(err => console.log(err));
},[projects])



  return (
    <> 
    <section className="container flex justify-center">
        <h1> All IronHack Projects </h1>
    </section>
    <div className="container flex flex-row-reverse">
        <h3>Filter</h3>
    </div>
    <div className="flex grid-flow-row justify-evenly flex-wrap gap-6">
        {projects && projects.map((obj) => {
    return (
      <Link to={`/projectdetails/${obj.id}`}>
      <div className="card w-96 bg-base-100 shadow-xl grid-cols-1">
        <figure>
          <img
            src={obj.image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{obj.title}</h2>
          <p>{obj.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{obj.author}</button>
          </div>
        </div>
      </div>
      </Link>
    );
  })}
    </div>
    </>
  )
}

export default ProjectsPage;
