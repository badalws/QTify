import React, { useState } from "react";
import "./Search.css"; // Create this CSS file for styling
import { useNavigate } from "react-router-dom";

const Search = ({ placeholder, searchData }) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  // Handle Input Change
  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Filter albums based on the search query
    if (value.trim() !== "") {
      const results = searchData.filter((album) =>
        album.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  // Handle Submission
  const onSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      const selectedAlbum = searchData.find((album) =>
        album.title.toLowerCase().includes(query.toLowerCase())
      );
      if (selectedAlbum) {
        navigate(`/album/${selectedAlbum.slug}`);
      }
    }
  };

  return (
    <div className="search-container">
      <form className="search-wrapper" onSubmit={onSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={query}
          onChange={handleSearch}
          required
        />
        <button type="submit" className="search-button">🔍</button>
      </form>

      {/* Display filtered results */}
      {filteredResults.length > 0 && (
        <ul className="search-results">
          {filteredResults.map((album) => (
            <li key={album.slug} onClick={() => navigate(`/album/${album.slug}`)}>
              {album.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;