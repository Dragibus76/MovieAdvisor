import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import '../styles/components/CastCard.css';

const CastCard = ({ actor }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false); 
  }, []);

  if (isLoading) {
    return <div><FaSpinner /></div>;
  }

  const { name, character, profile_path } = actor;
  const profileUrl = profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : 'https://unitedhealthcentres.com/wp-content/uploads/2021/11/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpeg';

  return (
    <div className="cast-card">
      <img src={profileUrl} alt={name} className="cast-card-image" />
      <div className="cast-card-info">
        <h3 className='CardCastName'>{name}</h3>
        <p className='CardCastRole'>{character}</p>
      </div>
    </div>
  );
};

export default CastCard;
