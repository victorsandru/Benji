import "./GoalFilterAndSorting.css";
import SortIcon from "../../Icons/SortIcon";
import TriangleIcon from "../../Icons/TriangleIcon";
import FilterIcon from "../../Icons/FilterIcon";
import GoalSortingMenu from "../GoalSortingMenu";
import { useContext } from "react";
import GoalSortFilterContext from "../../../store/goal-sort-filter-context";

/**
 * This component renders buttons for sorting and filtering goals.
 */
const GoalFilterAndSorting = () => {
  const { sortMenuShown, showSortingMenu } = useContext(GoalSortFilterContext);

  const displaySortingMenu = (event) => {
    event.stopPropagation();
    showSortingMenu();
  };

  return (
    <div className={"dashboard"}>
      <div className={"applied-filters"}></div>
      <div className={"action-btn-container"}>
        <button className={"action-btn sort-btn"} onClick={displaySortingMenu}>
          <SortIcon />
          Sort
          <TriangleIcon clicked={sortMenuShown} />
          <GoalSortingMenu />
        </button>
        <button className={"action-btn filter-btn"}>
          <FilterIcon />
          Filter
          <TriangleIcon />
        </button>
      </div>
    </div>
  );
};

export default GoalFilterAndSorting;
