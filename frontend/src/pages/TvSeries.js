import React from 'react';
import MediaPage from '../components/MediaPage';
import { fetchMediaNowPlaying, fetchPopularTvShow ,TvSearch } from '../api/ApiCalls';
import CarouselComponent from '../components/CarouselComponent';

const TvSeries = () => {
  return (
    <div>
      <h1>Séries TV</h1>
      <CarouselComponent fetchData={(page) => fetchMediaNowPlaying('tv', page)} />
      <MediaPage fetchData={fetchPopularTvShow} mediaType="Tv" searchFunction={TvSearch} />
    </div>
  );
};

export default TvSeries;
