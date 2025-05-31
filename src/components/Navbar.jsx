import "../index.css";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <header className="navbar">
            <h1 className="site-title">Amy Yu</h1>
            <nav className="navbar-links">
                <Link to="/">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}
