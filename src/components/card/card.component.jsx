import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt={props.pokemon.name}
        className="photo"
        style={{ alignSelf: "center" }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`}
      />
      <h2>{props.pokemon.name}</h2>
    </div>
  );
};
