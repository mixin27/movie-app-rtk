import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
// import MovieListing from './components/MovieListing/MovieListing';
import MovieDetail from './components/MovieDetail/MovieDetail';
import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbId" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
