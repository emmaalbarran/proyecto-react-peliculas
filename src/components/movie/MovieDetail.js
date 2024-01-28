import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './MovieDetail.module.css'
import './MovieDetail.module.css';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(movie => movie.id === parseInt(id, 10));

  if (!movie) {
    return (
      <div>
        <p>Película no encontrada</p>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className={styles.movieDetailContainer}>
      <img src={movie.imageUrl} alt={movie.title} className={styles.movieImage} />
      <div className={styles.movieDetails}>
      <h1 className={styles.titulo}>Detalles</h1>
        <div className={styles.detalles}>
          <p>Título: {movie.title}</p>
          <p>Sinopsis: {movie.synopsis}</p>
          <p>Géneros: {movie.genre}</p>
          <p>Página Web: <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">https://www.themoviedb.org/</a></p>
        </div>
        <button className={styles.volverButton} onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    </div>
  );
}

export default MovieDetail;


