import React from 'react'
import axios from '../axios'
import { useGlobalContext } from '../globalContext'

const SearchForm = () => {
    const {
        searchByName, setSearchByName,
        searchByGenre, setSearchByGenre,
        allMovies, setAllMovies
    } = useGlobalContext()

    const handleSearch = async event => {
        event.preventDefault()
        if (searchByName === '' && searchByGenre === '') {
            alert('Type any search term please.')
        } else if (searchByName !== '' && searchByGenre === '') {
            setAllMovies(allMovies.filter(movie => movie.name.includes(searchByName)))
        } else if (searchByName === '' && searchByGenre !== '') {
            setAllMovies(allMovies.filter(movie => movie.genre.includes(searchByGenre)))
        } else {
            setAllMovies(allMovies.filter(movie => movie.name.includes(searchByName) && movie.genre.includes(searchByGenre)))
        }
    }

    const getAllMovies = async () => {
        try {
            const movies = await axios.get('/')
            setAllMovies(movies.data.movies)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className='flex gap-2'>
            <input
                className='shadow-sm appearance-none
                  border border-gray-400 hover:border-gray-900 rounded
                  w-full p-2
                  text-gray-700 leading-tight
                  focus:outline-1 focus:outline-gray-900'
                id='todo-input'
                type="text"
                placeholder='Search by name'
                maxLength='75'
                value={searchByName}
                onChange={event => setSearchByName(event.target.value)}
            />

            <input
                className='shadow-sm appearance-none
                  border border-gray-400 hover:border-gray-900 rounded
                  w-full p-2
                  text-gray-700 leading-tight
                  focus:outline-1 focus:outline-gray-900'
                id='todo-input'
                type="text"
                placeholder='Search by genre'
                maxLength='75'
                value={searchByGenre}
                onChange={event => setSearchByGenre(event.target.value)}
            />

            <button
                className='bg-gray-500 hover:bg-gray-700
                  text-white font-bold
                  py-2 px-4 rounded
                  focus:outline-1 focus:outline-gray-900 focus:bg-gray-700'
                type='submit'
                onClick={event => handleSearch(event)}
            >
                Search
            </button>

            <button
                className='bg-gray-500 hover:bg-gray-700
                  text-white font-bold
                  py-2 px-4 rounded
                  focus:outline-1 focus:outline-gray-900 focus:bg-gray-700'
                type='submit'
                onClick={() => getAllMovies()}
            >
                Clear
            </button>
        </form>
    )
}

export default SearchForm