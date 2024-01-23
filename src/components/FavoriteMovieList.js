import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../actions/favoritesActions";

const FavoriteMovieList = (props) => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const deleteFavHandler = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className="font-bold">Favori Filmler</h5>
      <div className="pt-3 text-sm">
        {favorites.map((movie) => (
          <div key={movie.id}>
            {" "}
            {/*bir sey mplarken en dıştaki elemanda key olmasi gerektiği için
            "Link" tagınde ki key'i buraya taşıdık */}
            <Link
              className="py-1 flex gap-2 justify-between"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
            <button
              onClick={() => deleteFavHandler(movie.id)}
              className="material-icons hover:text-red-600 text-[18px]"
            >
              remove_circle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovieList;
