import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Header.scss';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (term === '') return;

    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));

    setTerm('');
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <div className="brand">Movie App</div>
        </Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="search"
            name="movieSearch"
            id="movieSearch"
            placeholder="Search movies or shows"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src="https://i.pravatar.cc/100" alt="user" />
      </div>
    </header>
  );
};

export default Header;
