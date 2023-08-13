import React from 'react';
import MediaPage from '../components/MediaPage';
import { fetchPopularTvShow ,TvSearch } from '../api/ApiCalls';

const TvSeries = () => {
  return (
    <div>
      <h1>Séries TV</h1>
      <MediaPage fetchData={fetchPopularTvShow} mediaType="Tv" searchFunction={TvSearch} />
    </div>
  );
};

export default TvSeries;
