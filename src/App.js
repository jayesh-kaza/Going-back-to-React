import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import pokedex from './pokedex-icon.jpg';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      page_state: 1,
      pokemon_list: [],
      searchField: "",
    };
  }

  updatePokemonList = (data) => {
    if (data) {
      var current_list = this.state.pokemon_list;
      current_list.push(data);
      current_list.sort((a, b) => a.id - b.id);
      this.setState({ pokemon_list: current_list });
    }
  };

  updatePageState = (new_page_state) => {
    this.setState({ page_state: new_page_state });
  };

  fetchPokemon = (i) => {
    for (var j = i; j - i < 10; j++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${j}/`)
        .then((response) => response.json())
        .then((data) => {
          this.updatePokemonList(data);
        });
    }
    this.updatePageState(j);
  };

  componentDidMount() {
    window.addEventListener(
      "scroll",
      this.fetchPokemon(this.state.page_state),
      true
    );
  }

  componentWillMount() {
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("Fetching more pokemon...");
        this.fetchPokemon(this.state.page_state);
      }
    });
  }

  updateSearchField = (e) => this.setState({ searchField: e.target.value });

  filterPokemon = (pokemon_list, searchField) => {
    return pokemon_list.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  render() {
    const { pokemon_list, searchField } = this.state;
    return (
      <div className="App">
        <img src={pokedex} height={100} width={100} alt="pokedex icon"/><h1>Pokedex</h1>
        {pokemon_list.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div>
            <SearchBox handleChange={this.updateSearchField} />
            <CardList
              pokemon_list={this.filterPokemon(pokemon_list, searchField)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
