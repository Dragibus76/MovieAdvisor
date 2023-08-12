import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Pagination from '../components/PaginationComponent';
import { getFetchFunction } from '../utils/FilterCategory';
import CustomButtonCategory from '../components/CustomButtonCategory';
import { MovieSearch } from '../api/ApiCalls';
import '../styles/pages/Movies.css';

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [activeButton, setActiveButton] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const moviesPerPage = 20;
  useEffect(() => {
    const fetchFunction = getFetchFunction(activeButton);

    fetchFunction(currentPage)
      .then(response => {
        setMoviesData(response.results);
        setTotalMovies(response.total_results);
      })
      .catch(error => console.error(error));
  }, [currentPage, activeButton]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() !== '') {
      MovieSearch(currentPage, searchQuery)
        .then(response => {
          setMoviesData(response.results);
          setTotalMovies(response.total_results);
        })
        .catch(error => console.error(error));
    }
  };

  const buttonInfo = [
    { key: 'popular', label: 'Les Plus Populaires' },
    { key: 'topRated', label: 'Les Mieux Notés' },
    { key: 'upcoming', label: 'Prochaines Sorties' },
    { key: 'nowPlaying', label: 'Actuellement Au Cinéma' }
  ];

  return (
    <div>
      <h1>Movies</h1>
      <div className='MoviesContainer'>
        {buttonInfo.map(button => (
          <CustomButtonCategory
            key={button.key}
            label={button.label}
            isActive={activeButton === button.key}
            onClick={() => handleButtonClick(button.key)}
          />
        ))}
      </div>
      <div className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Rechercher un film..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Rechercher</button>
        </form>
      </div>
      <p>This is the movie page</p>
      <CardList movies={moviesData} />
      <Pagination currentPage={currentPage} moviesPerPage={moviesPerPage} totalMovies={totalMovies} onPageChange={handlePageChange} />
    </div>
  );
};

export default Movies;
