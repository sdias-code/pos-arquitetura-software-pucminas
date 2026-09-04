import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.services";

export function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies()
            .then(({ data }) => {
                setMovies(data.results)
            })
            .catch(error => {
                console.error("Erro ao buscar filmes populares:", error);
            });
    }, []);


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