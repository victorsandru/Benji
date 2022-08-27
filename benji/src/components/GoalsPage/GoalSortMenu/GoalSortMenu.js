import "./GoalSortMenu.css";
import { useContext } from "react";
import GoalSortFilterContext from "../../../store/goal-sort-filter-context";
import AscendingSortIcon from "../../Icons/AscendingSortIcon";
import DescendingSortIcon from "../../Icons/DescendingSortIcon";

/**
 * This function will render the dropdown menu with goal sorting options.
 */
export default function GoalSortMenu() {
  const {
    sortOptions,
    sortMenuShown,
    sortOption,
    sortAscending,
    changeSortOption,
  } = useContext(GoalSortFilterContext);

  return (
    <div
      style={{
        opacity: sortMenuShown ? "1" : "0",
        zIndex: sortMenuShown ? "5" : "-1",
      }}
      className={"sorting-dropdown"}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      {Object.keys(sortOptions).map((option, index) => (
        <div
          key={index}
          onClick={() => changeSortOption(option)}
          className={`sort-option ${
            sortOption === option ? "sort-option-selected" : ""
          }`}
        >
          <p>{sortOptions[option]}</p>
          {sortAscending && <AscendingSortIcon />}
          {!sortAscending && <DescendingSortIcon />}
        </div>
      ))}
    </div>
  );
}
