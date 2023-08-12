import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Pagination from '../components/PaginationComponent';
import { getFetchFunction } from '../utils/FilterCategory';

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [activeButton, setActiveButton] = useState('popular'); // Ajout du state pour suivre le bouton actif

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

  return (
    <div>
      <h1>Movies</h1>
      <div>
        {/* Ajouter les boutons pour changer la liste */}
        <button onClick={() => handleButtonClick('popular')}>Les Plus Populaire</button>
        <button onClick={() => handleButtonClick('topRated')}>Les Mieux Notés</button>
        <button onClick={() => handleButtonClick('upcoming')}>Prochaine Sorties</button>
        <button onClick={() => handleButtonClick('nowPlaying')}>Actuelement Au Cinéma</button>
      </div>
      <p>This is the movie page</p>
      <CardList movies={moviesData} />
      <Pagination currentPage={currentPage} moviesPerPage={moviesPerPage} totalMovies={totalMovies} onPageChange={handlePageChange} />
    </div>
  );
};

export default Movies;
