import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

export default function Assistir(props) {

    const location = useLocation()
    const query = useQuery()


    useEffect(
        ()=>{
            console.log(location)
            console.log(query)
        }
    )

    return (
        <div className="page">
            {query.get('v')}
        </div>
    )
}