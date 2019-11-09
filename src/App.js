import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetchPokemonAction from "./fetchpokemon";
import {
  getPokemonError,
  getPokemon,
  getPokemonLoading
} from "./reducers/reducers";

import PokemonList from "../src/components/container/PokemonList";
import _ from "lodash";
import "./App.css";

class PokeApp extends Component {
  increment = () => {
    this.setState({ species: { ...this.state.species, count: 1 } });
  };

  componentWillMount() {
    const { fetchPokemon } = this.props;
    fetchPokemon();
  }

  render() {
    const { pokemon, error, loading } = this.props;

    return (
      <div className="pokeapp">
        <h1> The Kanto PokeDex! </h1>
        <button onClick={this.increment}></button>
        <PokemonList data={this.props} increment={this.increment} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getPokemonError(state),
  pokemon: getPokemon(state),
  loading: getPokemonLoading(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPokemon: fetchPokemonAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeApp);
