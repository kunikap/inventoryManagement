import React, { useState } from "react";
import "./search.css";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <i className="fa fa-search search-icon search-icon"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Search by Item Name, SKU id…"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      <button
        className="search-button"
        onClick={onSearch.bind(this, searchTerm)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
