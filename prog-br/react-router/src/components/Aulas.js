import data from '../Data';
import { Link, useLocation } from "react-router-dom";

export default function Aulas(props) {

    const location = useLocation()

    return (
        <div className="page">
            <h1>Aulas</h1>
            <ul className="aulas">
                {data.map(
                    (aula) => {
                        return (
                            <li key={aula.id}><Link to={`${location.pathname}/${aula.id}`} className="link">{aula.title}</Link></li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}