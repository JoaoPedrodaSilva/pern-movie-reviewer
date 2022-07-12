import axios from 'axios'

export default axios.create({
    baseURL: 'https://joaopedro-pern-movie-reviewer.herokuapp.com/api/movies'
})