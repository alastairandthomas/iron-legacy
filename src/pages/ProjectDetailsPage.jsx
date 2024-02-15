import React from "react";
import sample from "../assets/sample.json";
import { useParams } from "react-router-dom";

function ProjectDetailsPage() {
  const { id } = useParams();
  console.log(id);
  const project = sample.find((el) => el.id === id);

  console.log(project);

  return (
    <div className="hero min-h-screen bg-base-200 justify-betwee">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={project.image}
          className="max-w-max rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="py-6">
            {project.description}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
