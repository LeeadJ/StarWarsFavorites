import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import './App.css';
import videoBackground from '../src/videos/space-video.mp4'; 


function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    //check if movie is already in favorites. If so, removes it from favorits list.
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      // if not in favorits, adds movie to the list.
      setFavorites([...favorites, movie]);
    }
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <video className="video-background" autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </video>
      <div className='mainContainer'>
        <div className='chosenMovieContainer'>
          <MovieDetails movie={selectedMovie} favorites={favorites} onFavoriteToggle={handleFavorite}/>
        </div>
        <div className='movieListContainer'>
          <MovieList onMovieSelect={handleMovieSelect} favorites={favorites}/>
        </div>
      </div>
      
    </div>
  );

}

export default App;