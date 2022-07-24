import "./GoalInfo.css";
import CalendarIcon from "../Icons/CalendarIcon";
import RepeatIcon from "../Icons/RepeatIcon";

/**
 * This component displays how many months are left
 * to reach the goal and the autosave amount.
 *
 * Accepts goal information and element styles as props.
 */
export default function GoalInfo(props) {
  return (
    <div
      className={"goal-months-autosave-container"}
      style={props.containerStyle}
    >
      <div className={"text-container"}>
        <div className={"svg-container-calendar-repeat"} style={props.svgStyle}>
          <CalendarIcon />
        </div>
        <p
          className={"text-highlight"}
          style={props.highlightTextStyle}
        >{`${props.monthsLeft} months left`}</p>
        <p className={"text-normal"} style={props.normalTextStyle}>
          to reach the goal
        </p>
      </div>
      <div className={"text-container"}>
        <div className={"svg-container-calendar-repeat"} style={props.svgStyle}>
          <RepeatIcon />
        </div>
        <p className={"text-highlight"} style={props.highlightTextStyle}>
          Autosave amount:
        </p>
        <p
          className={"text-normal"}
          style={props.normalTextStyle}
        >{`$${props.autosaveAmount.toLocaleString("en-US")}`}</p>
      </div>
    </div>
  );
}
