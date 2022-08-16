import axios from 'axios'

// export default axios.create({
//     baseURL: 'http://localhost:3000/api/movies'
// })


export default axios.create({
    baseURL: 'https://joaopedro-pern-movie-reviewer.herokuapp.com/api/movies'
})