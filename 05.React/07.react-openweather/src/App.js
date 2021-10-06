import { useState, useEffect } from 'react';
import './App.css';

function App() {
// #2 Manejo de los States de la Aplicación
const [apiData, setApiData] = useState({}); //Guardar la respuesta de la API
const [inputState, setInputState] = useState('Ciudad del Carmen') //Guardar el input
const [state, setState] = useState('Ciudad del Carmen') //Copia de getState para el evento onClick

// #1 Añado información de manejo de la API
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  console.log(apiKey);
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&lang=es&units=metric&appid=${apiKey}`;
  console.log(apiUrl);

// #3 Side Effect: useEffect
// Mandar a llar la API y actualiz el estado solo cuando apiURL cambie
useEffect(()=>{
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setApiData(data))
},[apiUrl]);

// Obtengo la data de cada teclazo del input y actualizo el estado
const inputHandler = (event) => {
  setInputState(event.target.value);
}

// Copio lo que tengo en inputState y lo coloco en setState
// Esto deberia ejecutar nuevamente mi useEffect
const submitHandler = () => {
  setState(inputState);
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <div className="container">
          <label htmlFor="location-name">
            Enter Location:
          </label>

          <input
            type="text"
            id="location-name"
            className=""
            onChange={inputHandler}
            value={inputState}
          />

          <button onClick={submitHandler}>
            Search
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
