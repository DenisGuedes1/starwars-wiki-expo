import axios from 'axios'

export const api = axios.create({
    baseUrl: 'https://swapi.dev/api/'
})

// Content-Type: application/json
// {
//     "films": "https://swapi.dev/api/films/",
//     "people": "https://swapi.dev/api/people/",
//     "planets": "https://swapi.dev/api/planets/",
//     "species": "https://swapi.dev/api/species/",
//     "starships": "https://swapi.dev/api/starships/",
//     "vehicles": "https://swapi.dev/api/vehicles/"
// }