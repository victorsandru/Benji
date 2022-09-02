import "./GoalInfo.css";
import CalendarIcon from "../../Icons/CalendarIcon";
import RepeatIcon from "../../Icons/RepeatIcon";

/**
 * This component displays how many months are left
 * to reach the goal and the autosave amount.
 *
 * Accepts goal information and CSS classes as props.
 */
export default function GoalInfo(props) {
  return (
    <div className={`goal-months-autosave-container ${props.classes}`}>
      <div className={"text-container"}>
        <div className={`svg-container-calendar-repeat ${props.classes}`}>
          <CalendarIcon />
        </div>
        <p
          className={`text-highlight ${props.classes}`}
        >{`${props.monthsLeft} months left`}</p>
        <p className={`text-normal ${props.classes}`}>to reach the goal</p>
      </div>
      <div className={"text-container"}>
        <div className={`svg-container-calendar-repeat ${props.classes}`}>
          <RepeatIcon />
        </div>
        <p className={`text-highlight ${props.classes}`}>Autosave amount:</p>
        <p
          className={`text-normal ${props.classes}`}
        >{`$${props.autosaveAmount.toLocaleString("en-US")}`}</p>
      </div>
    </div>
  );
}
