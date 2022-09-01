import "./GoalSortMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { goalSortActions } from "../../../store/goalSortSlice";
import AscendingSortIcon from "../../Icons/AscendingSortIcon";
import DescendingSortIcon from "../../Icons/DescendingSortIcon";

/**
 * This function will render the dropdown menu with goal sorting options.
 */
export default function GoalSortMenu() {
  const dispatch = useDispatch();
  const { sortOptions, sortMenuShown, selectedSortOption, sortAscending } =
    useSelector((state) => state.goalSort);

  const selectSortOption = (option) => {
    dispatch(goalSortActions.changeSortOption(option));
  };

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
      {Object.keys(sortOptions).map((option) => (
        <div
          key={Math.random()}
          onClick={() => selectSortOption(option)}
          className={`sort-option ${
            selectedSortOption === option ? "sort-option-selected" : ""
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
