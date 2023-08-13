import React from 'react';
import MediaCardComponent from './MediaCardComponent';
import '../styles/components/MediaList.css';

const MediaList = ({ mediaItems }) => {
  return (
    <div className="card-list">
      {mediaItems.map((media, index) => (
        <MediaCardComponent
          key={index}
          title={media.title || media.name}
          coverImage={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.poster_path}`}
          release_date={(media.release_date || media.first_air_date).split('-')[0]}
          original_language={media.original_language}
          vote_average={media.vote_average.toString()}
          numReviews={media.vote_count.toString()}
        />
      ))}
    </div>
  );
};

export default MediaList;
