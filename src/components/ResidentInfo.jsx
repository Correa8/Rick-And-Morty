import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './styles/residentInfo.css';

const Residentinfo = ({ url }) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCharacter(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section>
      <header className="header card">
        <img src={character?.image} alt="" />
        <div>
          <span></span>
          <span>{character?.status}</span>
        </div>
      </header>
      <section className="card-body">
        <h3 className="card-name">{character?.name}</h3>
        <hr className="card-hr" />
        <ul className="card-list">
          <li className="card-item">
            <span className="card-label">Specie: </span>
            {character?.species}
          </li>
          <li className="card-item">
            <span className="card-label">Origin: </span>
            {character?.origin.name}
          </li>
          <li className="card-item">
            <span className="card-label">Genre: </span>
            {character?.gender}
          </li>
          <li className="card-item">
            <span className="card-label">Episodes where appear: </span>
            {character?.episode.length}
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Residentinfo;
