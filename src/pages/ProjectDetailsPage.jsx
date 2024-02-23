import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import LanguagesBar from '../components/LanguagesBar'

function ProjectDetailsPage(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const [project, setProject] = useState(null);

  var projectCall = db.collection('projects').doc(id);

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
  }, []);

  const unFav = async () => {
    await projectCall.update({
      FavBy: firebase.firestore.FieldValue.arrayRemove(user?.uid),
    });
  };

  const doFav = async () => {
    await projectCall.update({
      FavBy: firebase.firestore.FieldValue.arrayUnion(user?.uid),
    });
  };

  const fav = () => {
    project.FavBy.includes(user?.uid) ? unFav() : doFav();
  };

  return project ? (
    <div className="flex justify-evenly flex-wrap mt-[5%] lg:mt-[10%]">
      <img
        src={project.image}
        className={`w-5/6 lg:w-1/2 rounded-lg shadow-2xl`}
      />

      <div className="w-5/6 h-full lg:w-2/6 lg:h-4/5 flex flex-col justify-evenly mt-[10%] md:mt-[5%] lg:mt-0">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold m-3">{project.title}</h1>
          {user && (
            <button onClick={fav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 m-1 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={project.FavBy.includes(user.uid) ? '0' : '2'}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  fill={project.FavBy.includes(user.uid) ? 'red' : 'none'}
                />
              </svg>
            </button>
          )}
        </div>

        <p className="m-2 mt-6">{project.headline}</p>
        <p className="m-2">{project.description}</p>
        <LanguagesBar languages={project.languages}/>
        <div className="flex justify-between items-center mx-2 mt-6">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-5"
              src={project.userPhoto}
              alt="Profile Picture"
            />
            <div className="text-sm">
              <p className="leading-none">{`@${project.authorHandle}`}</p>
            </div>
          </div>
          {project.userId === user?.uid ? (
            <div>
              <button
                className="btn btn-outline btn-warning m-4"
                onClick={() => navigate(`/modify/${id}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-outline btn-error"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          ) : null}
        </div>

        {/* <div className="flex justify-between mt-[10%]">
          {project.tags.map((tag) => {
            return <span className="kbd">{tag}</span>;
          })}
        </div> */}

        <div className="flex justify-between flex-wrap-reverse mx-2 bg-gray-100">
          <button className="btn" onClick={() => navigate(-1)}>
            Back
          </button>
          <a
            className="btn btn-primary"
            href={project.projectLink}
            target="_blank"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProjectDetailsPage;
