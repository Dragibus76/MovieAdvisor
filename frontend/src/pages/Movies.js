import React from 'react';
import MediaPage from '../components/MediaPage';
import { fetchMediaNowPlaying, MovieSearch } from '../api/ApiCalls';
import CarouselComponent from '../components/CarouselComponent';

const Movies = () => {
  return (
    <div>
      <h1>Films</h1>
      <CarouselComponent fetchData={(page) => fetchMediaNowPlaying('movie', page)} />
      <MediaPage fetchData={fetchMediaNowPlaying} mediaType="Movie" searchFunction={MovieSearch} />
    </div>
  );
};

export default Movies;
