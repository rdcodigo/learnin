import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Aulas from "../Data";

function useAula() {
    let params = useParams()
    return Aulas[params.id]
}

export default function Aula(props) {
    const aula = useAula()

    return (
        <div className="page">
            <h1>{aula.title}</h1>
            <h3>{aula.desc}</h3>
        </div>
    )
}