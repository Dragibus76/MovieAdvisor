import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import renderStars from '../utils/starUtils';
import '../styles/Card.css';



const CardComponent = ({ title, coverImage, year, country, rating, numReviews }) => {
  return (
    <div className="CardContainer">
      <img src={coverImage} className="backimg" />
      <img className="movie-cover" src={coverImage} />
      <AiOutlineHeart className='likeIcon' />
      <h6>{title}</h6>
      <div className='ratingContainer'>
        {renderStars(parseFloat(rating))}
      </div>

      <div className="head1">
        <p>Année</p>
        <p>Pays</p>
        <p>Rating</p>
        <p>Avis</p>
      </div>
      
      <div className="head2">
        <p>{year}</p>
        <p>{country}</p>
        <p>{rating}</p>
        <p>{numReviews}</p>
      </div>
    </div>
  );
};

export default CardComponent;
