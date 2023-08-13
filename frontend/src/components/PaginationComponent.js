import React from 'react';
import '../styles/components/PaginationComponent.css';

const Pagination = ({ currentPage, moviesPerPage, totalMovies, onPageChange }) => {
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button  className='PaginationButton' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Précedent
      </button>
      <button className='PaginationButton' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
