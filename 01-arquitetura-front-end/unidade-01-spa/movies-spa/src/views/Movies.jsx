import { MovieItem } from "../components/MovieItem";
import { useMovies } from "../hooks/useMovies";
import styles from "./Movies.module.css";

export function Movies() {
    const { movies, loading, error } = useMovies();

    if (loading) {
        return <p>Carregando catálogo de filmes...</p>;
    }

    if (error) {
        return <p>Ocorreu um erro ao carregar os filmes.</p>;
    }

    return (
        <section className={styles.moviesContainer}>
            <h1>Filmes populares</h1>
            <ul className={styles.moviesList}>
                {movies.map(movie => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </ul>
        </section>
    );
}