import { api } from '../utils/APIConfig'

// example of a post request
export const login = (body) => api.post('/users/login', body)
export const signup = (body) => api.post('/users/signup', body)
// example of a get request
export const getTours = () => api('/tours')
export const getTour = () => api('/tours/646f2a66b7acaf6c26cf370b')
