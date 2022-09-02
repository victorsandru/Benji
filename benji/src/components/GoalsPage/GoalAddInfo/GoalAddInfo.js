import { Fragment } from "react";
import "./GoalAddInfo.css";
import ProgressBar from "../../ProgressBar";
import GoalSavingStats from "../GoalSavingStats";
import LineIcon from "../../Icons/LineIcon";
import CircleIcon from "../../Icons/CircleIcon";
import { useDispatch } from "react-redux";
import { goalActions } from "../../../store/goalSlice";

/**
 * This component will show additional information about the goal.
 */
const GoalAddInfo = (props) => {
  const { active, subgoals, savingsHistory } = props.goalInfo;

  const dispatch = useDispatch();
  const changeGoalActive = () => {
    dispatch(goalActions.toggleGoalActive(props.goalInfo.id));
  };

  const goalActiveClass = active ? "active" : "inactive";

  return (
    <div className={"add-info-container"}>
      <div className={"subgoals-edit"}>
        <div className={"subgoals"}>
          {subgoals.map((subgoal) => (
            <Fragment key={Math.random()}>
              <h2 className={`subgoal-name ${goalActiveClass}`}>
                {subgoal.name}
              </h2>
              <ProgressBar
                progress={(subgoal.savedAmount / subgoal.goalAmount) * 100}
                savedAmount={subgoal.savedAmount}
                goalAmount={subgoal.goalAmount}
                barType={`goal-card-small ${goalActiveClass}`}
              />
            </Fragment>
          ))}
        </div>
        <div className={"edit"}>
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked={!active}
              onChange={changeGoalActive}
            />
            <span className="slider">
              <LineIcon svgStyle={"option-on"} />
              <CircleIcon svgStyle={"option-off"} />
            </span>
          </label>
          <button className={`edit-btn ${goalActiveClass}`}>
            <p>Edit</p>
          </button>
        </div>
      </div>
      <GoalSavingStats savingsHistory={savingsHistory} goalActive={active} />
    </div>
  );
};

export default GoalAddInfo;
