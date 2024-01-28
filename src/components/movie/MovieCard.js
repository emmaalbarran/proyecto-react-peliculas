import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie, onDelete }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <Card className={styles.moviecard}>
        <Card.Img variant="top" src={movie.imageUrl} className="card-img-top" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.genre}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCard;


