import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <h1>Aplicação de filmes</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Filmes</Link>
                </li>
            </ul>
        </header>
    );
}