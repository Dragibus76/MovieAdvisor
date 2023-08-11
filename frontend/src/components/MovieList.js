import React from 'react';
import CardComponent from '../components/CardComponent';
import '../styles/MovieList.css'; 

const MovieList = ({ movies }) => {
  return (
    <div className="card-list">
      {movies.map((movie, index) => (
        <CardComponent
          key={index}
          title={movie.title}
          coverImage={movie.coverImage}
          year={movie.year}
          country={movie.country}
          rating={movie.rating}
          numReviews={movie.numReviews}
        />
      ))}
    </div>
  );
};

export default MovieList;
