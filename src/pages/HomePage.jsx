import React from 'react'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
import MoviesList from '../components/MoviesList'

const HomePage = () => {
  return (
    <main className='flex flex-col gap-2 h-full'>
      <Navbar />
      <SearchForm />
      <MoviesList />
    </main>
  )
}

export default HomePage