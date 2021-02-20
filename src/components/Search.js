import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          data-testid="search-input"
        />
        <button className="search-btn" type="submit" data-testid="search-btn">
          Go!
        </button>
      </form>
    </>
  );
};

export default Search;
