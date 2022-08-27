import { useContext } from "react";
import GoalSortFilterContext from "../../../store/goal-sort-filter-context";
import "./GoalFilterMenu.css";
import CircleIcon from "../../Icons/CircleIcon";
import SquareIcon from "../../Icons/SquareIcon";
import CheckIcon from "../../Icons/CheckIcon";

/**
 * This function will render the dropdown menu with goal sorting options.
 */
export default function GoalFilterMenu() {
  const { filterMenuShown, filterOptions, appliedFilters, changeFilter } =
    useContext(GoalSortFilterContext);

  const selectFilterOption = (filterType) => {
    changeFilter(filterType);
  };

  return (
    <div
      style={{
        opacity: filterMenuShown ? "1" : "0",
        zIndex: filterMenuShown ? "5" : "-1",
      }}
      className={"filter-dropdown"}
    >
      {Object.keys(filterOptions).map((filterType, typeIndex) =>
        filterOptions[filterType].map((filterOption, optionIndex) => (
          <div
            className={`filter-option`}
            onClick={(event) => {
              event.stopPropagation();
              selectFilterOption(filterOption);
            }}
            key={`${typeIndex}${optionIndex}`}
          >
            <p>
              {filterType[0].toUpperCase() + filterType.slice(1).toLowerCase()}
            </p>
            <CircleIcon svgStyle={"circle-icon"} fillRule={"nonzero"} />
            <p>{Object.values(filterOption)[0]}</p>
            <SquareIcon classes={["square-icon"]} />
            {appliedFilters.includes(filterOption) && (
              <CheckIcon classes={["check-icon"]} />
            )}
          </div>
        ))
      )}
    </div>
  );
}
