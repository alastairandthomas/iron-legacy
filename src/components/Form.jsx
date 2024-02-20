import React from "react";

function Form({ inputs, submitHandler, inputHandler, navigate, task }) {
  return (
    <div className="container mx-auto">
      <form onSubmit={submitHandler}>
        <div className="space-y-24">
          <div className="border-b border-gray-900/10 pb-12 space-y-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-slate-400">
              {`${task} your Ironhack project`}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-slate-400">
              {/* Share your Ironhack project */}
            </p>

            <div className="sm:col-span-4 ">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                Title
              </label>
              <div className="mt-2">
                <input
                  name="title"
                  type="text"
                  placeholder="My Project"
                  value={inputs.title || ""}
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
                  placeholder="e.g. Ironhack Projects allows users to upload and showcase their projects. We implemented Firebase to handle user authorisation and meet our database requirements"
                  value={inputs.description || ""}
                  onChange={inputHandler}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
            </div>

            <div className="flex justify-between">
              <div className="sm:col-span-4 basis-[49%]">
                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                  GitHub Repository
                </label>
                <div className="mt-2">
                  <input
                    name="githubRepo"
                    placeholder="https://github.com/me/project"
                    type="url"
                    value={inputs.githubRepo || ""}
                    onChange={inputHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-200  focus:ring-2  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4 basis-[49%]">
                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                  Project Link
                </label>
                <div className="mt-2">
                  <input
                    name="projectLink"
                    type="url"
                    placeholder="https://myproject.netlify.com"
                    value={inputs.projectLink || ""}
                    onChange={inputHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-200  focus:ring-2  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>


            <div className="flex justify-between items-center space-y-8">
              <div className="sm:col-span-4 basis-[49%]">
                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                  Screenshot
                </label>
                <div className="mt-2">
                  <input
                    name="image"
                    type="file"
                    value={inputs.image || ""}
                    onChange={inputHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4 basis-[49%]">
                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                  Module
                </label>
                <div className="flex justify-around">
                  <div className="form-control">
                    <label className="label cursor-pointer space-x-4">
                      <span className="label-text">1</span>
                      <input
                        type="radio"
                        name="module-radio"
                        value="module1"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer space-x-4">
                      <span className="label-text">2</span>
                      <input
                        type="radio"
                        name="module-radio"
                        value="module2"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer space-x-4">
                      <span className="label-text">3</span>
                      <input
                        type="radio"
                        name="module-radio"
                        value="module3"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
            <div className="sm:col-span-4 basis-[49%]">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                Author
              </label>
              <div className="mt-2">
                <input
                  name="authorName"
                  type="text"
                  value={inputs.authorName || ""}
                  onChange={inputHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-200  focus:ring-2  sm:text-sm sm:leading-6"
                  disabled
                />
              </div>
            </div>
            <div className="sm:col-span-4 basis-[49%]">
              <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">
                GitHub Handle
              </label>
              <div className="mt-2">
                <input
                  name="authorHandle"
                  type="text"
                  value={inputs.authorHandle || ""}
                  onChange={inputHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-200  focus:ring-2  sm:text-sm sm:leading-6"
                  disabled
                />
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
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
    </div>
  );
}

export default Form;
