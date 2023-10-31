import React from "react";

const Search = ({ setSearch, updatePageNumber }) => {
  return (
    <div>
      <form className="">
        <div className="flex justify-center items-center h-20">
          <input
            onChange={(e) => {
              updatePageNumber(1);
              setSearch(e.target.value);
            }}
            placeholder="Search for characters"
            type="text"
            className="w-80 h-10 text-center shadow"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
