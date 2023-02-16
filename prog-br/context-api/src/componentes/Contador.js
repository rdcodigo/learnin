import React, { useContext, useState } from "react";
import {ContadorContexto} from './ContadorContexto'

function Contador(props){

    const [contagem, setContagem] = useContext(ContadorContexto)

    return (
        <div>
            <div className="resultadoContagem">
                {contagem}
            </div>

            <div>
                <button onClick={()=>{setContagem(anterior=>anterior-1)}} className="botoesContagem">
                    -
                </button>
                <button onClick={()=>{setContagem(anterior=>anterior+1)}} className="botoesContagem">
                    +
                </button>
            </div>
        </div>
    )
}

export default Contador