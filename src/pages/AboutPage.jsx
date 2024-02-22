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
  git: 'https://github.com/alaslong',
  linkedin: 'https://www.linkedin.com/in/alastairlongmuir/',
};

const thomas = {
  name: 'Thomas Deblay',
  img: 'https://lh3.googleusercontent.com/a/ACg8ocI6BtPyAQdDuUYo80CdhruxxohG3kcoZrJtv5wM_oSVpg=s576-c-no',
  git: 'https://github.com/Thomas-Deblay',
  linkedin: 'https://www.linkedin.com/in/thomas-deblay/',
};

function AboutPage() {
  return (
    <div className="container flex flex pt-6">
      <div className="">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About our project
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
          fugiat aliqua.
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
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
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB API</p>
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
