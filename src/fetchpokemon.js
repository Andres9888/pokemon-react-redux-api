import {
  fetchPokemonLoading,
  fetchPokemonSuccess,
  fetchPokemonError,
} from "./actions/actions"
import axios from "axios"
function fetchPokemon() {
  return async (dispatch) => {
    dispatch(fetchPokemonLoading())
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/?limit=151"
      const { data } = await axios.get(url)
      dispatch(fetchPokemonSuccess(data.results))
    } catch (error) {
      dispatch(fetchPokemonError(error))
      throw error
    }
  }
}

export default fetchPokemon
