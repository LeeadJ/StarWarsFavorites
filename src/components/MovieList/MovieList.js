import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';
import './movieList.css';

function MovieList({ onMovieSelect, favorites}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div className='moviesList'>
        {isLoading ? (
            <Loading message="Loading Movies..."/>
        ) : (
          movies.map(movie => (
            <MovieItem key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} favorites={favorites}/>
          ))
        )}
    </div>
);
}

export default MovieList;
