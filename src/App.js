import logo from './logo.svg';
import './App.css';
import './components/Card/Card';
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card name="makuin" description="corre en perra verguiza" price="50000"></Card>
      </header>
    </div>
  );
}

export default App;
