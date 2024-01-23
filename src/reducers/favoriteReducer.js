import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions.js";
import movies from "../data.js";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };

    case ADD_FAVORITE:
      let newState = {};
      if (state.favorites.find((item) => item.id === action.payload.id)) {
        newState = { ...state };
      } else {
        newState = {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return newState;
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    default:
      return state;
  }
};

export default reducer;
