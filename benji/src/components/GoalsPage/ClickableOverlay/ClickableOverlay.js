import GoalSortingContext from "../../../store/goal-sorting-context";
import { useContext } from "react";
import "./ClickableOverlay.css";

/**
 * This component serves as a transparent overlay which closes
 * the dropdown menus when clicked.
 */
export default function ClickableOverlay(props) {
  const { sortMenuShown, showSortingMenu } = useContext(GoalSortingContext);

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
