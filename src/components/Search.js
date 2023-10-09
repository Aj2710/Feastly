import React from "react";
import { useState } from "react";

const Search = ({ searchIt }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    searchIt(searchText);
  };

  return (
    <div className="flex items-center ">
      <input
        onChange={(e) => {
          setSearchText(e.target.value);
          searchIt(e.target.value);
        }}
        className="w-96 border-2 border-orange-200 h-10 rounded-l-md outline-none "
        value={searchText}
        type="text"
        placeholder="Search a restaurant you want..."
      />
      <input
        onClick={handleSearchClick}
        className="bg-orange-400 p-2 rounded-r-md text-white h-10"
        type="submit"
      />
    </div>
  );
};

export default Search;
