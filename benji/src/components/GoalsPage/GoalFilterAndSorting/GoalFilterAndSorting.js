import "./GoalFilterAndSorting.css";
import SortIcon from "../../Icons/SortIcon";
import TriangleIcon from "../../Icons/TriangleIcon";
import FilterIcon from "../../Icons/FilterIcon";
import SortingMenu from "../../SortingMenu";
import { useContext } from "react";
import GoalSortingContext from "../../../store/goal-sorting-context";

/**
 * This component renders buttons for sorting and filtering goals.
 */
const GoalFilterAndSorting = () => {
  const { sortMenuShown, showSortingMenu } = useContext(GoalSortingContext);

  const displaySortingMenu = (event) => {
    event.stopPropagation();
    showSortingMenu();
  };

  return (
    <div className={"dashboard"}>
      <button className={"action-btn sort-btn"} onClick={displaySortingMenu}>
        <SortIcon />
        Sort
        <TriangleIcon clicked={sortMenuShown} />
        <SortingMenu />
      </button>
      <button className={"action-btn filter-btn"}>
        <FilterIcon />
        Filter
        <TriangleIcon />
      </button>
    </div>
  );
};

export default GoalFilterAndSorting;
