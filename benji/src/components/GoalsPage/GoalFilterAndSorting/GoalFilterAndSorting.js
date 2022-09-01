import "./GoalFilterAndSorting.css";
import SortIcon from "../../Icons/SortIcon";
import TriangleIcon from "../../Icons/TriangleIcon";
import FilterIcon from "../../Icons/FilterIcon";
import GoalSortMenu from "../GoalSortMenu";
import { useDispatch, useSelector } from "react-redux";
import { goalSortActions } from "../../../store/goalSortSlice";
import { goalFilterActions } from "../../../store/goalFilterSlice";
import GoalFilterMenu from "../GoalFilterMenu";
import CloseIcon from "../../Icons/CloseIcon";

/**
 * This component renders buttons for sorting and filtering goals.
 */
const GoalFilterAndSorting = () => {
  const dispatch = useDispatch();
  const { sortMenuShown } = useSelector((state) => state.goalSort);
  const { filterOptions, filterMenuShown, appliedFilters } = useSelector(
    (state) => state.goalFilter
  );

  const displaySortingMenu = (event) => {
    event.stopPropagation();
    dispatch(goalSortActions.showSortMenu(null));
  };

  const displayFilterMenu = (event) => {
    event.stopPropagation();
    dispatch(goalFilterActions.showFilterMenu(null));
  };

  const clearFiltersByType = (filterType) => {
    dispatch(goalFilterActions.clearFilterType(filterType));
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
            onClick={() => clearFiltersByType(filterType)}
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
