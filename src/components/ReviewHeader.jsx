import React from 'react'
import RatingStars from './RatingStars'

const ReviewHeader = ({ movie }) => {
  
  return (
    <header className='flex flex-col items-center mt-3'>
      <h1 className='font-bold text-4xl'>{movie.name}</h1>
      <h3>{movie.genre}</h3>
      <div className='flex gap-1 items-center'>
        <RatingStars rating={movie.average_rating} />
        {movie.average_rating !== null ? (
          <span className='text-yellow-500'>({movie.total_ratings})</span>
        ) : (
          <span className='text-yellow-500'>(none)</span>
        )}
      </div>
      
    </header>
  )
}

export default ReviewHeader