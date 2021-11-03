//* ES UN COMPONENTE QUE VAMOS A REUTILIZAR
//* CARD ES UNA TARJETA
import React from 'react';
// import image1 from '../Assets/image1.jpg'
import './cards.scss';

function Card({title, imageSource, url}) {
    return (
        <div className="card text-center bg-dark">
            <div className="overflow">
            <img src={imageSource} alt="" className="card-img-top"/>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary ">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Provident, deleniti.
                </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                    Ir a la nota 
                </a>
            </div>
        </div>
    )
}

export default Card
