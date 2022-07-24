import { Fragment } from "react";
import "./GoalAddInfo.css";
import ProgressBar from "../ProgressBar";
import GoalSavingStats from "../GoalSavingStats";
import LineIcon from "../Icons/LineIcon";
import CircleIcon from "../Icons/CircleIcon";

/**
 * This component will show additional information about the goal.
 */
const GoalAddInfo = (props) => {
  return (
    <div className={"add-info-container"}>
      <div className={"subgoals-edit"}>
        <div className={"subgoals"}>
          {props.subgoals.map((subgoal) => (
            <Fragment key={Math.random()}>
              <h2 className={"subgoal-name"}>{subgoal.name}</h2>
              <ProgressBar
                progress={(subgoal.savedAmount / subgoal.goalAmount) * 100}
                savedAmount={subgoal.savedAmount}
                goalAmount={subgoal.goalAmount}
                barType={"goal-card-small"}
                barFill={"#B385C9"}
              />
            </Fragment>
          ))}
        </div>
        <div className={"edit"}>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider">
              <LineIcon svgStyle={"option-on"} />
              <CircleIcon svgStyle={"option-off"} />
            </span>
          </label>
          <button className={"edit-btn"}>
            <p>Edit</p>
          </button>
        </div>
      </div>
      <GoalSavingStats savingsHistory={props.savingsHistory} />
    </div>
  );
};

export default GoalAddInfo;
