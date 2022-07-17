import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [allMovies, setAllMovies] = useState([])
    const [searchByName, setSearchByName] = useState('')
    const [searchByGenre, setSearchByGenre] = useState('')
    const [selectedMovie, setSelectedMovie] = useState('')
    

    return (
        <AppContext.Provider
            value={{
                allMovies, setAllMovies,
                searchByName, setSearchByName,
                searchByGenre, setSearchByGenre,
                selectedMovie, setSelectedMovie,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export { AppContext, AppProvider }