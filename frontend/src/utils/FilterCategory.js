import { fetchMoviePopular, fetchMovieTopRated, fetchMovieUpcoming, fetchMediaNowPlaying,fetchPopularTvShow, fetchTopRatedTvShow, fetchUpcomingTvShow, fetchNowPlayingTvShow } from '../api/ApiCalls';

export const getFetchFunction = (activeButton) => {
  switch (activeButton) {
    case 'MoviePopular':
      return fetchMoviePopular;
    case 'MovieTopRated':
      return fetchMovieTopRated;
    case 'MovieUpcoming':
      return fetchMovieUpcoming;
    case 'MovieNowPlaying':
      return fetchMediaNowPlaying;
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