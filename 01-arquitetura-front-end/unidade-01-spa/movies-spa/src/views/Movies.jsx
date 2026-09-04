import { useMovies } from "../hooks/useMovies";

export function Movies() {
    const { movies, loading, error } = useMovies();

    if (loading) {
        return <p>Carregando catálogo de filmes...</p>;
    }

    if (error) {
        return <p>Ocorreu um erro ao carregar os filmes.</p>;
    }

    return (
        <section>
            <h1>Filmes populares</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </section>
    );
}