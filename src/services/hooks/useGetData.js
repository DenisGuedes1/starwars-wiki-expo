import { api } from "../api";


export const userGetData = () => {
    const getFilms = async() => {
        try {
            const response= await api.get('/films')
            console.log({response})
            return response
        } catch (error) {
            console.log(error)

            return {error}
            
        }
    }
    return{
        getFilms,
    }
}