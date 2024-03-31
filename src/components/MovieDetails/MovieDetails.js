import React from 'react';
import LikeButton from "@/components/LikeButton/LikeButton";
import './movieDetails.css'



const movieImages = {
  "The Phantom Menace" : "phantomMenace1",
  "A New Hope" : "newHope4",
  "The Empire Strikes Back" : "theEmpireStrikesBack5",
  "Return of the Jedi" : "returnOfTheJedi6",
  "Attack of the Clones" : "attackOfClones2",
  "Revenge of the Sith" : "revngeOfTheSith3"
};

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;
    const imageFileName = movieImages[movie.title];

    const moviePosterStyle = {
      backgroundImage: `url(${require(`../../images/${imageFileName}.png`)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <div className='movie-poster'  style={moviePosterStyle}>
        <div className='left'>
          <h2>
            {movie.title.split(' ').map((word, index) => (
              <span key={index}>{word}</span>
            ))}
          </h2>
          <LikeButton 
            movie={movie} 
            onFavoriteToggle={onFavoriteToggle} 
            favorites={favorites}
            className='likeBtn-container'
          />
      </div>
        <div className='right'></div>
        
        
      </div>
    );
  }

export default MovieDetails;