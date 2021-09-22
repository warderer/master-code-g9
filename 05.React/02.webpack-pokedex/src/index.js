import axios from 'axios';
import 'bootstrap';
import './styles/main.scss';
import Pokedex from './Pokedex';

function init(){ //App Start
    //Solicitar los datos de los Pokémons
    const pokemonCount = 10;
    const URI = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}&offset=0'`;
    axios.get(URI)
        .then((response) => {
            console.log("Status Code:", response.status);
            //La data esta en: response.data.results
            console.log("La Data es:", response.data.results);
            const pokedex = new Pokedex(response.data.results);
            pokedex.createPokedex();
        }).catch( (error) => {
            console.log("Error:",error);
        })
}

init();