import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import { fetchMoviePopular } from '../api/ApiCalls';

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetchMoviePopular()
      .then(response => setMoviesData(response.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <p>This is the movie page</p>
      <CardList movies={moviesData} />
    </div>
  );
};

export default Movies;
