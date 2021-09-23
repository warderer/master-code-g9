import React from 'react';
import './Counter.css'

//? En react usamos aún camelCase para clases y funciones 
//? En react para usar clases debemos utilizar extends React.Component (revisar documentación)
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count: props.initCount  //? Count es el valor inicial de mi contador
        }
        //? El state se va a encargar de modificar el DOM por mi
        //? React es detectar los cambios en el state y los pone en la UI
 
    }

      //* aquí vamos a trabajar con el render
      render() {
        //JSX LA COMBINACION DE NUESTRO HTML & JAVASCRIPT
        //JSX no reconoce class como atributo de HTML, en su lugar lo cambia por className
        return (
            <div className="counter-main">
                <h5>{this.state.count}</h5> {/*LAS LLAVES EN JSX REPRESENTAN CODIGO DE JAVASCRIPT*/} 
                <div className="counter-buttons"> {/* ELEMENTO PADRE */}
                    {/* this.setState el único que puede cambiar el estado */}
          {/* ELEMENTO HIJOS */}  
           <button    
             onClick={()=> this.setState({count: this.state.count+1})}
            >
            Agregar
            </button>

            <button
            onClick={()=> this.setState({count: this.state.count-1})}
            >
            Disminuir
            </button>
                </div>
            </div>
        )
    }
}


export default Counter;