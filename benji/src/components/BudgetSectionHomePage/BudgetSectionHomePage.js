import Section from "../UI/Section";
import BudgetDetailsHomePage from "./BudgetDetailsHomePage";
import BudgetPieChart from "../BudgetPieChart";
import "./BudgetSectionHomePage.css";
import DummyBudgetData from "../../DummyBudgetData";
import assignGradient from "../BudgetPieChart/assignGradient";

// Styling of the Budget section
const budgetSectionStyle = {
  height: "55%",
  marginBottom: "1.5rem",
  position: "relative",
  display: "flex",
  flexDirection: "row",
};

// Styling the budget section header
const headerStyle = {
  position: "absolute",
};

// Defining colors that will be used in the pie chart.
const colors = ["#6F99D1", "#76AED7", "#E962B1", "#ffd050", "#66d980"];

// Transform budget data for rendering
const { total: budgetTotal, spent: budgetSpent } = DummyBudgetData;
const budgetLeft = budgetTotal - budgetSpent;
const budgetSpentPercent = ((budgetSpent / budgetTotal) * 100).toFixed(0);

const budgetCategories = assignGradient(
  DummyBudgetData.categories
    .sort((category1, category2) =>
      category1.amount > category2.amount ? -1 : 1
    )
    .map((category) => ({
      name:
        category.name.charAt(0).toUpperCase() +
        category.name.slice(1).toLowerCase(),
      percentage: ((category.amount / budgetTotal) * 100).toFixed(0),
    })),
  colors
);

/**
 * This component will render the budget section on the home page.
 */
const BudgetSectionHomePage = () => {
  return (
    <Section sectionStyle={budgetSectionStyle}>
      <h1 className={"section-header"} style={headerStyle}>
        Budget
      </h1>
      <BudgetDetailsHomePage
        budget={{
          total: budgetTotal,
          spent: budgetSpent,
          left: budgetLeft,
          categories: budgetCategories,
        }}
      />
      <BudgetPieChart
        height={"90%"}
        width={"50%"}
        data={budgetCategories}
        colors={colors}
      >
        <p className={"pie-chart-label-normal"}>Total spent</p>
        <p
          className={"pie-chart-label-highlighted"}
        >{`${budgetSpentPercent}%`}</p>
      </BudgetPieChart>
    </Section>
  );
};

export default BudgetSectionHomePage;
