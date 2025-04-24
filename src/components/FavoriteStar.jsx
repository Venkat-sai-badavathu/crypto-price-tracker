import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/crypto/cryptoSlice";

const FavoriteStar = ({ id, isFavorite }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite({ id }));
  };

  return (
    <button
      className={`favorite-star w-5 h-5 flex items-center justify-center ${
        isFavorite ? "active" : ""
      }`}
      onClick={handleClick}
    >
      <i className={isFavorite ? "ri-star-fill" : "ri-star-line"}></i>
    </button>
  );
};

export default FavoriteStar;
