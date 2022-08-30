import { Fragment, useContext } from "react";
import GoalCard from "../GoalCard";
import GoalSortFilterContext from "../../../store/goal-sort-filter-context";
import sortGoals from "../GoalSortFunction";
import filterGoals from "../GoalFilterFunction";
import styled from "styled-components";

const EmptyListText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  color: #c0bfbfe5;
  margin: 0;
`;

/**
 * Renders a list of goals and applies selected sort and filter options.
 */
export default function GoalsList({ goals }) {
  const { sortOption, sortAscending, filterOptions, appliedFilters } =
    useContext(GoalSortFilterContext);

  if (goals.length === 0) return <EmptyListText>No goals yet</EmptyListText>;

  let displayedGoals;

  // Apply selected filters
  if (appliedFilters.length > 0) {
    displayedGoals = filterGoals(goals, filterOptions, appliedFilters);
  } else {
    // Initial show only active and incomplete goals
    displayedGoals = goals.filter(
      (goal) => goal.active && goal.savedAmount < goal.goalAmount
    );
  }

  console.log(displayedGoals);

  if (displayedGoals.length === 0)
    return <EmptyListText>No goals match selected criteria</EmptyListText>;

  // Apply selected sort option
  if (sortOption) sortGoals(displayedGoals, sortOption, sortAscending);

  return (
    <Fragment>
      {displayedGoals.map((goal) => (
        <GoalCard goalInfo={goal} key={Math.random()} />
      ))}
    </Fragment>
  );
}
