import axios from 'axios'

export const api = axios.create({
    baseUrl: 'https://sevencoders-starwars-wiki.herokuapp.com'
})