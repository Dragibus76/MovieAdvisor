import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/components/SearchBar.css';

const SearchBar = ({ onSearch, searchFunction }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      searchFunction(1, searchQuery)
        .then(response => {
          onSearch(response.results, response.total_results);
        })
        .catch(error => console.error(error));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="SearchBarContainer">
      <div className="SearchInputContainer">
        <input
          type="text"
          className="SearchInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher..."
          onKeyPress={handleKeyPress}
        />
        <FaSearch className="SearchIcon" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
