import React, { Component } from "react";
import Pokemon from "../presentional/Pokemon"

class PokemonList extends Component {
  render() {
    const { fetched, loading, pokemon } = this.props.data;
    let content;
    if (pokemon) {
      content = (
        <div className="pokemon--species--list">
          {pokemon.map((pokemon, index) => (
            <Pokemon increment={this.props.increment.bind(null, index)} key={pokemon.name} id={index + 1} pokemon={pokemon} />
          ))}
        </div>
      );
    } else if (loading && !fetched) {
      content = <p> Loading ...</p>;
    } else {
      content = <div />;
    }
    return <div>{content}</div>;
  }
}


export default PokemonList