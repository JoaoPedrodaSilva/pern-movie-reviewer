import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [allMovies, setAllMovies] = useState([])
    

    return (
        <AppContext.Provider
            value={{
                user, setUser,
                allMovies, setAllMovies,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export { AppContext, AppProvider }