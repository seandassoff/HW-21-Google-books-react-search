import React from "react";

function SearchForm(props) {
  return (
    <div id="searchContainer">
      <h3>Book Search</h3>
      <form
        id="bookSearch"
        className="mt-0 p-0 d-flex justify-content-start align-items-end"
      >
        <div className="w-100">
          <label htmlFor="bookInput" form="bookSearch">
            Enter a book to search:
          </label>
          <br />
          <input
            type="text"
            name="bookInput"
            id="bookInput"
            className="w-100 m-0"
            form="bookSearch"
            onChange={e => props.handleChange(e)}
            placeholder="Book Title"
            required
          />
        </div>
        <button type="submit" onClick={e => props.handleSearchClick(e)}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
