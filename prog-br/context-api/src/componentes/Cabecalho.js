import React, {useContext} from 'react';
import {ContadorContexto} from './ContadorContexto'

function Cabecalho (props){
    const [contagem, setContagem] = useContext(ContadorContexto)

    return(
        <div className='cabecalho'>
            <h2>
                Contador
            </h2>
            <div className="resultadoContagem">
                {contagem}
            </div>
        </div>
    )
}

export default Cabecalho