import React from 'react';
import MediaPage from '../components/MediaPage';
import { fetchMovieNowPlaying, MovieSearch } from '../api/ApiCalls';

const Movies = () => {
  return (
    <div>
      <h1>Films</h1>
      <MediaPage fetchData={fetchMovieNowPlaying} mediaType="Movie" searchFunction={MovieSearch} />
    </div>
  );
};

export default Movies;
