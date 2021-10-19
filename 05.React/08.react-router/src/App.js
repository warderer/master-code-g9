import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

export default App;
