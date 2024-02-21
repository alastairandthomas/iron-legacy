import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div
      className="bg-white h-screen flex justify-center items-center overflow-hidden"
      style={{ height: `calc(100vh - 70px)` }}
    >
      <div className="relative isolate px-10 lg:px-40">
        <div
          className="absolute inset-x-0 inset-y-[10%] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[50%] aspect-[2/1] w-[100%] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Built by Alastair Longmuir and Thomas Deblay.{' '}
              <Link to="/about">
                <a href="" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  About us <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Ironhack Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We created this website to showcase the projects developed by the January '24 cohort of our Remote Web Development Bootcamp.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/projects">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  See All Projects
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
