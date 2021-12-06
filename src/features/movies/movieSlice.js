import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import movieApi from '../../common/apis/movieApi';

const apiKey = process.env.REACT_APP_APIKEY;

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${apiKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${apiKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetails',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${apiKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending...');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched successfully.');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetched successfully.');
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
      console.log('Fetched successfully.');
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
