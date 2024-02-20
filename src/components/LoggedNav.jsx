import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function LoggedNav() {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const goToProjects = () => {
    navigate(`/MyProjects`);
  };

  const logOut = () => {
    signOut(auth);
  };

  const userNavigation = [
    { name: 'My Projects', onClick: 'goToProjects' },
    { name: 'Sign out', href: '#', onClick: 'logOut' },
  ];

  return (
    <>
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3 mr-6">
        <div>
          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    onClick={
                      item.onClick === 'goToProjects'
                        ? goToProjects
                        : item.onClick === 'logOut'
                        ? logOut
                        : null
                    }
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default LoggedNav;
