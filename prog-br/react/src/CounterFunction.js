import React, { useState, useEffect } from "react";

function CounterFunction(props){

    const [countFunction, setCount] = useState(props.countFunction);
    
    useEffect(
        ()=>{
            setCount(parseInt(localStorage.getItem("countFunction")));
            return ()=>{
                console.log("Método utilizado sempre que o componete for removido da tela.")
            }
        },
        []
    );

    useEffect(
        ()=>{
            document.title = countFunction;
            localStorage.setItem("countFunction", countFunction);
        },
        [countFunction]
    );

    function add(){
        setCount(countFunction + 1);
    }

    return(
        <div>
            <h1>CounterFunction: {countFunction}</h1>
            <button onClick={add}>ADD + 1</button>
        </div>
    );
}

export default CounterFunction;