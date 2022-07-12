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


        res.json({
            status: "success",
        })
    } catch (error) {
        console.log(error)
    }
})

const port = process.env.PORT
app.listen(port || 3000, () => {
    console.log(`server has started on port ${port}`)
})


