require("dotenv").config()
const cors = require("cors")
const db = require("./db")
const express = require("express")

const app = express()

//midlleware that prevents CORS error due the different ports of server and client
app.use(cors())

//buitin express middleware that attaches the posted object to the body of the request
app.use(express.json())

//get all movies
app.get('/api/movies', async (_, res) => {
    try {
        const movies = await db.query('SELECT * FROM movie LEFT JOIN (SELECT movie_id, TRUNC(AVG(reviewer_rating), 1) AS average_rating, COUNT(id) AS total_ratings FROM movie_review GROUP BY movie_id) movie_review ON movie.id = movie_review.movie_id')

        res.json({
            status: "success",
            movies: movies.rows
        })
    } catch (error) {
        console.log(error)
    }
})

//get individual movie and all its reviews
app.get('/api/movies/:id', async (req, res) => {
    try {
        const movie = await db.query('SELECT * FROM movie LEFT JOIN (SELECT movie_id, TRUNC(AVG(reviewer_rating), 1) AS average_rating, COUNT(id) AS total_ratings FROM movie_review GROUP BY movie_id) movie_review ON movie.id = movie_review.movie_id WHERE movie.id = $1', [req.params.id])
        const reviews = await db.query("SELECT * FROM movie_review WHERE movie_id = $1", [req.params.id])

        res.json({
            status: "success",
            movie: movie.rows[0],
            reviews: reviews.rows
        })
    } catch (error) {
        console.log(error)
    }
})

app.post('/api/movies/:id/reviews', async (req, res) => {
    try {
        const review = await db.query("INSERT INTO movie_review (movie_id, reviewer_name, reviewer_rating, reviewer_comment) VALUES ($1, $2, $3, $4) RETURNING *", [req.params.id, req.body.reviewer_name, req.body.reviewer_rating, req.body.reviewer_comment])

        res.json({
            status: "success",
            review: review.rows[0]
        })
    } catch (error) {
        console.log(error)
    }
})

app.delete('/api/movies/:id/reviews/:reviewId', async (req, res) => {
    try {
        await db.query("DELETE FROM movie_review WHERE id = $1", [req.params.reviewId])
        res.json({
            status: "success"
        })
    } catch (error) {
        console.log(error)
    }
})

const port = process.env.PORT
app.listen(port || 3000, () => {
    console.log(`server has started on port ${port}`)
})


