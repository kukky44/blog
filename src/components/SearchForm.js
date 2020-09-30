import React, { useState } from "react";
import TagList from "./TagList";

let isInput = false;

const SearchForm = ({ searchData, location }) => {
  const [searchVal, setSearchVal] = useState("");
  const [relustTags, setResultTags] = useState([]);

  const inputForm = document.getElementById("search-input");
  function validation(e) {
    if (!inputForm.value) {
      e.preventDefault();
      return false;
    }
  }

  const searchQuery =
    new URLSearchParams(location.search).get("keywords") || "";
  if (searchQuery && !searchVal) {
    if (isInput === false) setSearchVal(searchQuery);
  }

  const handleChange = (e) => {
    isInput = true;

    const SearchBtn = document.getElementById("SearchFormBtn");
    setSearchVal(e.target.value);
    if (!e.target.value) {
      SearchBtn.classList.remove("active");
      setResultTags([]);
      return;
    }
    SearchBtn.classList.add("active");

    const matchedTags = searchData.tagList.filter((tag) => {
      return tag.includes(e.target.value);
    });
    setResultTags(matchedTags);
  };

  return (
    <div className="searchFormWrapper">
      <form
        className="searchForm"
        role="search"
        action="/search"
        method="GET"
        onSubmit={validation}
      >
        <input
          type="search"
          id="search-input"
          name="keywords"
          className="searchForm-input"
          autoComplete="off"
          placeholder="Search..."
          value={searchVal}
          onChange={handleChange}
          autoFocus={searchQuery ? false : true} // eslint-disable-line
        />
        <button
          id="SearchFormBtn"
          className="material-icons searchForm-btn"
          type="submit"
        >
          search
        </button>
      </form>
      {relustTags.length ? (
        <div className="searchForm-suggestTag">
          <div className="searchForm-suggestTag-title">Mybe...</div>
          <TagList items={relustTags} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchForm;
