import "./GoalMonthsLeft.css";
import CalendarIcon from "../Icons/CalendarIcon";

/**
 * This component displays how many months are left to reach the goal.
 * */
export default function GoalMonthsLeft(props) {
  // Determine colors of different elements based on props
  const svgStyles = {
    color: props.svgColor,
  };

  const textHighlightStyles = {
    color: props.highlightColor,
  };

  const normalTextStyles = {
    color: props.normalColor,
  };

  return (
    <div className={"text-container"}>
      <div className={"svg-container-calendar-repeat"} style={svgStyles}>
        <CalendarIcon />
      </div>
      <p
        className={"text-highlight"}
        style={textHighlightStyles}
      >{`${props.monthsLeft} months left`}</p>
      <p className={"text-normal"} style={normalTextStyles}>
        to reach the goal
      </p>
    </div>
  );
}
