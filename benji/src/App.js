import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/expenses">Expenses</Link></h1>
        <h1><Link to="/budgets">Budgets</Link></h1>
        <h1><Link to="/goals">Goals</Link></h1>
        <h1><Link to="/calendar">Calendar</Link></h1>
      </header>
    </div>
  );
}

export default App;
