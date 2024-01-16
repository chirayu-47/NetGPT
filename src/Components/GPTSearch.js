import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { BG_URL } from "../Utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 brightness-75">
        <img src={BG_URL} alt="GptBG" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
