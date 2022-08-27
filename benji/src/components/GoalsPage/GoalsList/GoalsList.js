import { Fragment, useContext } from "react";
import GoalCard from "../GoalCard";
import GoalSortFilterContext from "../../../store/goal-sort-filter-context";
import sortGoals from "../GoalSortFunction";

/**
 * Renders a list of goals and applies selected sort and filter options.
 */
export default function GoalsList({ goals }) {
  const { sortOption, sortAscending, filterOptions, appliedFilters } =
    useContext(GoalSortFilterContext);

  // Apply selected sort option
  if (sortOption) {
    sortGoals(goals, sortOption, sortAscending);
  }

  // Apply selected filters

  return (
    <Fragment>
      {goals.map((goal, index) => (
        <GoalCard goalInfo={goal} key={index} />
      ))}
    </Fragment>
  );
}
