import { fetchMoviePopular, fetchMovieTopRated, fetchMovieUpcoming, fetchMovieNowPlaying,fetchPopularTvShow, fetchTopRatedTvShow, fetchUpcomingTvShow, fetchNowPlayingTvShow } from '../api/ApiCalls';

export const getFetchFunction = (activeButton) => {
  switch (activeButton) {
    case 'MoviePopular':
      return fetchMoviePopular;
    case 'MovieTopRated':
      return fetchMovieTopRated;
    case 'MovieUpcoming':
      return fetchMovieUpcoming;
    case 'MovieNowPlaying':
      return fetchMovieNowPlaying;
    case 'TvPopular':
      return fetchPopularTvShow;
    case 'TvTopRated':
      return fetchTopRatedTvShow;
    case 'TvUpcoming':
      return fetchUpcomingTvShow;
    case 'TvNowPlaying':
      return fetchNowPlayingTvShow;
    default:
      return fetchMoviePopular;
  }
};