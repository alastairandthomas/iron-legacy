import ProfileCard from '../components/ProfileCard';

const thomas = {
  name: 'Thomas DEBLAY',
  img: 'https://lh3.googleusercontent.com/a/ACg8ocI6BtPyAQdDuUYo80CdhruxxohG3kcoZrJtv5wM_oSVpg=s576-c-no',
  git: 'https://github.com/Thomas-Deblay',
  linkedin: 'https://www.linkedin.com/in/thomas-deblay/',
};

const alastair = {
  name: 'Thomas DEBLAY',
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
        <ProfileCard profile={thomas} />
        <ProfileCard profile={alastair} />
      </div>
    </div>
  );
}

export default AboutPage;
