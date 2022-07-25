import "./BudgetSectionHomePage.css";
import styled from "styled-components";

const HorizontalBar = styled.div`
  width: 65%;
  height: 0;
  border: 1px solid rgba(201, 201, 201, 0.9);
  margin: 3% 0;
`;

/**
 * This helper component will render the details about the budget on the home page.
 *
 * Receives data to be rendered as well as gradients for rendering the budget categories.
 */
const BudgetDetailsHomePage = ({ budget }) => {
  return (
    <div className={"budget-info--home-page"}>
      <div className={"budget-details--home-page"}>
        <p>Total Budget</p>
        <p>{`$${budget.total.toLocaleString("en-US")}`}</p>
      </div>
      <div className={"budget-details--home-page"}>
        <p>Total Spent</p>
        <p>{`$${budget.spent.toLocaleString("en-US")}`}</p>
      </div>
      <div className={"budget-details--home-page"}>
        <p>Left to Spend</p>
        <p>{`$${budget.left.toLocaleString("en-US")}`}</p>
      </div>
      <HorizontalBar />
      <div className={"budget-categories--home-page"}>
        {budget.categories.map((category) => (
          <div
            className={"budget-details--home-page"}
            style={{
              height: "24%",
              background: `${category.linearGradient}`,
              border: "none",
            }}
          >
            <p style={{ color: "white" }}>{category.name}</p>
            <p style={{ color: "white" }}>{`${category.percentage}%`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetDetailsHomePage;
