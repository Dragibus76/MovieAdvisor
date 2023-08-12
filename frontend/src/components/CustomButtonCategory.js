import React from 'react';
import '../styles/components/CustomButtonCategory.css';

const CustomButtonCategory = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`custom-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButtonCategory;
