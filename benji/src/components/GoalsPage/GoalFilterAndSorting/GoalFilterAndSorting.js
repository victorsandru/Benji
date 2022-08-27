import "./GoalFilterAndSorting.css";
import SortIcon from "../../Icons/SortIcon";
import TriangleIcon from "../../Icons/TriangleIcon";
import FilterIcon from "../../Icons/FilterIcon";
import GoalSortMenu from "../GoalSortMenu";
import { useContext } from "react";
import GoalSortFilterContext from "../../../store/goal-sort-filter-context";
import GoalFilterMenu from "../GoalFilterMenu";
import CloseIcon from "../../Icons/CloseIcon";

/**
 * This component renders buttons for sorting and filtering goals.
 */
const GoalFilterAndSorting = () => {
  const {
    sortMenuShown,
    showSortingMenu,
    filterMenuShown,
    filterOptions,
    appliedFilters,
    showFilterMenu,
    clearFilterType,
  } = useContext(GoalSortFilterContext);

  const displaySortingMenu = (event) => {
    event.stopPropagation();
    showSortingMenu();
  };

  const displayFilterMenu = (event) => {
    event.stopPropagation();
    showFilterMenu();
  };

  // Determine which filters need to displayed
  const filtersToDisplay = Object.keys(filterOptions).map(
    (filterType, index) => {
      // Select applied filters for each type of filter
      const selectedFiltersByType = filterOptions[filterType].filter((filter) =>
        appliedFilters.includes(filter)
      );
      return selectedFiltersByType.length > 0 ? (
        <div className={"applied-filter"} key={index}>
          <p>
            {filterType[0].toUpperCase() + filterType.slice(1).toLowerCase()}
          </p>
          {[
            selectedFiltersByType.map((filter, index) => (
              <p key={index}>
                {index > 0 ? ", " : ""}
                {Object.values(filter)[0]}
              </p>
            )),
          ]}
          <CloseIcon
            classes={["close-icon"]}
            onClick={clearFilterType.bind(null, filterType)}
          />
        </div>
      ) : null;
    }
  );

  return (
    <div className={"dashboard"}>
      <div className={"applied-filters"}>{filtersToDisplay}</div>
      <div className={"action-btn-container"}>
        <button className={"action-btn sort-btn"} onClick={displaySortingMenu}>
          <SortIcon />
          Sort
          <TriangleIcon clicked={sortMenuShown} />
          <GoalSortMenu />
        </button>
        <button className={"action-btn filter-btn"} onClick={displayFilterMenu}>
          <FilterIcon />
          Filter
          <TriangleIcon clicked={filterMenuShown} />
          <GoalFilterMenu />
        </button>
      </div>
    </div>
  );
};

export default GoalFilterAndSorting;
