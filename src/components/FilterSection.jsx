import React from "react";
import { useState, useEffect } from "react";

function FilterSection({ changeSearchState, changeCheckedState }) {
  const handleSearchChange = (e) => {
    changeSearchState(e);
  };

  const handleCheckedChange = (e) => {
    changeCheckedState(e);
  };

  return (
    <div className="mx-auto w-full mb-3">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 ml-6 md:ml-[26%] mb-3">
        Filter
      </h1>
      <div className="flex justify-center md:justify-center flex-wrap gap-5 md:gap-8">
        <div class="basis-[90%] md:basis-[23.5%]">
          <input
            class="placeholder:text-slate-400 w-full border-slate-200 rounded-xl shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 font-sans text-base antialiased font-sm md:font-md leading-relaxed text-blue-gray-900"
            placeholder="Search"
            type="text"
            name="search"
            onChange={handleSearchChange}
          />
        </div>

        <div className="basis-[90%] md:basis-[23.5%]">
          <div class="flex rounded-xl shadow-md border border-slate-200 justify-around items-center">

            <span className="font-sans text-base antialiased font-sm md:font-md leading-relaxed text-blue-gray-900 m-2">Module:</span>

            <div className="flex items-center m-2">
              <input
                id="horizontal-list-react"
                name="1"
                type="checkbox"
                onChange={handleCheckedChange}
                class="h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
              />

              <span class="font-sans text-base antialiased font-sm md:font-md leading-relaxed text-blue-gray-900 mx-3">
                1
              </span>
            </div>

            <div className="flex items-center m-2">
              <input
                id="horizontal-list-react"
                name="2"
                type="checkbox"
                onChange={handleCheckedChange}
                class="h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
              />

              <span class="font-sans text-base antialiased font-sm md:font-md leading-relaxed text-blue-gray-900 mx-3">
                2
              </span>
            </div>

            <div className="flex items-center m-2">
              <input
                id="horizontal-list-react"
                name="3"
                type="checkbox"
                onChange={handleCheckedChange}
                class="h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
              />

              <span class="font-sans text-base antialiased font-sm md:font-md leading-relaxed text-blue-gray-900 mx-3">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;