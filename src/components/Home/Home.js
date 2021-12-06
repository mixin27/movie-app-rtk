import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MovieListing from '../MovieListing/MovieListing';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Love';
  const showText = 'Korea';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
