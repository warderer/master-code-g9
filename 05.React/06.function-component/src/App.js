import './App.css';
import Counter from './components/Counter';
import HomeFunction from './components/HomeFunction';

function App() {
  return (
    <div className="App">
      <Counter />
      <HomeFunction saludo="hola" nombre="Mario Bros"></HomeFunction>
    </div>
  );
}

export default App;
