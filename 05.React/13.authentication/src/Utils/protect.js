//? LO VAMOS A UTILIZAR COMO SI FUERA NUESTRO HOC (HIGHER ORDER COMPONENT)
//* REUTILIZAR LA LÓGICA 
import React from 'react'
import {Redirect} from 'react-router-dom'

function HOC(Component) {
    const token = window.sessionStorage.getItem('token');

//*CREAMOS UNA FUNCIÓN LE VAMOS A PASAR LOS PROPS DEL USUARIO Y LO DIRECCIONAMOS

 const WrappedComponent = (props) => {
    return token ? <Component {...props} /> : <Redirect to="/" />
 }

   return WrappedComponent
}

export default HOC
