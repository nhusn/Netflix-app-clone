import axios from "axios";


const tmdbAxiosInstances = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default tmdbAxiosInstances;