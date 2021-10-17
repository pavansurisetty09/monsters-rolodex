import React from "react";
import "./SearchBox.css";

export const SearchBox = ({ placeholder, searchHandler, searchText }) => (
  <input
    className="search"
    type="search"
    onChange={searchHandler}
    placeholder={placeholder}
  />
);
