import React from 'react';

// DESTRUCTURANDO PROPS
// Si añado llaves {nombreDelProp} puedo llamar especificamente a esa prop
// Ahorrandonos escribir props.nombreDelProp
function HomeFunction({saludo, nombre}){
    /* <> es un Fragmento de React <React.Fragment>, que nos evita añadir más
    cosas al DOM, como etiquetas DIV */
    return(
        <>
            <h1>Este es el Home en Función</h1>
            <p>{saludo} {nombre}</p>
        </>
    )
}

export default HomeFunction;

