import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontrar la película correspondiente por ID
  const movie = movies.find(movie => movie.id === parseInt(id, 10));

  // Si la película no se encuentra, mostrar un mensaje y volver al inicio
  if (!movie) {
    return (
      <div>
        <p>Película no encontrada</p>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    );
  }

  // Si la película se encuentra, mostrar los detalles
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.imageUrl} alt={movie.title} />
      <div>
        <h2>Detalles</h2>
        <p>Título: {movie.title}</p>
        <p>Sinopsis: {movie.synopsis}</p>
        <p>Géneros: {movie.genre}</p>
        <p>Página Web: https://www.themoviedb.org/</p>
      </div>
      <button onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  );
}

export default MovieDetail;


