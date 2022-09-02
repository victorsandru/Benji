import { Fragment } from "react";
import { useSelector } from "react-redux";
import GoalCard from "../GoalCard";
import sortGoals from "../GoalSortFunction";
import filterGoals from "../GoalFilterFunction";
import styled from "styled-components";
import calculateGoalInfo from "../../GoalInfoCalc";

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
export default function GoalsList() {
  const { goals } = useSelector((state) => state.goals);
  const { selectedSortOption, sortAscending } = useSelector(
    (state) => state.goalSort
  );
  const { filterOptions, appliedFilters } = useSelector(
    (state) => state.goalFilter
  );

  if (goals.length === 0) return <EmptyListText>No goals yet</EmptyListText>;

  // Calculate goal current progress and the number of months left to reach the goal
  let displayedGoals = goals.map((goal) => {
    const [progress, monthsLeft] = calculateGoalInfo(goal);
    return {
      ...goal,
      progress,
      monthsLeft,
    };
  });

  // Apply selected filters
  if (appliedFilters.length > 0) {
    displayedGoals = filterGoals(displayedGoals, filterOptions, appliedFilters);
  } else {
    // Initially show only active and incomplete goals
    displayedGoals = displayedGoals.filter(
      (goal) => goal.active && goal.savedAmount < goal.goalAmount
    );
  }

  if (displayedGoals.length === 0)
    return <EmptyListText>No goals match selected criteria</EmptyListText>;

  // Apply selected sort option
  if (selectedSortOption)
    sortGoals(displayedGoals, selectedSortOption, sortAscending);

  return (
    <Fragment>
      {displayedGoals.map((goal) => (
        <GoalCard goalInfo={goal} key={goal.id} />
      ))}
    </Fragment>
  );
}
