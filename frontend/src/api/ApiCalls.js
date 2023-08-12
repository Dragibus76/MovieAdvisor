import config from './config';

const fetchMovieData = (url, options) => {
  return fetch(url, options)
    .then(response => response.json())
    .catch(err => console.error(err));
};

// FETCH MOVIE POPULAR
const fetchMoviePopular = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization
    }
  };

  return fetchMovieData('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options);
};

// FETCH MOVIE TOP RATED
const fetchMovieTopRated = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization
    }
  };

  return fetchMovieData('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options);
};

// FETCH MOVIE UPCOMING
const fetchMovieUpcoming = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization
    }
  };

  return fetchMovieData('https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1', options);
};

// FETCH MOVIE NOW PLAYING
const fetchMovieNowPlaying = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization
    }
  };

  return fetchMovieData('https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1', options);
};

export {
  fetchMoviePopular,
  fetchMovieTopRated,
  fetchMovieUpcoming,
  fetchMovieNowPlaying
};
