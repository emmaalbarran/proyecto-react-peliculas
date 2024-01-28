import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Importar HashRouter
import Home from './components/Home';
import MovieDetail from './components/movie/MovieDetail';
import './App.css';

function App() {
  // Obtener las películas almacenadas en localStorage o usar un array inicial
  const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
  const [movies, setMovies] = useState(storedMovies);

  // Almacenar las películas en localStorage cada vez que cambien
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