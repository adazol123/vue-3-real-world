import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'appication/json'
    }
})

/**
 * Hello world
 */
const EventService = {
    getEvents() {
        return apiClient.get('pokemon?limit=10&offset=0')
    },
    getEvent(id) {
        return apiClient.get(`pokemon/${id}`)
    }
}

export default EventService