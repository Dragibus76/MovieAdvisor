import React, { useState } from 'react';
import { MovieSearch } from '../api/ApiCalls';
import '../styles/components/SearchBar.css';
import { FaSearch } from 'react-icons/fa'; // Import de l'icône de loupe

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      MovieSearch(1, searchQuery)
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
          placeholder="Rechercher un Film ..."
          onKeyPress={handleKeyPress} // Appeler la recherche quand on appuie sur "Enter"
        />
        <FaSearch className="SearchIcon" onClick={handleSearch} /> {/* Icône de loupe */}
      </div>
    </div>
  );
};

export default SearchBar;
