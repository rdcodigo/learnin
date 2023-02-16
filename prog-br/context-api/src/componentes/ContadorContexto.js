import React, {useState, createContext} from "react";

export const ContadorContexto = createContext();

export function ContadorProvider(props){
    const [contagem, setContagem] = useState(0)

    return(
        <ContadorContexto.Provider value={[contagem, setContagem]}>
            {props.children}
        </ContadorContexto.Provider>
    )
}