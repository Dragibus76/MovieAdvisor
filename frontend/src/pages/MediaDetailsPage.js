import React from 'react';
import { useParams } from 'react-router-dom';

const MediaDetailsPage = () => {
  const { id } = useParams();


  return (
    <div>
  
      <h2>Détails du média ID: {id}</h2>
    </div>
  );
};

export default MediaDetailsPage;
