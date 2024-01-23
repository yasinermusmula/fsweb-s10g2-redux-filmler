import { combineReducers, legacy_createStore as createStore } from "redux";

import movieReducer from "./movieReducer";
import favoritesReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
