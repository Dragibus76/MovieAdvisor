import React, { useState, useEffect } from 'react';
import MediaList from '../components/MediaList';
import Pagination from '../components/PaginationComponent';
import { getFetchFunction } from '../utils/FilterCategory';
import CustomButtonCategory from '../components/CustomButtonCategory';
import SearchBar from '../components/SearchBar';
import CarouselComponent from '../components/CarouselComponent';
import '../styles/components/MediaPage.css';

const MediaPage = ({ fetchData, mediaType, searchFunction }) => {
  const [mediaData, setMediaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalMedia, setTotalMedia] = useState(0);
  const [activeButton, setActiveButton] = useState(`${mediaType}Popular`);

  const mediaPerPage = 20;

  useEffect(() => {
    const fetchFunction = getFetchFunction(activeButton);

    fetchFunction(currentPage)
      .then(response => {
        const mediaWithImages = response.results.filter(media => media.poster_path !== null);
        setMediaData(mediaWithImages);
        setTotalMedia(response.total_results);
      })
      .catch(error => console.error(error));
  }, [currentPage, activeButton]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setCurrentPage(1);
  };

  const handleSearchResult = (searchResults, totalResults) => {
    const searchResultsWithImages = searchResults.filter(media => media.poster_path !== null);
    setMediaData(searchResultsWithImages);
    setTotalMedia(totalResults);
    setCurrentPage(1);
  };

  const buttonInfo = [
    { key: `${mediaType}Popular`, label: 'Les Plus Populaires' },
    { key: `${mediaType}TopRated`, label: 'Les Mieux Notés' },
    { key: `${mediaType}Upcoming`, label: 'Prochaines Sorties' },
    { key: `${mediaType}NowPlaying`, label: 'En ce Moment' },
  ];

  return (
    <div>
      <CarouselComponent fetchData={fetchData} />
      <div className='MediaContainer'>
        {buttonInfo.map(button => (
          <CustomButtonCategory
            key={button.key}
            label={button.label}
            isActive={activeButton === button.key}
            onClick={() => handleButtonClick(button.key)}
          />
        ))}
      </div>
      <SearchBar onSearch={(results, totalResults) => handleSearchResult(results, totalResults)} searchFunction={searchFunction} />
      {mediaData && <MediaList mediaItems={mediaData} mediaType={mediaType}/>}
      <Pagination currentPage={currentPage} totalPages={Math.ceil(totalMedia / mediaPerPage)} onPageChange={handlePageChange} />
    </div>
  );
};

export default MediaPage;
