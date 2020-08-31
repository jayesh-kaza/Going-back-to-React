import React, { Component } from "react";
import "./card.styles.css";
import { Detail } from "../detail/detail.component";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areDetailsVisible: false,
    };
  }

  displayDetails = () => {
    this.setState({ areDetailsVisible: !this.state.areDetailsVisible });
  };

  render() {
    return (
      <div className="card-container" onClick={this.displayDetails}>
        {this.state.areDetailsVisible ? (
          <Detail pokemon_details={this.props.pokemon} />
        ) : (
          console.log("Not clicked yet")
        )}
        <img
          alt={this.props.pokemon.name}
          className="photo"
          style={{ alignSelf: "center" }}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.props.pokemon.id}.png`}
        />
        <h2>{this.props.pokemon.name}</h2>
      </div>
    );
  }
}

export default Card;
