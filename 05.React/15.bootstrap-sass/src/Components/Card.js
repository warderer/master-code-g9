//* ES UN COMPONENTE QUE VAMOS A REUTILIZAR
//* CARD ES UNA TARJETA
import React from 'react'
import image1 from '../Assets/image1.jpg'

function Card({title}) {
    return (
        <div className="card">
            <img src={image1} alt="" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary ">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Provident, deleniti.
                </p>
            </div>
        </div>
    )
}

export default Card
