import "./Expenses.css";
import BasePageLayout from "../components/UI/BasePageLayout";
import ExpensesGraph from "../components/Expenses/ExpensesGraph";
import ExpensesSoFar from "../components/Expenses/ExpensesSoFar";

const Expenses = () => {
  return (
    <BasePageLayout>
      <div className="expenses-wrapper">
        <ExpensesGraph />
        <ExpensesGraph />
        <ExpensesSoFar />
      </div>
    </BasePageLayout>
  );
}

export default Expenses;
