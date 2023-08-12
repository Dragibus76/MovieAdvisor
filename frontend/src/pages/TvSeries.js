import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import { fetchPopularTvShows } from '../api/ApiCalls';

const TvSeries = () => {
  return (
    <div>
      <h1>TvSeries</h1>
      <p>This is the TvSeries page </p>
      <CarouselComponent fetchData={fetchPopularTvShows} />
    </div>
  );
};

export default TvSeries;
