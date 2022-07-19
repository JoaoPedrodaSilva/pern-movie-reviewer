import axios from '../axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../globalContext'
import RatingStars from './RatingStars'

const MoviesList = () => {
  const { allMovies, setAllMovies } = useGlobalContext()

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const movies = await axios.get('/')
        setAllMovies(movies.data.movies)
      } catch (error) {
        console.log(error)
      }
    }
    getAllMovies()
  }, [])


  return (
    <section className='grid grid-cols-2 gap-2 mt-2 overflow-scroll overflow-x-hidden'>
      {allMovies && allMovies.map(movie => {
        return (
          <article key={movie.id} className="bg-gray-200 flex m-1 rounded">
            <img className="w-24 rounded" src="https://picsum.photos/200/300" alt="an image of the movie" />
            <div className='flex flex-col justify-center items-center gap-1 grow'>
              <div className="font-bold text-md">{movie.name}</div>
              <div className="text-sm">{movie.genre}</div>
              {movie.average_rating !== null ? (
                <div className='flex gap-1 items-center'>
                  <RatingStars rating={movie.average_rating} />
                  <span className='text-yellow-500'>({movie.total_ratings})</span>
                </div>
              ) : (
                <div className='flex gap-1 items-center'>
                  <RatingStars rating={0} />
                  <span className='text-yellow-500'>(none)</span>
                </div>
              )}

              <button className="text-white bg-gray-500 hover:bg-gray-600 px-2 py-2 mt-1 rounded-md text-sm font-medium w-20">
                <Link to={`/movies/${movie.id}`}>
                  Reviews
                </Link>
              </button>
            </div>
          </article>
        )
      })}
    </section >
  )
}

export default MoviesList