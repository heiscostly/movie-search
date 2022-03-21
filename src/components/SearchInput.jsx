import React from "react";
import "./styles/searchInput.scss";

const SearchInput = ({ handleInput, search }) => {
  return (
    <div className="search">
      <label>
        <span>Search</span>
        <input type="text" onChange={handleInput} onKeyPress={search} />
      </label>
    </div>
  );
};

export default SearchInput;
