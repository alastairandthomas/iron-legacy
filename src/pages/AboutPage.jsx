import ProfileCard from '../components/ProfileCard';

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
    <div className="container">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          About us
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
          fugiat aliqua.
        </p>
      </div>
      <div className="container flex justify-center items-center gap-6 p-14 mt-0">
      
        <ProfileCard profile={alastair} />
        <ProfileCard profile={thomas} />
        
      </div>
    </div>
  );
}

export default AboutPage;
