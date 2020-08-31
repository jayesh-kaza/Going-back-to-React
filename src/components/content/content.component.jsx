import React, { Component } from "react";
import { SearchBox } from "../search-box/search-box.component";
import { CardList } from "../card-list/card-list.component";

class Content extends Component {
  constructor(props) {
    super();

    this.state = {
      pokemon_list: props.pokemon_list,
      searchTerm: "",
    };
  }

  updateSearchTerm = (e) => this.setState({ searchTerm: e.target.value });

  filterPokemon = (pokemon_list, searchTerm) => {
    return pokemon_list.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  render() {
    const { pokemon_list, searchTerm } = this.state;
    const filtered_pokemon = this.filterPokemon(pokemon_list, searchTerm);
    return (
      <div>
        <SearchBox handleChange={this.updateSearchTerm} />
        <CardList pokemon_list={filtered_pokemon} />
      </div>
    );
  }
}

export default Content;
