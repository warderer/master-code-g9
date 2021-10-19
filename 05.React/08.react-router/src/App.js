import { Route, Switch, Link, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            {/* En React no usamos la etiqueta A para los enlaces
            Esta recargaría la página */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portafolio">Portafolio</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portafolio">
            <Portafolio />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>

          {/* Para manejar una ruta 404, hay que ponerla hasta
          el final de mis rutas e indicar el path con un asterisco */}
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

function Home(){
  return(
    <>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </>
  )
}

function Portafolio() {
  return(
    <>
      <h1>Portafolio</h1>
    </>
  )
}

function Contacto() {
  return(
    <>
      <h1>Contacto</h1>
    </>
  )
}

function Error404(){
  let location = useLocation();
  //pathname es la propiedad de location que contiene la ruta
  return(
    <>
      <h1>Error 404</h1>
      <p>No encontre la ruta: { location.pathname } </p>
    </>
  )
}

export default App;
