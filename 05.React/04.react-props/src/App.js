import React from 'react';
import Sensei from './Components/Sensei';
import './App.css';


//También podemos utilizar una la clase de ES6 para definir a un componente
class App extends React.Component{

   constructor(){

    super() // es necesario cuando necesitamos acceder a algunas variables de su clase padre

    //estado inicial
    this.state={
      name: "Jesua",
      email: "jesua@devf.mx",
      ocupation: "Sensei en Devf",
    }
   }
   render()
   {
    return(
      <div className="App">

        {/* PROPS (QUE PROVIENE DE PROPIEDADES) SON DATOS QUE DEVUELVE UN ELEMENTO DE REACT */}
        
        <h1>Props en React! </h1>
        <Sensei name={this.state.name} email={this.state.email} ocupation={this.state.ocupation} /> 
        <button onClick={()=>this.setState({name:"Cesar", email:"cesar@devf.mx" })}>  Actualizar </button> 
        </div>
    )
   }
}


export default App;
