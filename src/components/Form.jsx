import React from 'react';
import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase';
import { deleteField } from 'firebase/firestore';

function Form({
  inputs,
  setInputs,
  submitHandler,
  inputHandler,
  navigate,
  task,
  id,
}) {
  const imgUploadHandler = (e) => {
    e.preventDefault();

    const fileName = uuidv4();
    const file = e.target.files[0];

    const storageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        console.log(snapshot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => ({ ...prev, image: downloadURL }));
        });
      }
    );
  };

  console.log(id);

  const deleteImg = (e) => {
    e.preventDefault();

    db.collection('projects').doc(id).update({
      image: deleteField(),
    });

    inputs.image = null;
  };

  useEffect(() => {
    if (inputs.githubRepo) {
      let urlEnding = inputs.githubRepo;

      urlEnding = urlEnding.replace('https://github.com/', '');
      urlEnding = urlEnding.replace('https://www.github.com/', '');
      urlEnding = urlEnding.replace('http://www.github.com/', '');
      urlEnding = urlEnding.replace('http://github.com/', '');

      if (urlEnding[urlEnding.length - 1] === `/`) {
        urlEnding = urlEnding.slice(0, urlEnding.length - 1);
      }

      console.log(urlEnding);

      fetch(`https://api.github.com/repos/${urlEnding}/languages`, {
        method: 'GET',
        headers: {
          Authorization:
            'Basic ' +
            btoa(
              `bb86a00d59b7ecf4fcda` +
                ':' +
                `a18f8f792049c9e824fc1e712f7a2d780007f655`
            ),
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setInputs((prev) => ({ ...prev, tags: Object.keys(result) }));
        })
        .catch((err) => console.log(err));
    }
  }, [inputs.githubRepo]);

  return (
    <form onSubmit={submitHandler}>
      <div className="container w-[90%] mt-20">
        <div className="border-b border-gray-900/10 pb-8 space-y-4 flex flex-col">
          <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-slate-400">
            {`${task} your Ironhack project`}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-slate-400">
            {/* Share your Ironhack project */}
          </p>

          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
              Title
            </label>
            <div className="mt-2">
              <input
                name="title"
                type="text"
                placeholder="Ironhack Projects"
                value={inputs.title || ''}
                onChange={inputHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
              Headline
            </label>
            <div className="mt-2">
              <input
                name="headline"
                type="text"
                placeholder="Providing a showcase for students in the January '24 cohort of Ironhack's Remote Web Development Bootcamp."
                value={inputs.headline || ''}
                onChange={inputHandler}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
              Description
            </label>
            <div className="mt-2">
              <textarea
                name="description"
                type="text"
                placeholder="The SPA (single page application) was built using React and uses the Tailwind framework for styling. During the initial development process we utilised Adaptable to set up a mock JSON server, as this didn't meet our data persistence requirements, we implemented Firebase as our database. User authorisation functionality is also handled by Firebase. "
                value={inputs.description || ''}
                onChange={inputHandler}
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

          <div className="flex justify-between flex-wrap">
            <div className="lg:basis-[49%] basis-full">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                GitHub Repository
              </label>
              <div className="mt-2">
                <input
                  name="githubRepo"
                  placeholder="https://github.com/alastairandthomas/ironhack-projects"
                  type="url"
                  value={inputs.githubRepo || ''}
                  onChange={inputHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="lg:basis-[49%] basis-full">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                Project Link
              </label>
              <div className="mt-2">
                <input
                  name="projectLink"
                  type="url"
                  placeholder="https://ironhack-projects.netlify.com"
                  value={inputs.projectLink || ''}
                  onChange={inputHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="flex lg:justify-between flex-wrap mt-6">
            <div className="lg:basis-[49%] basis-full">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                Screenshot
              </label>
              <div className="flex flex-col items-center mt-6">
                {inputs.image ? (
                  <>
                    <img className="w-[70%]" src={inputs.image} />
                    <button
                      className="btn btn-outline btn-error mt-6"
                      onClick={deleteImg}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <input
                    type="file"
                    onChange={imgUploadHandler}
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                  />
                )}
              </div>
            </div>

            <div className="lg:basis-[49%] basis-full">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                Module
              </label>
              <div className="flex justify-evenly space-y-4">
                <span />
                <span className="label-text">1</span>
                <input
                  type="radio"
                  name="module"
                  value="1"
                  onChange={inputHandler}
                  className="radio radio-primary"
                  checked={inputs.module === '1'}
                />
                <span className="label-text">2</span>
                <input
                  type="radio"
                  name="module"
                  value="2"
                  onChange={inputHandler}
                  className="radio radio-primary"
                  checked={inputs.module === '2'}
                />
                <span className="label-text">3</span>
                <input
                  type="radio"
                  name="module"
                  value="3"
                  onChange={inputHandler}
                  className="radio radio-primary"
                  checked={inputs.module === '3'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mt-7 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => {
            navigate(`/projects`);
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
