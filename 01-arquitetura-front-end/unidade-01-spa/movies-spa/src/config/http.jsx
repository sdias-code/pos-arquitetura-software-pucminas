import axios from 'axios';

export const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
    },
    params: {
        language: 'pt-BR'
    }
});