import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [allMovies, setAllMovies] = useState([])
    const [searchByName, setSearchByName] = useState('')
    const [searchByGenre, setSearchByGenre] = useState('')
    const [selectedMovie, setSelectedMovie] = useState('')
    const [reviewIndex, setReviewIndex] = useState(0)
    const [reviewerName, setReviewerName] = useState('')
    const [reviewerRating, setReviewerRating] = useState('')
    const [reviewerComment, setReviewerComment] = useState('')
    

    return (
        <AppContext.Provider
            value={{
                allMovies, setAllMovies,
                searchByName, setSearchByName,
                searchByGenre, setSearchByGenre,
                selectedMovie, setSelectedMovie,
                reviewIndex, setReviewIndex,
                reviewerName, setReviewerName,
                reviewerRating, setReviewerRating,
                reviewerComment, setReviewerComment
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export { AppContext, AppProvider }