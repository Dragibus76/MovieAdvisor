import React from 'react';
import { Link } from 'react-router-dom';
import MediaCardComponent from './MediaCardComponent';
import '../styles/components/MediaList.css';

const MediaList = ({ mediaItems, mediaType }) => {
  return (
    <div className="card-list">
      {mediaItems.map((media, index) => (
        <Link key={index} to={`/details/${mediaType.toLowerCase()}/${media.id}`}>
          <MediaCardComponent
            title={media.title || media.name}
            coverImage={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.poster_path}`}
            release_date={(media.release_date || media.first_air_date).split('-')[0]}
            original_language={media.original_language}
            vote_average={media.vote_average.toString()}
            numReviews={media.vote_count.toString()}
          />
        </Link>
      ))}
    </div>
  );
};

export default MediaList;
