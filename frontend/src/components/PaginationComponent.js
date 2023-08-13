import React from 'react';
import '../styles/components/PaginationComponent.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button className='PaginationButton' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Précédent
      </button>
      <button className='PaginationButton' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
