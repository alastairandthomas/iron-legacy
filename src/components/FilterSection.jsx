import React from 'react';
import { useState } from 'react';

function FilterSection() {
  const [inputs, setInputs] = useState({});
  const [isChecked, setIsChecked] = useState({
    module1: false,
    module2: false,
    module3: false,
  });

  const handleSearchChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(inputs);
  };

  const handleCheckedChange = (e) => {
    setIsChecked((prev) => ({ ...prev, [e.target.name]: e.target.checked }));

    console.log(isChecked);
  };

  return (
    <header className="bg-slate-200 shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Filters
        </h1>
        <div className="flex justify-center gap-6">
          <label class="relative block basis-1/2">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
              onChange={handleSearchChange}
            />
          </label>
          <div className="basis-1/2">
            <div class="relative flex w-full max-w-[35rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <nav class="flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                <div
                  role="button"
                  class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <label
                    htmlFor="horizontal-list-react"
                    class="flex items-center w-full px-3 py-2 cursor-pointer"
                  >
                    <div class="grid mr-3 place-items-center">
                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-0 rounded-full cursor-pointer"
                          htmlFor="horizontal-list-react"
                        >
                          <input
                            id="horizontal-list-react"
                            name="module1"
                            type="checkbox"
                            value={isChecked}
                            onChange={handleCheckedChange}
                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                          />
                          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      module-1
                    </p>
                  </label>
                </div>
                <div
                  role="button"
                  class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <label
                    htmlFor="horizontal-list-vue"
                    class="flex items-center w-full px-3 py-2 cursor-pointer"
                  >
                    <div class="grid mr-3 place-items-center">
                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-0 rounded-full cursor-pointer"
                          htmlFor="horizontal-list-vue"
                        >
                          <input
                            id="horizontal-list-vue"
                            type="checkbox"
                            name="module2"
                            value={isChecked}
                            onChange={handleCheckedChange}
                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                          />
                          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      module-2
                    </p>
                  </label>
                </div>
                <div
                  role="button"
                  class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <label
                    htmlFor="horizontal-list-svelte"
                    class="flex items-center w-full px-3 py-2 cursor-pointer"
                  >
                    <div class="grid mr-3 place-items-center">
                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-0 rounded-full cursor-pointer"
                          htmlFor="horizontal-list-svelte"
                        >
                          <input
                            id="horizontal-list-svelte"
                            type="checkbox"
                            name="module3"
                            value={isChecked}
                            onChange={handleCheckedChange}
                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                          />
                          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      module-3
                    </p>
                  </label>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* <div className="flex">
          <label class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
            <svg fill="currentColor"></svg>
            Google Pay
            <input type="radio" class="checked:border-indigo-500 ..." />
          </label>
          <label class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
            <svg fill="currentColor"></svg>
            Google Pay
            <input type="radio" class="checked:border-indigo-500 ..." />
          </label>
          <label class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ..">
            <svg fill="currentColor"></svg>
            Google Pay
            <input type="radio" class="checked:border-indigo-500 ..." />
          </label>
        </div> */}
      </div>
    </header>
  );
}

export default FilterSection;
