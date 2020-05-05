import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})


export const insertEvent = payload => api.post(`/event`, payload)
export const createTable = payload => api.post(`/events`, payload)
export const getAllEvents = (id) => api.get(`/${id}/view`)
export const getAllTables= () => api.get(`/events`)
export const updateEventById = (page,id, payload) => api.put(`/${page}/${id}`, payload)
export const deleteEventById = id => api.delete(`/event/${id}`)
export const getEventById = id => api.get(`/event/${id}`)

const apis = {
    insertEvent,
    createTable,
    getAllTables,
    getAllEvents,
    updateEventById,
    deleteEventById,
    getEventById,
}

export default apis
