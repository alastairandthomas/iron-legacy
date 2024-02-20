import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const [project, setProject] = useState(null);

  const handleDelete = () => {
    db.collection('projects').doc(id).delete();

    navigate(`/projects`);
  };

  useEffect(() => {
    if (id) {
      db.collection('projects')
        .doc(id)
        .onSnapshot((project) => setProject(project.data()));
    }
  }, [project]);

  const fav = () => {
    console.log('liked');
  };

  return project ? (
    <div className="hero min-h-screen bg-base-200 justify-betwee">
      <div className="hero-content flex-col lg:flex-row">
        <img src={project.image} className="max-w-5xl rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="py-6">{project.description}</p>
          {project.userId === user.uid ? (
            <>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/modify/${id}`)}
              >
                Edit
              </button>
              <button className="btn btn-primary" onClick={handleDelete}>
                Delete
              </button>
            </>
          ) : null}
          <button className="btn" onClick={fav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Button
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProjectDetailsPage;
