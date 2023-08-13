import React from 'react';
import MediaPage from '../components/MediaPage';
import { fetchMovieNowPlaying } from '../api/ApiCalls';


const Movies = () => {
  return (
    <div>
      <h1>Films</h1>
      <MediaPage mediaType="Movie" fetchData={fetchMovieNowPlaying} />
    </div>
  );
};

export default Movies;
