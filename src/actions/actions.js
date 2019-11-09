export const FETCH_POKEMON_LOADING = 'FETCH_POKEMON_LOADING';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';
export const INCREMENT_COUNT= "INCREMENT_COUNT";

export function increment(index) {
    return {
      type: "INCREMENT_COUNT",
      index
    };
  }
  

 export function fetchPokemonLoading() {
    return {
        type: FETCH_POKEMON_LOADING
    }
}

 export function fetchPokemonSuccess(pokemon) {
    return {
        type: FETCH_POKEMON_SUCCESS,
        pokemon: pokemon
    }
}

 export function fetchPokemonError(error) {
    return {
        type: FETCH_POKEMON_ERROR,
        error: error
    }
}

