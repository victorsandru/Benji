import { useDispatch, useSelector } from "react-redux";
import { goalSortActions } from "../../../store/goalSortSlice";
import { goalFilterActions } from "../../../store/goalFilterSlice";
import "./ClickableOverlay.css";

/**
 * This component serves as a transparent overlay which closes
 * the dropdown menus when clicked.
 */
export default function ClickableOverlay(props) {
  const dispatch = useDispatch();
  const { sortMenuShown } = useSelector((state) => state.goalSort);

  const { filterMenuShown } = useSelector((state) => state.goalFilter);

  const onClickOverlay = () => {
    dispatch(goalSortActions.showSortMenu(false));
    dispatch(goalFilterActions.showFilterMenu(false));
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
