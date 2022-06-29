/*
 * This component shows currently selected filters for goal list.
 */

import "./GoalFilterAndSorting.css";
import TriangleIcon from "./Icons/TriangleIcon";

const GoalFilterAndSorting = () => {
  return (
    <div className={"dashboard"}>
      <button className={"action-btn sort-btn"}>
        <div className={"svg-container-sort"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="-1 -4 18 18"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4h12M3 6h9m-9 2h6m-6 2h5"
            />
          </svg>
        </div>
        Sort
        <TriangleIcon />
      </button>
      <button className={"action-btn filter-btn"}>
        <div className={"svg-container"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={"svg-icon-filter"}
            fill="none"
            viewBox="2 -1 22 22"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </div>
        Filter
        <TriangleIcon />
      </button>
    </div>
  );
};

export default GoalFilterAndSorting;
