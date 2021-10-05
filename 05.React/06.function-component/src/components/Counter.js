import React, { useState } from 'react' // #1 Mando a llamar a useState para poderlo usar

function Counter(){
/* Aquí va su lógica*/

// useState devuelve un ARREGLO con dos elementos [valor, funcion]
// useState recibe como parametro el estado/valor inicial

// Estoy desestructurando el objeto.
// Pos 0 --> El valor del estado (variable estadoContador)
// Pos 1 --> Función: Me permite asignar un nuevo valor a mi estado.
const [estadoContador, setEstadoContador] = useState(0);

/* Retorno lo que se vera en pantalla*/
    return(
        <div className="contador">
            <p>{estadoContador}</p>
            <button onClick={()=>{
                setEstadoContador(estadoContador + 1);
            }}>Sumar +</button>
            <button onClick={()=>{
                setEstadoContador(estadoContador - 1);
            }}>Restar -</button>
        </div>
    )
}

export default Counter;