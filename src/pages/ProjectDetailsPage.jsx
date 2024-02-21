import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function ProjectDetailsPage(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const [project, setProject] = useState(null);

  var projectCall = db.collection("projects").doc(id);

  const handleDelete = () => {
    db.collection("projects").doc(id).delete();

    navigate(`/projects`);
  };

  useEffect(() => {
    if (id) {
      db.collection("projects")
        .doc(id)
        .onSnapshot((project) => setProject(project.data()));
    }
  }, [project]);

  const unFav = () => {
    projectCall.update({
      FavBy: firebase.firestore.FieldValue.arrayRemove(user?.uid),
    });
    console.log(project);
  };

  const doFav = () => {
    projectCall.update({
      FavBy: firebase.firestore.FieldValue.arrayUnion(user?.uid),
    });
    console.log(project);
  };

  const fav = () => {
    project.FavBy.includes(user?.uid) ? unFav() : doFav();
  };

  return project ? (
    <div className="hero min-h-screen bg-base-200 justify-between">
      <div className="hero-content flex-col">
        <img src={project.image} className="w-[80%] rounded-lg shadow-2xl" />
        <div className="">
          <div className="flex justify-between">
            <h1 className="text-5xl font-bold">{project.title}</h1>
            {user && (
              <button onClick={fav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    fill={project.FavBy.includes(user.uid) ? "pink" : "none"}
                  />
                </svg>
              </button>
            )}
          </div>

          <p className="py-2">{project.headline}</p>
          <p className="py-2">{project.description}</p>
          <p className="py-6">
            <a href={project.projectLink}>View Project</a>
          </p>
          <div className="flex justify-between">
            <p className="py-2">Module {project.module}</p>
            <p className="py-2">
              Project By:{" "}
              <a href={`https://github.com/${project.authorHandle}`}>
                @{project.authorHandle}
              </a>
            </p>
          </div>

          <div className="py-4 flex justify-evenly">
            {project.tags.map((tag) => {
              return <span>{tag}</span>;
            })}
          </div>

          <div className="flex md:justify-between justify-center flex-wrap-reverse">
            <button className="btn btn-primary mx-1" onClick={() => navigate(-1)}>
              Back
            </button>
            {project.userId === user?.uid ? (
              <div>
                <button
                  className="btn btn-warning mx-1"
                  onClick={() => navigate(`/modify/${id}`)}
                >
                  Edit
                </button>
                <button className="btn btn-error mx-1" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProjectDetailsPage;
