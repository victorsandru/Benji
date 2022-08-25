import { useState, createContext } from "react";

const GoalSortingContext = createContext({
  sortingOptions: [],
  sortMenuShown: false,
  sortOption: undefined,
  sortAscending: undefined,
  changeSortOption: (option) => {},
  showSortingMenu: (hide = undefined) => {},
});

/**
 * Returns context provider with functions
 * for changing context and default values.
 */
export const GoalSortingContextProvider = ({ sortingOptions, children }) => {
  const [sortOption, setSortOption] = useState(undefined);
  const [sortMenuShown, setSortMenuShown] = useState(false);
  const [sortAscending, setSortAscending] = useState(undefined);

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

  return (
    <GoalSortingContext.Provider
      value={{
        sortingOptions,
        sortMenuShown,
        sortOption,
        sortAscending,
        changeSortOption,
        showSortingMenu,
      }}
    >
      {children}
    </GoalSortingContext.Provider>
  );
};

export default GoalSortingContext;
