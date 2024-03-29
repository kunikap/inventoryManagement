import React, { useState } from "react";
import "./search.css";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === "") {
      onSearch("");
    }
  };
  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  }



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
        {searchTerm && <button className="cross-button" onClick={clearSearch}>
          <i class="fas fa-times"></i>
        </button>}
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
