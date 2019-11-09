import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { pokemonReducer } from "./reducers/reducers";

const initialState = {
  
  fetched: false,
  loading: false
};

const middlewares = [thunk];

export const store = createStore(
  pokemonReducer,initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
