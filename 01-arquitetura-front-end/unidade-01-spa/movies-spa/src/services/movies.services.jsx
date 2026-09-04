import { moviesApi } from '../config/http';

export function getPopularMovies() {
    return moviesApi.get('/movie/popular');
}

export function getMovieDetails(movieId) {
    return moviesApi.get(`/movie/${movieId}`);
}