import "./Expenses.css";
import BasePageLayout from "../components/UI/BasePageLayout";
import ExpensesGraph from "../components/Expenses/ExpensesGraph";
import ExpensesSoFar from "../components/Expenses/ExpensesSoFar";
import ExpensesList from "../components/Expenses/ExpensesList";

const Expenses = () => {
  return (
    <BasePageLayout>
      <div className="expenses-wrapper">
        <ExpensesGraph />
        <ExpensesList />
        <ExpensesSoFar />
      </div>
    </BasePageLayout>
  );
}

export default Expenses;
