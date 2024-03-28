import React from 'react';
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
          <button className='likeBtn' onClick={() => onFavoriteToggle(movie)}>
            <div className='iconBox'>
              <img src={require('../../icons/starIcon.png')} alt='star'/>
              <span className='likeText'>{favorites.some(fav => fav.episode_id === movie.episode_id) ? "Dislike" : "Like"}</span>
            </div>
          </button>
          {/* <p><strong>Episode:</strong> {movie.episode_id}</p> */}
      </div>
        <div className='right'></div>
        
        
      </div>
    );
  }

export default MovieDetails;