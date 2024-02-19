import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from '../firebase';
import axios from "axios";

function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);

  const handleDelete = () => {
    db.collection('projects')
      .doc(id)
      .delete();
    navigate(`/projects`);
  }

  useEffect(() => {
    if (id) {
      db.collection('projects')
        .doc(id)
        .onSnapshot(project => setProject(project.data()));
    }
  }, [project]);

  return project ? (
    <div className="hero min-h-screen bg-base-200 justify-betwee">
      <div className="hero-content flex-col lg:flex-row">
        <img src={project.image} className="max-w-7xl rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="py-6">{project.description}</p>
          <button className="btn btn-primary" onClick={() => navigate(`/modify/${id}`)}>Edit</button>
          <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProjectDetailsPage;
