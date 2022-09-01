import { useDispatch, useSelector } from "react-redux";
import { goalFilterActions } from "../../../store/goalFilterSlice";
import "./GoalFilterMenu.css";
import CircleIcon from "../../Icons/CircleIcon";
import CheckIcon from "../../Icons/CheckIcon";

/**
 * This function will render the dropdown menu with goal sorting options.
 */
export default function GoalFilterMenu() {
  const dispatch = useDispatch();

  const { filterMenuShown, filterOptions, appliedFilters } = useSelector(
    (state) => state.goalFilter
  );

  const selectFilter = (filter) => {
    dispatch(goalFilterActions.changeFilter(filter));
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
              selectFilter(filterOption);
            }}
            key={`${typeIndex}${optionIndex}`}
          >
            <p>
              {filterType[0].toUpperCase() + filterType.slice(1).toLowerCase()}
            </p>
            <CircleIcon svgStyle={"circle-icon"} fillRule={"nonzero"} />
            <p>{Object.values(filterOption)[0]}</p>
            <div className={"check-box"} />
            {appliedFilters.includes(filterOption) && (
              <CheckIcon classes={["check-icon"]} />
            )}
          </div>
        ))
      )}
    </div>
  );
}
