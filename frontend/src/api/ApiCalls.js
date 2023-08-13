import config from './config';

//******************** MOVIES ********************
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

  return fetchMovieData(`${config.Base_Url}/movie/popular?${config.lang}&page=${page}`, options);
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

  return fetchMovieData(`${config.Base_Url}/movie/top_rated?${config.lang}&page=${page}`, options);
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

  return fetchMovieData(`${config.Base_Url}/movie/upcoming?${config.lang}&page=${page}`, options);
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

  return fetchMovieData(`${config.Base_Url}/movie/now_playing?${config.lang}&page=${page}`, options);
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

  return fetchMovieData(`${config.Base_Url}/search/movie?query=${query}&include_adult=false${config.lang}&page=${page}`, options);
};

//******************** TV SHOW ********************
// FETCH TV SHOW TOP RATED
const fetchTopRatedTvShow = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`${config.Base_Url}/tv/top_rated?${config.lang}&page=${page}`, options);
};

// FETCH TV SHOW POPULAR
const fetchPopularTvShow = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`${config.Base_Url}/tv/popular?${config.lang}&page=${page}`, options);
};
// FETCH TV SHOW UPCOMING
const fetchUpcomingTvShow = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`${config.Base_Url}/tv/on_the_air?${config.lang}&page=${page}`, options);
};

// FETCH TV SHOW NOW PLAYING
const fetchNowPlayingTvShow = (page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`${config.Base_Url}/tv/airing_today?${config.lang}&page=${page}`, options);
};

// TV SEARCH
const TvSearch = ( page, query ) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`${config.Base_Url}/search/tv?query=${query}&include_adult=false&${config.lang}&page=${page}`, options);
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
  fetchNowPlayingTvShow,
  TvSearch
};
