import './App.css';
import Counter from './components/Counter';
import HomeFunction from './components/HomeFunction';
import HomeContactos from './components/HomeContactos';

function App() {
  return (
    <div className="App">
      <Counter />
      <HomeFunction saludo="hola" nombre="Mario Bros"></HomeFunction>
      <HomeContactos />
    </div>
  );
}

export default App;
