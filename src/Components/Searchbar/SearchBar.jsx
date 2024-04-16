import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform search or any other action with the query
    console.log('Searching for:', query);
    // Reset the query after submitting
    setQuery('');
  };

  return (
    <form className="flex items-center justify-center mt-8" onSubmit={handleFormSubmit}>
      <div className="relative w-64">
        <input
          type="text"
          className="w-full px-4 py-2 pr-10 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M20.854,19.646l-4.418-4.418C17.374,13.813,18,12.02,18,10c0-4.418-3.582-8-8-8S2,5.582,2,10s3.582,8,8,8 c2.019,0,3.813-0.626,5.228-1.564l4.418,4.418L20.854,19.646z M16,10c0,3.309-2.691,6-6,6S4,13.309,4,10S6.691,4,10,4 S16,6.691,16,10z" />
          </svg>
        </div>
      </div>
      <button
        type="submit"
        className="ml-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;