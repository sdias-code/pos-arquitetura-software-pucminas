import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.services";

export function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 💡 Criamos uma função interna declarada como assíncrona
        const fetchMovies = async () => {
            try {
                setLoading(true);

                // Aguarda a resolução da Promise do Axios usando await
                const { data } = await getPopularMovies();

                // Alimenta o estado com o array de resultados
                setMovies(data.results);
            } catch (error) {
                console.error("Erro ao buscar filmes populares:", error);
            } finally {
                setLoading(false);
            }
        };

        // Executa a função imediatamente
        fetchMovies();
    }, []);

    // Tratamento básico de estado de carregamento (Boa prática de UX)
    if (loading) {
        return <p>Carregando catálogo de filmes...</p>;
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
