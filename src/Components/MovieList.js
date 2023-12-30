import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="pl-16">
      <h1 className="mb-4 mt-5 text-2xl text-white">{title}</h1>
      <div className="scrollbar-hide flex flex-wrap overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
          {/* <MovieCard posterPath={movies[0].poster_path} /> */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
