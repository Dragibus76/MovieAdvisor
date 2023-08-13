import React from 'react';
import MediaPage from '../components/MediaPage';
import { fetchPopularTvShow } from '../api/ApiCalls';

const TvSeries = () => {
  return (
    <div>
      <h1>Séries TV</h1>
      <MediaPage mediaType="Tv" fetchData={fetchPopularTvShow} />
    </div>
  );
};

export default TvSeries;
