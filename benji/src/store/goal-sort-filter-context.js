import { useState, createContext } from "react";

const GoalSortFilterContext = createContext({
  // Sort context
  sortOptions: undefined,
  sortMenuShown: false,
  sortOption: undefined,
  sortAscending: undefined,
  changeSortOption: (option) => {},
  showSortingMenu: (hide = undefined) => {},
  // Filter context
  filterOptions: undefined,
  filterMenuShown: false,
  appliedFilers: undefined,
  showFilterMenu: (hide = undefined) => {},
  changeFilter: (filter) => {},
});

// Default sort and filter options
// Keys will be used to sort goals array
const defaultSortOptions = {
  name: "Name",
  goalAmount: "Goal amount",
  savedAmount: "Saved amount",
  monthsLeft: "Months left",
  autosaveAmount: "Autosave amount",
};

const defaultFilterOptions = {
  date: [
    { today: "Today" },
    { tomorrow: "Tomorrow" },
    { nextWeek: "This week" },
    { thisMonth: "This month" },
    { thisYear: "This year" },
  ],
  status: [
    { complete: "Complete" },
    { incomplete: "Incomplete" },
    { active: "Active" },
    { inactive: "Inactive" },
  ],
};

/**
 * Returns context provider with functions
 * for changing context and default values.
 */
export const GoalSortFilterContextProvider = ({
  sortOptions = defaultSortOptions,
  filterOptions = defaultFilterOptions,
  children,
}) => {
  const [sortMenuShown, setSortMenuShown] = useState(false);
  const [sortOption, setSortOption] = useState(undefined);
  const [sortAscending, setSortAscending] = useState(undefined);
  const [filterMenuShown, setFilterMenuShown] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState([]);

  const showSortingMenu = (hide = undefined) => {
    if (hide !== undefined) setSortMenuShown(hide);
    else setSortMenuShown((prevState) => !prevState);
  };

  const changeSortOption = (option) => {
    if (option !== sortOption) {
      setSortOption(option);
      setSortAscending(true);
    } else {
      setSortAscending((prevState) => !prevState);
    }
  };

  const showFilterMenu = (hide = undefined) => {
    if (hide !== undefined) setFilterMenuShown(hide);
    else setFilterMenuShown((prevState) => !prevState);
  };

  const changeFilter = (filter) => {
    // Check if the filter has already been applied
    if (filter in appliedFilters) {
      // Filter out already added filter
      setAppliedFilters((prevFilters) =>
        prevFilters.filter((currentFilter) => currentFilter !== filter)
      );
      // Add new filter
    } else setAppliedFilters((prevFilters) => [...prevFilters, filter]);
  };

  return (
    <GoalSortFilterContext.Provider
      value={{
        sortOptions,
        sortMenuShown,
        sortOption,
        sortAscending,
        changeSortOption,
        showSortingMenu,
        filterOptions,
        filterMenuShown,
        showFilterMenu,
        appliedFilters,
        changeFilter,
      }}
    >
      {children}
    </GoalSortFilterContext.Provider>
  );
};

export default GoalSortFilterContext;
