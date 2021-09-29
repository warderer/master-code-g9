import React from 'react';
import SearchBar from './Components/SearchBar';
import ImageCard from './Components/ImageCard';
import axios from 'axios';
import './App.css';


class App extends React.Component{
  state = {
    results: []            //inicializarlo en vacio 
  }

    sendSearch = (search) => {
      const apiKey = 'McvKvUc4ID56aba2JOzwNZA7kZZIrafX';
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=20&offset=0&rating=g&lang=en`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({results: response.data.data}) //debe tener el objeto
      }).catch((err) => {
        console.log(err)
      })
    }

    componentWillMount(){ //Método UnSafe. Actualmente ya no se usa
      console.log('1. ANTES DE QUE SE EJECUTE EL RENDER')
    }

    componentDidMount(){
      console.log('3. Después del Render')
    }

    render(){
      console.log('2. Se ejecuta al realizar el render')
      return(
          <div className="App">
            <SearchBar emitSearch = {this.sendSearch} />
            <div className="grid-cards">
            {
              this.state.results.map ( gif => (<ImageCard url={gif.images.fixed_height.url} />))
            }
            </div>
          </div>
      )
    }
}

export default App;
