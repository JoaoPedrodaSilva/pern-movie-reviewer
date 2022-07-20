import axios from '../axios'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../globalContext'

const AddReviewForm = () => {
  const { id } = useParams()
  const {
    reviewerName, setReviewerName,
    reviewerRating, setReviewerRating,
    reviewerComment, setReviewerComment
  } = useGlobalContext()

  useEffect(() => {
    setReviewerName('')
    setReviewerComment('')
    setReviewerRating('Rating')
  }, [])

  const handleAddReview = async event => {
    event.preventDefault()
    try {
      await axios.post(`/${id}/reviews`, {
        reviewer_name: reviewerName,
        reviewer_rating: reviewerRating,
        reviewer_comment: reviewerComment
      })
      window.location.reload(true);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="w-full flex flex-col gap-4 rounded py-6 mt-6 text-sm">
      <div className='w-full'>
        <input
          className="appearance-none shadow w-full                                              
                            border border-gray-400 hover:border-gray-400 rounded
                            px-1 py-2 
                            text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline"
          id='restaurantName'
          type="text"
          placeholder="Enter your name"
          maxLength={15}
          value={reviewerName}
          onChange={event => setReviewerName(event.target.value)}
        />
      </div>

      <div>
        <select
          className="appearance-none shadow w-full
                        border border-gray-400 hover:border-gray-400 rounded
                        px-1 py-2 
                        text-gray-700 leading-tight
                        focus:outline-none focus:shadow-outline"
          id='restaurantPriceRange'
          value={reviewerRating}
          onChange={event => setReviewerRating(event.target.value)}
        >
          <option>Choose your Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div>
        <textarea
          className="appearance-none shadow w-full resize-none break-all                                        
                            border border-gray-400 hover:border-gray-400 rounded
                            px-1 py-2 
                            text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline"
          id='restaurantLocation'
          type="text"
          placeholder="Enter your comment..."
          maxLength={75}
          value={reviewerComment}
          onChange={event => setReviewerComment(event.target.value)}
        />
      </div>

      <div className='flex justify-evenly mx-5'>
        <button
          className="rounded w-28
                            bg-gray-500 hover:bg-gray-700 text-white
                            font-bold
                            px-1 py-2              
                            focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={event => handleAddReview(event)}
        >
          Post Review
        </button>

        <button className="rounded w-28
                            bg-gray-500 hover:bg-gray-700 text-white
                            font-bold
                            px-1 py-2
                            focus:outline-none focus:shadow-outline">
          <Link to={`/`}>
            Back Home
          </Link>
        </button>
      </div>
    </form>
  )
}

export default AddReviewForm