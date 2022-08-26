import GoalSortFilterContext from "../../../store/goal-sort-filter-context";
import { useContext } from "react";
import "./ClickableOverlay.css";

/**
 * This component serves as a transparent overlay which closes
 * the dropdown menus when clicked.
 */
export default function ClickableOverlay(props) {
  const { sortMenuShown, showSortingMenu } = useContext(GoalSortFilterContext);

  return (
    <div
      className={"clickable-overlay"}
      style={{
        zIndex: sortMenuShown ? "4" : "-1",
      }}
      onClick={() => showSortingMenu(false)}
    >
      {props.children}
    </div>
  );
}
