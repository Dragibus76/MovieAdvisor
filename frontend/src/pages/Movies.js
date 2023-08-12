import React from 'react';
import CardList from '../components/CardList';

const moviesData = [
  {
    title: "Movie 1",
    coverImage: "https://in.bmscdn.com/iedb/movies/images/website/poster/large/angry-bird-2-et00087850-07-11-2018-01-47-33.jpg",
    year: "2022",
    country: "🇺🇸",
    rating: "4.2",
    numReviews: "120"
  },
  {
    title: "Movie 2",
    coverImage: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/miLqrNESJcrWAMsrajqUYtlt9r8.jpg",
    year: "2020",
    country: "🇬🇧",
    rating: "3.8",
    numReviews: "85"
  },
  {
    title: "Movie 3",
    coverImage: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1Jww51q6f7GYIvt8XgtHKrrREnX.jpg",
    year: "2021",
    country: "🇨🇦",
    rating: "4.5",
    numReviews: "150"
  },
  {
    title: "Movie 4",
    coverImage: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cKCQRjp8WyOTGAZJSOf5SLjRyis.jpg",
    year: "2019",
    country: "🇦🇺",
    rating: "3.9",
    numReviews: "95"
  },
  {
    title: "Movie 5",
    coverImage: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tPnya8bGupPR7dYxlh5w4z3P6pW.jpg",
    year: "2023",
    country: "🇫🇷",
    rating: "4.8",
    numReviews: "200"
  },
  
  // Ajoutez plus de films selon vos besoins
];


const Movies = () => {
  return (
    <div>
      <h1>Movies</h1>
      <p>This is the movie page</p>
      <CardList movies={moviesData} />
    </div>
  );
};

export default Movies;

