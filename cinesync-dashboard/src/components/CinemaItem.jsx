// src/components/CinemaItem.jsx
import React from 'react';

const CinemaItem = ({ cinemaName, dashboardUrl }) => {
  return (
    <div className="cinema-item">
      <h3>{cinemaName}</h3>
      <a href={dashboardUrl} target="_blank" rel="noopener noreferrer">
        <button>Monitoring</button>
      </a>
    </div>
  );
};

export default CinemaItem;
