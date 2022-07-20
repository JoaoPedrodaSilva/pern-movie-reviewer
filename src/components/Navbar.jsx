import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 w-full px-5">
      <div className="flex items-center justify-between py-3">
        <h2 className="text-white">THE MOVIE REVIEWER</h2>
        <h2 className="text-white">All the movies you can get</h2>
      </div>
    </nav>
  )
}

export default Navbar