import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const API_URL = "https://ironhackprojects-backend.adaptable.app";

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/projects/${id}`);
    navigate(`/projects`);
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/projects/${id}`)
      .then((response) => setProject(response.data))
      .catch((err) => console.log(err));
  }, []);

  return project ? (
    <div className="hero min-h-screen bg-base-200 justify-betwee">
      <div className="hero-content flex-col lg:flex-row">
        <img src={project.image} className="max-w-max rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="py-6">{project.description}</p>
          <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProjectDetailsPage;
