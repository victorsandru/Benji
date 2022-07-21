import "./Expenses.css";
import BasePageLayout from "../components/UI/BasePageLayout";
import ExpensesGraph from "../components/Expenses/ExpensesGraph";
import ExpensesSoFar from "../components/Expenses/ExpensesSoFar";

function Expenses() {
  return (
    <>
      <BasePageLayout>
        <div className="content-wrapper">
          <ExpensesGraph />
          <ExpensesGraph />
          <ExpensesSoFar />
        </div>
      </BasePageLayout>
    </>
  );
}

export default Expenses;
