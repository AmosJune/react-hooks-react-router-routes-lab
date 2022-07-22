import React from "react";
import { movies } from "../data";

function Movies() { 
  const eachMovie = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>Time: {movie.time} min. </p>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {eachMovie}
    </div>
    );
}

export default Movies;

