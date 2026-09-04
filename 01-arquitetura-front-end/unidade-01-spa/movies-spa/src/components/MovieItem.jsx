import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
11
// URL base fixa do TMDB com tamanho w500
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w342";

export function MovieItem({ movie }) {
    console.log("MovieItem", movie);

    const posterUrl = movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=Sem+Imagem";

    return (
        <li className={styles.card}>
            <img
                src={posterUrl}
                alt={`Poster do filme ${movie.title}`}
                className={styles.poster}
            />
            <div className={styles.info}>
                <h3>{movie.title}</h3>
                <p>⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
                <Link to={`/movie/${movie.id}`} className={styles.detailsLink}>
                    Ver detalhes
                </Link>
            </div>
        </li>
    );
}