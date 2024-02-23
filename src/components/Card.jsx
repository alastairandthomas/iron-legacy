import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../firebase';

function Card({ obj, id, isFav, noFav }) {
  const [user, loading] = useAuthState(auth);
  const [project, setProject] = useState(null);
  const [favourited, setFavourited] = useState(isFav);

  var projectCall = db.collection('projects').doc(id);

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
    setFavourited(!favourited);
  };

  const displayModuleColor = () => {
    let color = '';
    switch (obj.module) {
      case '1':
        color = 'bg-red-400';
        break;
      case '2':
        color = 'bg-yellow-400';
        break;
      case '3':
        color = 'bg-blue-400';
        break;
    }
    console.log(color);
    return color;
  };

  const favOnCard = (e) => {
    e.preventDefault();

    fav();
  };

  console.log(displayModuleColor());

  return (
    <Link to={`/projectdetails/${id}`}>
      <div className="card w-96 h-104 bg-base-100 shadow-xl mb-10 mx-3  break-inside-avoid-column">
        <figure>
          {!noFav && (
            <button className="!absolute top-3 right-5" onClick={favOnCard}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 svg-shadow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={favourited ? '0' : '2'}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  fill={favourited ? 'red' : 'none'}
                />
              </svg>
            </button>
          )}
          <img src={obj.image} className="object-cover w-full h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{obj.title}</h2>
          <p>{obj.headline}</p>
        </div>

        {/* INFORMATION ABOUT THE AUTHOR OF THE PROJECT THAT WE'LL GET FROM USER AUTH WITH FIREBASE ========= */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center px-6 pt-4 pb-2">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={obj.userPhoto}
              alt="Profile Picture"
            />
            <div className="text-sm">
              <p className=" leading-none">{`@${obj.authorHandle}`}</p>
            </div>
          </div>
          {/* END OF INFFORMATION ABOUT AUTHOR ======= */}

          {/* TAG AT THE BOTTOM OF THE CARD THAT'LL SHOW QUICK INFORMATION ABOUT THE PROJECT  ======================= */}
          <div class="px-6 pt-4 pb-2">
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ${displayModuleColor()}`}
            >{`Module ${obj.module}`}</span>
          </div>
          {/* END THE THE TAGS ============ */}
        </div>
      </div>
    </Link>
  );
}

export default Card;
