import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import renderStars from '../utils/starUtils';
import getCountryFlag from '../utils/CountryFlags';
import '../styles/components/CardComponent.css';

const CardComponent = ({ title, coverImage, release_date, original_language, vote_average, numReviews }) => {
  const countryFlag = getCountryFlag(original_language);

  return (
    <div className="CardContainer">
      <img src={coverImage} className="backimg" />
      <img className="movie-cover" src={coverImage} />
      <AiOutlineHeart className='likeIcon' />
      <h6>{title}</h6>
      <div className='ratingContainer'>
      {renderStars(vote_average / 2)}
      </div>

      <div className="head1">
        <p>Année</p>
        <p>Note</p>
        <p>Vote</p>
        <p>Pays</p>
      </div>
      
      <div className="head2">
        <p>{release_date}</p>
        <p>{vote_average}</p>
        <p>{numReviews}</p>
        <p>{countryFlag}</p> {/* Afficher l'emoji du drapeau */}
      </div>
    </div>
  );
};

export default CardComponent;
