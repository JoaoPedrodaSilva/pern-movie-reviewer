import React from 'react'
import { useGlobalContext } from '../globalContext'

const Navbar = () => {
  const { setUser } = useGlobalContext()

  const login = async (user) => {
    setUser(user)
  }
  const logout = async () => {
    setUser(null)
  }
  return (
    <nav className="bg-gray-800 w-full px-5">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center justify-center">
          <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
        </div>
        <div className="flex items-center justify-center">
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar