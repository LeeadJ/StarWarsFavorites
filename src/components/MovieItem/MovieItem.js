import React from 'react';
import './movieItem.css';

const movieImages = {
  "The Phantom Menace" : "phantomMenace1",
  "A New Hope" : "newHope4",
  "The Empire Strikes Back" : "theEmpireStrikesBack5",
  "Return of the Jedi" : "returnOfTheJedi6",
  "Attack of the Clones" : "attackOfClones2",
  "Revenge of the Sith" : "revngeOfTheSith3"
};

function MovieItem({ movie, onMovieSelect, favorites }) {
  const imageFileName = movieImages[movie.title];
  const isFavorite = favorites.some(fav => fav.episode_id === movie.episode_id);

    const moviePosterStyle = {
      backgroundImage: `url(${require(`../../images/${imageFileName}.png`)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: isFavorite ? '5px solid gold' : 'none', //adds gold border to favoritie movies
    };
  
  return (
    <button
      key={movie.episode_id}
      className={`movie-poster-container`}
      style={moviePosterStyle}
      onClick={() => onMovieSelect(movie)}
    >
      <span className='movie-title'>{movie.title}</span>
    </button>
  );
}

export default MovieItem;