import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import './likeButton.css'

function LikeButton({ movie, onFavoriteToggle, favorites }){
    const isFavorite = favorites.some(fav => fav.episode_id === movie.episode_id);

    const handleClick = () => {
        onFavoriteToggle(movie);
    }
    
    return (
        <div className='likeButton'  onClick={handleClick}>
            <AiFillStar
                color={isFavorite ? 'gold' : 'grey'}
                size='100%'
            />
        </div>

    
  )
}

export default LikeButton