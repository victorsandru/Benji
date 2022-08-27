import GoalSortFilterContext from "../../../store/goal-sort-filter-context";
import { useContext } from "react";
import "./ClickableOverlay.css";

/**
 * This component serves as a transparent overlay which closes
 * the dropdown menus when clicked.
 */
export default function ClickableOverlay(props) {
  const { sortMenuShown, showSortingMenu, filterMenuShown, showFilterMenu } =
    useContext(GoalSortFilterContext);

  const onClickOverlay = () => {
    showSortingMenu(false);
    showFilterMenu(false);
  };

  return (
    <div
      className={"clickable-overlay"}
      style={{
        zIndex: sortMenuShown || filterMenuShown ? "4" : "-1",
      }}
      onClick={onClickOverlay}
    >
      {props.children}
    </div>
  );
}
