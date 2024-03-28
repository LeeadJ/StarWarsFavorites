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

function MovieItem({ movie, onMovieSelect }) {
  const imageFileName = movieImages[movie.title];
  
  return (
    <div key={movie.episode_id} className={`movie-poster-container`}>
      <img
      src={require(`../../images/${imageFileName}.png`)}
      alt={movie.title}
      onClick={() => onMovieSelect(movie)}
      style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default MovieItem;