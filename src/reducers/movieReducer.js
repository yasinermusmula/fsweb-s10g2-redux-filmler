import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };

    case ADD_MOVIE:
      return {
        ...state, // ilk önce state olarak veriyi getir
        movies: [...state.movies, action.payload],
      }; // Yeni bir array aç, arrayın içine statin içinde ki movieleri dök ardından da paketin içinden gelen movieyi ekle
    default:
      return state;
  }
};

export default reducer;
