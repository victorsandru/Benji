/**
 * Sorts list of goals based on selected sort option.
 * @param goals	- list of goals.
 * @param sortOption - selected sort option.
 * @param sortAscending - specifies sorting order.
 */
export default function sortGoals(goals, sortOption, sortAscending) {
  goals.sort((goalA, goalB) => {
    if (goalA[sortOption] > goalB[sortOption]) return sortAscending ? 1 : -1;
    else if (goalA[sortOption] < goalB[sortOption])
      return sortAscending ? -1 : 1;
    else return 0;
  });
}
