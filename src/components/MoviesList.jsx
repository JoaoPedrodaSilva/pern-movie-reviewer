import axios from 'axios'
import React, { useEffect } from 'react'
import { useGlobalContext } from '../globalContext'


const MoviesList = () => {
  const { allMovies, setAllMovies } = useGlobalContext()

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const movies = await axios.get('/')
        console.log(movies)
        setAllMovies(movies.data.movies)
      } catch (error) {
        console.log(error)
      }
    }
    getAllMovies()
  }, [])


  return (
    <section className='flex flex-wrap'>
      {allMovies && allMovies.map(movie => {
        <article>
          <h1>{movie.name}</h1>
          <h1>{movie.genre}</h1>
        </article>
      })}
    </section>
  )
}

export default MoviesList