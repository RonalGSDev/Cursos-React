import logo from './logo.svg';
import './App.css';
import { NombresComponent } from './components/NombresComponent';
import { MisJuegos } from './components/MisJuegos.js';
import FormularioValidado from './components/FormularioValidado.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormularioValidado />
      </header>
    </div>
  );
}

export default App;
