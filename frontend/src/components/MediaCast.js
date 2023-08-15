import React, { useState, useEffect } from 'react';
import { fetchCredits } from '../api/ApiCalls';
import CastCard from './CastCard';
import { AiFillPlusCircle } from 'react-icons/ai'; 
import { FaSpinner } from 'react-icons/fa';
import '../styles/components/MediaCast.css';


const MediaCast = ({ mediaType, mediaId }) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedCards, setDisplayedCards] = useState(20);
  const [showAllCards, setShowAllCards] = useState(false);

  useEffect(() => {
    const fetchMediaCredits = async () => {
      try {
        const credits = await fetchCredits(mediaType, mediaId);
        setCast(credits.cast);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching media credits:', error);
      }
    };

    fetchMediaCredits();
  }, [mediaType, mediaId]);

  if (isLoading) {
    return <div><FaSpinner /></div>;
  }

  return (
    <div className='MediaCastContainer'>
      <h1>Acteurs</h1>
      <div className="cast-carousel">
        {cast && (showAllCards ? cast : cast.slice(0, displayedCards)).map((actor) => (
          <CastCard key={actor.id} actor={actor} />
        ))}
        {!showAllCards && cast && cast.length > displayedCards && (
          <div className="show-more">
            <AiFillPlusCircle className="show-more-icon" onClick={() => setShowAllCards(true)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCast;
