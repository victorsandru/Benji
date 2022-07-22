import "./ExpensesGraph.css";
import ExpensesPieChart from "./ExpensesPieChart";

const DUMMY_DATA = [
  { title: "One", value: 10, color: "#8ECAE6" },
  { title: "Two", value: 15, color: "#219EBC" },
  { title: "Three", value: 20, color: "#FF9330" },
];

const DUMMY_MONEY_LEFT = [440, 1000];

const ExpensesGraph = (props) => {
  return (
    <div className="graph-container">
      <h1 className="graph-header">Your Expenses</h1>
      <ExpensesPieChart data={DUMMY_DATA} />
      <div className="graph-info">
        <div className="expenses-spent">{`$${DUMMY_MONEY_LEFT[0]}`}</div>
        <p>left out of</p>
        <div className="expenses-spent">{`$${DUMMY_MONEY_LEFT[1]}`}</div>
      </div>
    </div>
  );
};

export default ExpensesGraph;
