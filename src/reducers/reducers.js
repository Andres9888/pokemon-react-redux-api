import {
  FETCH_POKEMON_LOADING,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_ERROR,
  increment
} from "../actions/actions.js";

export const count = (state = [], action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      const i = action.index;
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
};

const initialState = {
  pokemon: [],
  fetched: false,
  loading: false
};

export function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMON_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.pokemon.map(obj=> ({ ...obj, count: 0 }))
        
      };
    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getPokemon = state => state.pokemon;
export const getPokemonLoading = state => state.loading;
export const getPokemonError = state => state.error;
