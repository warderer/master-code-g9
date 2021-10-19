import { Route, Switch, Link, useLocation, useParams, useHistory } from 'react-router-dom';
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
          {/* Con :nombreVar indico que va a recibir un parametro con ese valor */}

          <Route path="/portafolio/:pid">
            <PortafolioDetalle />
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
      <ul>
        <li>
          <Link to="/portafolio/1">Pinterest</Link>
        </li>
        <li>
          <Link to="/portafolio/2">Cajero</Link>
        </li>
        <li>
          <Link to="/portafolio/3">Pokédex</Link>
        </li>
      </ul>
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

function PortafolioDetalle(){
  const proyectos = [
    { id: 1, nombre: "Pinterest", desc: "Un clon de pinterest con HTML y CSS" },
    { id: 2, nombre: "Cajero", desc: "Simulador de cajero autómatico con HTML, CSS y JS" },
    { id: 3, nombre: "Pokédex", desc: "Consumir la PokéAPI y mostrar un listado de Pokémons con HTML, CSS, y JS "}
  ]

  let { pid } = useParams();

  const history = useHistory();

  return(
    <>
      <h3>ID: { proyectos[pid-1].id }</h3>
      <h3>Nombre: { proyectos[pid-1].nombre }</h3>
      <p>Descripción: { proyectos[pid-1].desc }</p>

      <button onClick={()=>{
        /*<Link to="/portafolio">Portafolio</Link> <- Esto no funciona
        Cuando quiero usar un enlace dentro de una lógica de JS
        Necesito usar useHistory
        */
        history.push('/portafolio');
       //history.goback(); me regresa a la URL anterior de donde vine.
      }}>
        Nos vamos al Portafolio
      </button>
    </>
  )
}

export default App;
