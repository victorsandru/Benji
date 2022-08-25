import "./SortingMenu.css";
import { useContext } from "react";
import GoalSortingContext from "../../store/goal-sorting-context";
import AscendingSortIcon from "../Icons/AscendingSortIcon";
import DescendingSortIcon from "../Icons/DescendingSortIcon";

/**
 * This function will render the dropdown menu with sorting options.
 */
export default function SortingMenu() {
  const {
    sortMenuShown,
    sortOption,
    sortingOptions,
    sortAscending,
    changeSortOption,
  } = useContext(GoalSortingContext);

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
      {sortingOptions.map((option, index) => (
        <div
          key={index}
          onClick={() => changeSortOption(option)}
          className={`sort-option ${
            sortOption === option.toLowerCase() ? "sort-option-selected" : ""
          }`}
        >
          <p>{option}</p>
          {sortAscending && <AscendingSortIcon />}
          {!sortAscending && <DescendingSortIcon />}
        </div>
      ))}
    </div>
  );
}
