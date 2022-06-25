import React, { useCallback, useState, useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import fetchPokemonAction from "./fetchpokemon"
import {
  getPokemonError,
  getPokemon,
  getPokemonLoading,
} from "./reducers/reducers"

import PokemonList from "../src/components/container/PokemonList"
import "./App.css"

const PokeApp = (props) => {
  const [species, setSpecies] = useState()
  const increment = () => {
    setSpecies({ ...species, count: 1 })
  }
  useEffect(() => {
    props.fetchPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <div className="pokeapp">
        <h1> The Kanto PokeDex! </h1>
        <button onClick={increment}></button>
        <PokemonList data={props} increment={increment} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  error: getPokemonError(state),
  pokemon: getPokemon(state),
  loading: getPokemonLoading(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchPokemon: fetchPokemonAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(PokeApp)
