import React from 'react';
import './Loader.css';

const Loader = ({ className }) => {
  return (
    <div className={`loader ${className}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
