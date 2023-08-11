import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Black";
    try {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      );
      return response.data;
    } catch (error) {
      console.log("Error is: ", error);
    }
  }
);

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending..");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successful!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
