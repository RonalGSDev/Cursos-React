import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';

function App() {

  const nombres = ["Ronal","Luis","Pedro","Juan"];

  return (
    <div className="App">
      <header className="App-header">

        <Todo />

      </header>
    </div>
  );
}

export default App;
