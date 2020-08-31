import React from "react";
import "./header.styles.css";
import pokedex_logo from './pokedex-icon.jpg'

export const Header = () => {
  return (
    <div className="header">
      <img src={pokedex_logo} alt="pokedex logo" className="photo" />
      <h1>Pokedex</h1>
    </div>
  );
};
