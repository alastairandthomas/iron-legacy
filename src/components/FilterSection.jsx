import React from 'react';
import { useState, useEffect } from 'react';

function FilterSection({ changeSearchState, changeCheckedState }) {
  const handleSearchChange = (e) => {
    changeSearchState(e);
  };

  const handleCheckedChange = (e) => {
    changeCheckedState(e);
  };

  return (
    <div className="mx-auto flex flex-wrap justify-evenly w-full mb-3 bg-gray-200 py-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 basis-[90%] md:basis-[30%] w-max">
        Filter
      </h1>

      <div class="mt-5 md:mt-0 basis-[90%] md:basis-[30%]">
        <input
          class="placeholder:text-slate-400 w-full border-slate-200 rounded-xl shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 font-sans text-base antialiased font-sm md:font-md leading-relaxed text-blue-gray-900"
          placeholder="Search"
          type="text"
          name="search"
          onChange={handleSearchChange}
        />
      </div>

      <div className="mt-5 md:mt-0 basis-[90%] md:basis-[30%]">
        <div class="flex rounded-xl  justify-center items-center m-0">
          <div className="flex items-center m-0">
            <label>
              <input
                name="1"
                type="checkbox"
                onChange={handleCheckedChange}
                aria-label="module 1"
                className="hidden peer"
              />
              <div className="bg-white peer-checked:bg-red-400 px-4 py-2 shadow-md border border-slate-200 rounded-s-xl">
                {' '}
                module 1
              </div>
            </label>
          </div>

          <div className="flex items-center m-0">
            <label>
              <input
                id="horizontal-list-react"
                name="2"
                type="checkbox"
                onChange={handleCheckedChange}
                aria-label="module 2"
                className="hidden peer"
              />
              <div className="bg-white peer-checked:bg-yellow-400 py-2 px-4 shadow-md border border-slate-200 ">
                {' '}
                module 2
              </div>
            </label>
          </div>

          <div className="flex items-center m-0">
            <label>
              <input
                name="3"
                type="checkbox"
                onChange={handleCheckedChange}
                aria-label="module 3"
                className="hidden peer"
              />
              <div className="bg-white peer-checked:bg-blue-400 px-4 py-2 rounded-e-xl shadow-md border border-slate-200">
                {' '}
                module 3
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
