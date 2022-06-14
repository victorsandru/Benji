import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/expenses">Expenses</Link>
        <h2>Budgets</h2>
        <h3>Goals</h3>
        <h4>Calendar</h4>
      </header>
    </div>
  );
}

export default App;
