/**
 * Applies selected filters to the list of goals.
 * @param goals - list of goals.
 * @param filterOptions - object containing all filter options.
 * @param appliedFilters - list of selected filter options.
 *
 * @return filteredGoals - filtered list of goals.
 */
export default function filterGoals(goals, filterOptions, appliedFilters) {
  console.log("Filtering goals...");

  Object.keys(filterOptions).forEach((filterType) => {
    // Select applied filters for each type of filter
    const selectedFiltersByType = filterOptions[filterType].filter((filter) =>
      appliedFilters.includes(filter)
    );

    if (selectedFiltersByType.length > 0) {
      goals = goals.filter((goal) => {
        return selectedFiltersByType.reduce((prevFilterResult, curFilter) => {
          if (filterType === "date") {
            return applyDateFilter(
              new Date(goal.dueDate),
              Object.keys(curFilter)[0],
              prevFilterResult
            );
          } else if (filterType === "status") {
            return applyStatusFilter(
              goal,
              Object.keys(curFilter)[0],
              prevFilterResult
            );
          }
        }, false);
      });
    }
  });

  return goals;
}

// Helper functions
function applyDateFilter(goalDueDate, curFiler, prevFilterResult) {
  const today = new Date();

  switch (curFiler) {
    case "today":
      return prevFilterResult || goalDueDate <= today;
    case "tomorrow":
      const tomorrow = new Date().setDate(today.getDate() + 1);
      return prevFilterResult || goalDueDate <= tomorrow;
    case "thisWeek":
      const lastDayThisWeek = new Date().setDate(
        today.getDate() + (7 - (today.getDay() % 7))
      );
      return prevFilterResult || goalDueDate <= lastDayThisWeek;
    case "thisMonth":
      const lastDayThisMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      );
      return prevFilterResult || goalDueDate <= lastDayThisMonth;
    case "thisYear":
      const lastDayThisYear = new Date(today.getFullYear() + 1, 0, 0);
      return prevFilterResult || goalDueDate <= lastDayThisYear;
    default:
      return prevFilterResult || true;
  }
}

function applyStatusFilter(goal, curFilter, prevFilterResult) {
  switch (curFilter) {
    case "complete":
      return prevFilterResult || goal.savedAmount >= goal.goalAmount;
    case "incomplete":
      return prevFilterResult || goal.savedAmount < goal.goalAmount;
    case "active":
      return prevFilterResult || goal.active;
    case "inactive":
      return prevFilterResult || !goal.active;
    default:
      return true;
  }
}
