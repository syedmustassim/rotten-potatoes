import React, { useEffect } from "react";

import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Black";
    const fetchMovies = async () => {
      try {
        const response = await MovieApi.get(
          `?apiKey=${APIKey}&s=${movieText}&type=movie`
        );
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
