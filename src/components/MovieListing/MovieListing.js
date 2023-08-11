import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import { getAllShows } from "../../features/movies/movieSlice";

import MovieCard from "../MovieCard/MovieCard";

import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((item, index) => <MovieCard key={index} data={item} />)
    ) : (
      <div className="movies-error">
        {" "}
        <h3>Error: {movies.Error}</h3>
      </div>
    );

  renderShows =
    movies.Response === "True" ? (
      shows?.Search?.map((item, index) => <MovieCard key={index} data={item} />)
    ) : (
      <div className="movies-error">
        {" "}
        <h3>Error: {movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2> Movies </h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2> Shows </h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
