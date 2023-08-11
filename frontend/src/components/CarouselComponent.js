import React, { useRef, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Carousel.css';

const CarouselComponent = () => {
  const carouselRef = useRef(null);
  const [imageLinks, setImageLinks] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOnSelect = (index, item) => {
    if (index === item.length - 1) {
      carouselRef.current.select(0);
    }
  };

  useEffect(() => {
    const handleWindowSizeChange = () => {
      const isDesktop = window.innerWidth > 768;
      const links = isDesktop
        ? ['https://picsum.photos/800/300', 'https://picsum.photos/800/300', 'https://picsum.photos/800/300', 'https://picsum.photos/800/300']
        : ['https://picsum.photos/800/400', 'https://picsum.photos/800/400', 'https://picsum.photos/800/400', 'https://picsum.photos/800/400'];

      setImageLinks(links);
    };

    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay
      infiniteLoop
      selectedItem={currentImageIndex}
      onSelect={(index, item) => setCurrentImageIndex(index)}
      ref={carouselRef}
    >
      {imageLinks.map((link, index) => (
        <div key={index}>
          <img src={link} alt={`Placeholder ${index + 1}`} />
          <p className="legend">Légende de l'image {index + 1}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
