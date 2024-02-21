import '../App.css';
import { Link } from 'react-router-dom';
import LoggedNav from './LoggedNav';

import { auth, provider } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Navbar() {
  const [user, loading] = useAuthState(auth);

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li>
                <span>Home</span>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <span>About</span>
              </li>
            </Link>
            <Link to="/projects">
              <li>
                <span>Projects</span>
              </li>
            </Link>
            {user && (
              <Link to="/favorites">
                <li><span>My Favorites</span></li>
              </Link>
            )}
          </ul>
        </div>
        <span className="btn btn-ghost text-xl">Ironhack Projects</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/">
            <li>
              <span>Home</span>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <span>About</span>
            </li>
          </Link>
          <Link to="/projects">
            <li>
              <span>Projects</span>
            </li>
          </Link>
          {user && (
            <Link to="/favorites">
              <li>
                <span>My Favorites</span>
              </li>
            </Link>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link to="/create">
            <span className="btn btn-xs md:btn-md">Add Project</span>
          </Link>
        ) : null}
        {user ? (
          <LoggedNav />
        ) : (
          <span className="btn ml-4 mr-4" onClick={signIn}>
            <i className="fab fa-github text-lg" />
            Sign In
          </span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
