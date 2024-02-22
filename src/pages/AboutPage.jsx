import ProfileCard from '../components/ProfileCard';
import HTML from '../assets/html.png';

import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';

import FireBase from '../assets/firebase.png';

import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const alastair = {
  name: 'Alastair Longmuir',
  img: 'https://firebasestorage.googleapis.com/v0/b/ironhack-projects-f2422.appspot.com/o/images%2Fpassbild.png?alt=media&token=31d6163a-20c8-43a4-a23e-e880d1a5a42d',
  git: 'https://github.com/alaslong/',
  linkedin: 'https://www.linkedin.com/in/alastairlongmuir/',
  website: 'https://alaslong.dev/',
};

const thomas = {
  name: 'Thomas Deblay',
  img: 'https://lh3.googleusercontent.com/a/ACg8ocI6BtPyAQdDuUYo80CdhruxxohG3kcoZrJtv5wM_oSVpg=s576-c-no',
  git: 'https://github.com/Thomas-Deblay/',
  linkedin: 'https://www.linkedin.com/in/thomas-deblay/',
  website: 'https://thomasdeblay.com',
};

function AboutPage() {
  return (
    <div className="container flex flex-col md:flex-row pt-6">
      <div className="pt-14">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About our project
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to Iron Legacy, our web app for Ironhack students to showcase
          the projects they've built throughout their bootcamp. We designed with
          the vision of providing a centralised hub for students to exhibit
          their skills and innovations.
          <br />
          <br />
          Whether you're a prospective student looking for inspiration, an
          industry professional scouting for talent, or our esteemed course
          instructor, Luis, searching for specific projects from previous
          students, our app ensures that finding remarkable projects is simple.
          <br />
          <br />
          With the ability for each user to mark their favourites, you can
          easily bookmark interesting projects for future reference or
          inspiration. This feature enhances user experience and fosters a sense
          of community and recognition among Ironhack students.
          <br />
          <br />
          Behind the scenes, Iron Legacy leverages the power of{' '}
          <strong>Firebase</strong> for seamless database management, storage,
          and user authorisation. Additionally, the integration of the{' '}
          <strong>GitHub API</strong> enables the platform to pull data on
          posted projects.
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 mt-8">
          <div className="  hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto bg-black rounded-2xl p-2"
              src={GitHub}
              alt="HTML icon"
            />
            <p className="my-4">Github API</p>
          </div>

          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
      <div className="container flex justify-center items-center gap-6 p-14 mt-0 flex-wrap">
        <ProfileCard profile={alastair} />
        <ProfileCard profile={thomas} />
      </div>
    </div>
  );
}

export default AboutPage;
