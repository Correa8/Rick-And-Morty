import React from 'react';
import './styles/locationInfo.css';

const LocationInfo = ({ location }) => {
  return (
    <div>
      <section>
        <h2>{location?.name}</h2>
        <ul className="location-list">
          <li className="location-li">
            <span>Type :</span>
            {location?.type}
          </li>
          <li className="location-li">
            <span>Dimension :</span>
            {location?.dimension}
          </li>
          <li className="location-li">
            <span>Population :</span>
            {location?.residents.length}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LocationInfo;
