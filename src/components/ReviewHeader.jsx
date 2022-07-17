import React from 'react'

const ReviewHeader = ({ movie }) => {
  return (
    <header>
          <h1>{movie.name}</h1>
          <h3>{movie.genre}</h3>
    </header>
  )
}

export default ReviewHeader