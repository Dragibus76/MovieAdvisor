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
const fetchMediaNowPlaying = (mediaType, page) => {
  const endpoint = mediaType === 'movie' ? 'now_playing' : 'airing_today';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`${config.Base_Url}/${mediaType}/${endpoint}?${config.lang}&page=${page}`, options);
};

// FETCH MOVIE DETAILS
const fetchMediaDetails = (mediaType, id) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`${config.Base_Url}/${mediaType}/${id}?${config.lang}`, options);
};

// FETCH CREDITS FOR MOVIE OR TV SHOW
const fetchCredits = (mediaType, id) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`${config.Base_Url}/${mediaType}/${id}/credits?${config.lang}`, options);
};

// FETCH VIDEOS FOR MOVIE OR TV SHOW
const fetchVideos = (mediaType, id) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: config.Authorization,
    },
  };

  return fetchMovieData(`${config.Base_Url}/${mediaType}/${id}/videos?${config.lang}`, options);
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
  fetchMediaNowPlaying,
  fetchMediaDetails,
  MovieSearch,
  fetchTopRatedTvShow,
  fetchPopularTvShow,
  fetchUpcomingTvShow,
  fetchNowPlayingTvShow,
  // fetchTvShowDetails,
  TvSearch,
  fetchCredits,
  fetchVideos
};
