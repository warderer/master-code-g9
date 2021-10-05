import React from 'react';

function ListaContactos({lista}){ //Recibe un Arreglo de Contactos [{id, nombre, apellido}]
    /* Lógica */
    const renderContactos = () => {
        return (lista.map(
            (contacto) => <p key={contacto.id}>{contacto.nombre} {contacto.apellido}</p>
            )
        )
    }

    /* Vista / Output */
    return(
        <>
            <h1>Esta es mi lista de contactos:</h1>
            {renderContactos()}
        </>
    )
}

export default ListaContactos;