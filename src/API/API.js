import { api } from '../utils/APIConfig'

export const login = (body) => api.post('/users/login', body)
export const signup = (body) => api.post('/users/signup', body)
export const forgotPassword = (email) =>
  api.post('/users/forgotPassword', email)
export const resetPassword = (token, body) =>
  api.patch(`/users/resetPassword/${token}`, body)

export const getTours = () => api('/tours')
export const getTour = () => api('/tours/646f2a66b7acaf6c26cf370b')
