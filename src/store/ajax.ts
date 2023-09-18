import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://assets.cdn.soomgo.com',
  headers: {
    'Content-Type': 'application/json',
  },
})
