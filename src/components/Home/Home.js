import React, { useEffect } from "react";

import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Black";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await MovieApi.get(
          `?apiKey=${APIKey}&s=${movieText}&type=movie`
        );
        dispatch(addMovies(response.data));
        console.log("Response from API: ", response);
      } catch (error) {
        console.log("Error is: ", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
