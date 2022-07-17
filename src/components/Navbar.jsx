import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 w-full px-5">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center justify-center">
          <img className="block  h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
        </div>
        <div className="flex items-center justify-center">
          <Link to='/login' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Login
          </Link>
          <Link to='/login' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar