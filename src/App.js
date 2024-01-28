import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/Home';
import MovieDetail from './components/movie/MovieDetail';
import './App.css';

function App() {
<<<<<<< HEAD

  const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
  const [movies, setMovies] = useState(storedMovies);


=======
  const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
  const [movies, setMovies] = useState(storedMovies);

>>>>>>> develop
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies} />} />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;