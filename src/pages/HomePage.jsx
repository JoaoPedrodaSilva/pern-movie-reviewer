import React from 'react'
import Navbar from '../components/Navbar'
import MoviesList from '../components/MoviesList'
import { useGlobalContext } from '../globalContext'

const HomePage = () => {
  const { setUser } = useGlobalContext()

  const login = async (user) => {
    setUser(user)
  }
  const logout = async () => {
    setUser(null)
  }

  return (
    <main>
      <Navbar />
      <MoviesList />
    </main>
  )
}

export default HomePage