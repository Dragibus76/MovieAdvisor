import React, { useState } from 'react';
import { MovieSearch } from '../api/ApiCalls';

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

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
