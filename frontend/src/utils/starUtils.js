import React from 'react';
import { BsStarHalf, BsStar, BsStarFill } from 'react-icons/bs';

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<BsStarFill key={`full-${i}`} />);
    }

    if (hasHalfStar) {
        stars.push(<BsStarHalf key="half" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<BsStar key={`empty-${i}`} />);
    }
    return stars;
};

export default renderStars;
