import React from 'react';
import CardComponent from './CardComponent';
import '../styles/components/CardList.css';

const CardList = ({ movies }) => {

  return (
    <div className="card-list">
      {movies.map((movie, index) => (
        <CardComponent
          key={index}
          title={movie.title}
          coverImage={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
          release_date={movie.release_date.split('-')[0]}
          original_language={movie.original_language}
          vote_average={movie.vote_average.toString()}
          numReviews={movie.vote_count.toString()}
        />
      ))}
    </div>
  );
};

export default CardList;
