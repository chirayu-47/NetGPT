import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="mr-3 w-44">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
