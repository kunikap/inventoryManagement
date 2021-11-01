import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="search-wrapper">
        <div className="search-bar">
          <i className="fa fa-search search-icon search-icon"></i>
          <input type="text" className="search-input" placeholder="Search by Item Name, SKU id…"/>
        </div>
        <button className="search-button">Search</button>
      </div>
  );
};

export default Search;
