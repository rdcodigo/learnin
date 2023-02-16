import React from "react";
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <nav className="nav">
            <Link to="/"><h1>RDcodigo</h1></Link>
            <ul className="nav-links">
                <li><Link to="/aulas">Aulas</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/assistir">Assistir</Link></li>
            </ul>
        </nav>
    )
}