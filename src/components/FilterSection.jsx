import React from 'react';

function FilterSection() {
  return (
    <header className="bg-slate-200 shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Filters
        </h1>
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
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
