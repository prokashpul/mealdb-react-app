import React from "react";
import "./Search.css";
const Search = () => {
  return (
    <div className="search-area">
      <input type="text" name="search" id="search-input" placeholder="Search" />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default Search;
