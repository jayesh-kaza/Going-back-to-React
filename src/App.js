import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/header/header.component";
import Content from "./components/content/content.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      page_state: 1,
      pokemon_list: [],
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

  render() {
    const { pokemon_list } = this.state;
    return (
      <div className="App">
        <Header />
        <Content pokemon_list={pokemon_list} />
      </div>
    );
  }
}

export default App;
