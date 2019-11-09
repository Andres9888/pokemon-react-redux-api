import {fetchPokemonLoading, fetchPokemonSuccess, fetchPokemonError} from './actions/actions';

    
function fetchPokemon() {
    return dispatch => {
        dispatch(fetchPokemonLoading());
        fetch("http://pokeapi.co/api/v2/pokemon?limit=151")
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchPokemonSuccess(res.results));
            return res.results;

        })
        .catch(error => {
            dispatch(fetchPokemonError(error));
        })
    }
}

export default fetchPokemon;
