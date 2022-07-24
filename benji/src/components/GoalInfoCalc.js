/**
 * This function calculates the current goal progress
 * and the number of months left to reach the goal.
 *
 * @param {object} goal - The goal information.
 *
 * @return {array} Array containing calculated values.
 * */

export default function calculateGoalInfo(goal) {
  // Calculate progress in % to dynamically change the width of the progress bar
  let progress = (goal.savedAmount / goal.goalAmount) * 100;
  // Calculate how many months remain until reaching the goal
  let monthsLeft = Math.ceil(
    (goal.goalAmount - goal.savedAmount) / goal.autosaveAmount
  );
  return [progress, monthsLeft];
}
