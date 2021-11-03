//* CARDS ES UN CONJUNTO DE TARJETAS
import React from 'react'
import Card from './Card'
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'

const cards =[
    {
        id: 1,
        title: 'Día de Muertos',
        image: image1,
        url: 'https://www.bbc.com/mundo/noticias-54758605'
    },
    {
        id: 2,
        title: 'Johnny Cupcakes',
        image: image2,
        url: 'https://johnnycupcakes.com/'
    },
    {
        id: 3,
        title: 'Checo Pérez',
        image: image3,
        url: 'https://checoperez.com/'
    }

]


function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
              
              {
                  //Aquí hacemos un recorrido
                  cards.map(card => (        
            <div className="col-md-4" key={card.id} >
                <Card title={card.title} imageSource={card.image} url={card.url}/>
            </div>
                  ))
              }



                {/* <div className="col-md-4">
                    <Card />
                </div>
                <div className="col-md-4">
                    <Card />
                </div> */}
            </div>
        </div>
    )
}

export default Cards
