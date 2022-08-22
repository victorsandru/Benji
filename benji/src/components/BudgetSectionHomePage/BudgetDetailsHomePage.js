import "./BudgetSectionHomePage.css";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const HorizontalBar = styled.div`
  width: 65%;
  height: 0;
  border: 1px solid rgba(201, 201, 201, 0.9);
  margin: 1.5% 0;
`;

/**
 * This helper component will render the details about the budget on the home page.
 *
 * Receives data to be rendered as well as gradients for rendering the budget categories.
 */
const BudgetDetailsHomePage = ({ budget, selectedCategory }) => {
  const categoriesContainer = useRef();

  // Scroll to appropriate category when clicking on pie chart
  useEffect(() => {
    // Scroll into view for the selected category label
    if (selectedCategory !== undefined)
      categoriesContainer.current.children[selectedCategory].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  }, [selectedCategory]);

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
      <div className={"budget-categories--home-page"} ref={categoriesContainer}>
        {budget.categories.map((category, index) => (
          <div
            className={`budget-details--home-page ${
              index === selectedCategory
                ? "budget-details--home-page-selected"
                : ""
            }`}
            style={{
              height: "24%",
              background: `${category.linearGradient}`,
              border: "none",
            }}
            key={index}
          >
            <p style={{ color: "white" }}>{category.title}</p>
            <p style={{ color: "white" }}>{`${category.value}%`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetDetailsHomePage;
