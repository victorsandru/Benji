import { Fragment, useContext } from "react";
import GoalCard from "../GoalCard";
import GoalSortingContext from "../../../store/goal-sorting-context";

/**
 * Renders a list of goals.
 */
export default function GoalsList({ goals }) {
  const { sortOption, sortAscending } = useContext(GoalSortingContext);

  if (sortOption) {
    goals.sort((goalA, goalB) => {
      if (goalA[sortOption] > goalB[sortOption]) return sortAscending ? 1 : -1;
      else if (goalA[sortOption] < goalB[sortOption])
        return sortAscending ? -1 : 1;
      else return 0;
    });
  }

  return (
    <Fragment>
      {goals.map((goal, index) => (
        <GoalCard goalInfo={goal} key={index} />
      ))}
    </Fragment>
  );
}
