import React, { useRef, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/components/CarouselComponent.css';

const CarouselComponent = ({ fetchData }) => {
  const carouselRef = useRef(null);
  const [items, setItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    fetchData()
      .then(response => {
        setItems(response.results.slice(0, 6));
      })
      .catch(error => console.error(error));
  }, [fetchData]);

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay
      infiniteLoop
      selectedItem={currentItemIndex}
      onSelect={(index, item) => setCurrentItemIndex(index)}
      ref={carouselRef}
    >
      {items.map((item, index) => (
        <div key={index} className="carousel-slide">
          <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt={`Item ${index + 1}`} />
          <div className="carousel-content">
            <h3 className="carousel-title">{item.title || item.original_name}</h3>
            <p className="carousel-overview">{item.overview}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
