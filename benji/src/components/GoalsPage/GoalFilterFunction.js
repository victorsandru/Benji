/**
 * Applies selected filters to the list of goals.
 * @param goals - list of goals.
 * @param filterOptions - object containing all filter options.
 * @param appliedFilters - list of selected filter options.
 *
 * @return filteredGoals - filtered list of goals.
 */
export default function filterGoals(goals, filterOptions, appliedFilters) {
  Object.keys(filterOptions).forEach((filterType) => {
    // Select applied filters for each type of filter
    const selectedFiltersByType = filterOptions[filterType].filter((filter) =>
      appliedFilters.includes(filter)
    );

    if (selectedFiltersByType.length > 0) {
      goals = goals.filter((goal) => {
        return selectedFiltersByType.reduce((prevFilterResult, curFilter) => {
          let includeGoal;

          if (filterType === "date") {
            includeGoal =
              prevFilterResult &&
              applyDateFilter(
                new Date(goal.dueDate),
                Object.keys(curFilter)[0]
              );
          } else if (filterType === "status") {
            includeGoal =
              prevFilterResult &&
              applyStatusFilter(goal, Object.keys(curFilter)[0]);
          }

          return includeGoal;
        }, true);
      });
    }
  });

  return goals;
}

// Helper functions
function applyDateFilter(goalDueDate, curFiler) {
  const today = new Date();

  switch (curFiler) {
    case "today":
      return goalDueDate <= today;
    case "tomorrow":
      const tomorrow = new Date().setDate(today.getDate() + 1);
      return goalDueDate <= tomorrow;
    case "thisWeek":
      const lastDayThisWeek = new Date().setDate(
        today.getDate() + (7 - (today.getDay() % 7))
      );
      return goalDueDate <= lastDayThisWeek;
    case "thisMonth":
      const lastDayThisMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      );
      return goalDueDate <= lastDayThisMonth;
    case "thisYear":
      const lastDayThisYear = new Date(today.getFullYear() + 1, 0, 0);
      return goalDueDate <= lastDayThisYear;
    default:
      return true;
  }
}

function applyStatusFilter(goal, curFilter) {
  switch (curFilter) {
    case "complete":
      return goal.savedAmount >= goal.goalAmount;
    case "incomplete":
      return goal.savedAmount < goal.goalAmount;
    case "active":
      return goal.active;
    case "inactive":
      return !goal.active;
    default:
      return true;
  }
}
