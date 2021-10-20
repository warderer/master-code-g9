//* IMPORTAR useState , useEffect 
//* useState -> trabajar el estado
//* useEffect -> si tenemos algo de código que queremos mostrar usamos useEffect

import React, { useState , useEffect, useRef } from 'react'

//* NOTA: useState y useRef son similares ambos modifican el estado
//* useRef -> no re-enderiza la vista nuevamente
//* useRef -> nos permite acceder a los elementos del DOM, useRef sigue trabajando en el DOM VIRTUAL O VIRTUAL DOM
//* document.getElementById('#') , querySelectorAll()

function Counter() {
    const [count, setCount] = useState(0) //Si modifico el estado, el componente se vuelva a pintar
    const name = useRef('Carlos')
    const cuentaRenderizado = useRef(0) //si se ha renderizado 0 veces no se ha cargado nada 
    const botonContadorRef = useRef()
    
    useEffect(() => {
        console.log( botonContadorRef.current.innerText = 'HOLA!')
        if(cuentaRenderizado.current === 0){ // aumentar la cuenta de renderizado y parar la ejecución
            cuentaRenderizado.current = cuentaRenderizado.current + 1;
            return;
        }
        console.log(`EL VALOR INICIAL EN COUNT ES: ${count} `)//usamos un template string
    }, [count]) //los corchetes siginifican dependencias 
          //Los corchetes sirven para escuchar cambios en el estado o en los props

    
    const changeName = () => {
        name.current = 'Cesar';
        console.log(`TU NUEVO NOMBRE ES ${name.current}`)
    }


    return (
        <div>
            <h1>Count: {count} </h1>
            <button ref={botonContadorRef} onClick={() => setCount(count + 1)}> sumar 1 </button>

            <h1>Name: { name.current} </h1>
            <button onClick = {changeName}> Cambiar Nombre </button>
        </div>
    )
}

export default Counter
