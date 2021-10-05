import React, { useState, useEffect } from 'react';
import ListaContactos from './ListaContactos';

function HomeContactos () {

    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        //Aquí se debe realizar la llamada a APIs
        setTimeout(() => {
            setContactos([
                {id:1, nombre:"Jesua", apellido:"Lujan"},
                {id:2, nombre:"César", apellido:"Guerra"}
            ])
        }, 5000);
    },[]);

    return(
        <>
            {   contactos.length === 0
                ? <h2>Cargando contactos...</h2>
                : <ListaContactos lista={contactos}/>
            }
        </>
    )
}

export default HomeContactos;