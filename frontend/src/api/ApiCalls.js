import config from './config';

const fetchMovieData = (url, options) => {
  return fetch(url, options)
    .then(response => response.json())
    .catch(err => console.error(err));
};

// FETCH MOVIE POPULAR
const fetchMoviePopular = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=${page}`, options);
};

// FETCH MOVIE TOP RATED
const fetchMovieTopRated = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=${page}`, options);
};

// FETCH MOVIE UPCOMING
const fetchMovieUpcoming = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=${page}`, options);
};

// FETCH MOVIE NOW PLAYING
const fetchMovieNowPlaying = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=${page}`, options);
};

// MOVIE SEARCH
const MovieSearch = ( page, query ) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=fr-FR&page=${page}`, options);
};

//TV SHOW
const fetchTopRatedTvShow = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`https://api.themoviedb.org/3/tv/top_rated?language=fr-FR&page=${page}`, options);
};

const fetchPopularTvShow = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`https://api.themoviedb.org/3/tv/popular?language=fr-FR&page=${page}`, options);
};

const fetchUpcomingTvShow = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`https://api.themoviedb.org/3/tv/on_the_air?language=fr-FR&page=${page}`, options);
};

const fetchNowPlayingTvShow = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`https://api.themoviedb.org/3/tv/airing_today?language=fr-FR&page=${page}`, options);
};


export {
  fetchMoviePopular,
  fetchMovieTopRated,
  fetchMovieUpcoming,
  fetchMovieNowPlaying,
  MovieSearch,
  fetchTopRatedTvShow,
  fetchPopularTvShow,
  fetchUpcomingTvShow,
  fetchNowPlayingTvShow
 
};
