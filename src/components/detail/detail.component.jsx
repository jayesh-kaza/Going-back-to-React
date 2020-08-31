import React from "react";
import "./detail.styles.css";
import Popup from "reactjs-popup";

const extractHeight = (pokemon_details) => {
  return pokemon_details.height;
};

const extractWeight = (pokemon_details) => {
  return pokemon_details.weight;
};

const extractAbilities = (pokemon_details) => {
  return pokemon_details.abilities.map((ability) => ability.ability.name);
};

const extractStats = (pokemon_details) => {
  return pokemon_details.stats
    .filter(
      (stat) => stat.stat.name === "attack" || stat.stat.name === "defense"
    )
    .map((stat) => [stat.stat.name, stat.base_stat]);
};

const extractTypes = (pokemon_details) => {
  return pokemon_details.types.map((type) => type.type.name);
};

const extractDetails = (pokemon_details) => {
  return {
    height: extractHeight(pokemon_details),
    weight: extractWeight(pokemon_details),
    abilities: extractAbilities(pokemon_details),
    stats: extractStats(pokemon_details),
    types: extractTypes(pokemon_details),
  };
};

export const Detail = (props) => {
  const { pokemon_details } = props;
  const details = extractDetails(pokemon_details);
  console.log(details);
  return (
    <Popup
      defaultOpen={true}
      className="detail-container"
      position="center center"
    >
      <p>Height : {details.height}ft</p>
      <p>Weight : {details.weight}kg</p>
      <p>
        Abilities:<br/>
        {details.abilities.map((ability, index) => (
          <span key={index}>{ability} <br/></span>
        ))}
      </p>
      <p>
        Stats:<br/>
        {details.stats.map((stat, index) => (
          <span key={index}>
            {" "}
            {stat[0]}: {stat[1]}<br/>
          </span>
        ))}
      </p>
      <p>
        Types:<br/>
        {details.types.map((type, index) => (
          <span key={index}>{type}<br/></span>
        ))}
      </p>
    </Popup>
  );
};
