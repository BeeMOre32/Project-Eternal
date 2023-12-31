import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.API_KEY,
  },
});
