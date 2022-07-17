import axios from '../axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../globalContext'
import ReviewHeader from '../components/ReviewHeader'
import ReviewsList from '../components/ReviewsList'
import AddReviewForm from '../components/AddReviewForm'

const ReviewPage = () => {
    const { id } = useParams()
    const { selectedMovie, setSelectedMovie } = useGlobalContext()

    useEffect(() => {
        const getSelectedMovie = async () => {
            try {
                const movie = await axios.get(`/${id}`)
                setSelectedMovie(movie.data.movie)
            } catch (error) {
                console.log(error)
            }
        }
        getSelectedMovie()
    }, [])

    return (
        <>
            {selectedMovie && (
                <section>
                    <ReviewHeader movie={selectedMovie} />
                    <ReviewsList />
                    <AddReviewForm />
                </section>
            )}
        </>
    )
}

export default ReviewPage