import logo from './engranaje.png';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoC } from './SegundoC';
import { TercerC } from './TercerC';

function App() {

const fichaMedica={gropoSanguineo:"O+", alergia:"Ninguna", genero:"Maculino", edad:"18", nacionalidad:"Guatemalteco"}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sesión 03 - React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="estiloP">Ronal Vinicio Gómez Santos</p>
        <p className="estiloP">gomerzronal@gmail.com</p>
        <MiComponente/>
        <SegundoC />
        <TercerC nombre="Vinicio" apellido="Santos" ficha={fichaMedica}></TercerC>
        
      </header>
    </div>
  );
}

export default App;
