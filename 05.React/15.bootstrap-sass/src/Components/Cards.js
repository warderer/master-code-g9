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
        image: image1
    },
    {
        id: 2,
        title: 'Johnny Cupcakes',
        image: image2
    },
    {
        id: 3,
        title: 'Checo Pérez',
        image: image3
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
                <Card title={card.title}/>
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
