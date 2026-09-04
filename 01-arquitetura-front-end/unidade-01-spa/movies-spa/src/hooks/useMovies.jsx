import { useEffect, useState } from "react";
import { getMovieDetails, getPopularMovies } from "../services/movies.services";

export function useMovies() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const { data } = await getPopularMovies();
                setMovies(data.results);
            } catch (err) {
                console.error("Erro ao buscar filmes populares:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return { movies, loading, error };
}

export function useMovie(movieId) {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                const { data } = await getMovieDetails(movieId);
                setMovie(data);
            } catch (err) {
                console.error(`Erro ao buscar filme com ID ${movieId}:`, err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [movieId]);

    return { movie, loading, error };
}