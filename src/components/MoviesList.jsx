import axios from '../axios'
import React, { useEffect } from 'react'
import { useGlobalContext } from '../globalContext'


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
    <section className='grid grid-cols-2 overflow-scroll overflow-x-hidden'>
      {allMovies && allMovies.map(movie => {
        return (
          <article key={movie.movie_id} className="bg-gray-100 flex gap-5 m-1 rounded">
            <img className="w-40 rounded" src="https://picsum.photos/200/300" alt="an image of the movie" />
            <div className='flex flex-col justify-center items-center gap-2'>
              <div className="font-bold text-md">{movie.name}</div>
              <div className="text-sm">{movie.genre}</div>
              <button className="text-white bg-gray-500 hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium">Reviews</button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default MoviesList