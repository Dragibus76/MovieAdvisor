import { fetchMoviePopular, fetchMovieTopRated, fetchMovieUpcoming, fetchMovieNowPlaying } from '../api/ApiCalls';

export const getFetchFunction = (activeButton) => {
  switch (activeButton) {
    case 'popular':
      return fetchMoviePopular;
    case 'topRated':
      return fetchMovieTopRated;
    case 'upcoming':
      return fetchMovieUpcoming;
    case 'nowPlaying':
      return fetchMovieNowPlaying;
    default:
      return fetchMoviePopular;
  }
};