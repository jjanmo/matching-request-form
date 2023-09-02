import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://assets.cdn.soomgo.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
})
