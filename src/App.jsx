import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import LocationInfo from './components/LocationInfo';
import ResidentInfo from './components/ResidentInfo';
import getRandomLocation from './js/getRandomLocation';

const App = () => {
  const [location, setlocation] = useState();
  const [numberLocation, setNumberLocation] = useState(getRandomLocation());
  const [hereError, setHereError] = useState(false);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${numberLocation}`;
    axios
      .get(url)
      .then((res) => {
        setlocation(res.data);
        console.log(res.data);
        setHereError(false);
      })
      .catch((err) => {
        console.error(err);
        setHereError(true);
      });
  }, [numberLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumberLocation(e.target.inputLocation.value);
  };

  return (
    <div className="app">
      <h1 className="title">Rick And Morty</h1>
      <div className="container">
        <div className="img__container">
          <img src="./fondo.jpg" alt="fondo" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            id="inputLocation"
            onChange={(e) => setNumberLocation(e.target.value)}
          />
          <button className="form-btn">Search</button>
        </form>
      </div>
      {hereError ? (
        <>
          <h2 className="error">Hey! you must provide an is from 1 to 126</h2>
          <div className="img"></div>
        </>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="residents-container">
            {location?.residents.map((url) => (
              <ResidentInfo key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
