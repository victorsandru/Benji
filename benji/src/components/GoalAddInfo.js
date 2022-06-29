/*
 * This component will show additional information about the goal.
 */

import { Fragment } from "react";
import "./GoalAddInfo.css";
import ProgressBar from "./ProgressBar";
import GoalSavingStats from "./GoalSavingStats";

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
                barType={"small"}
                barFill={"solid"}
              />
            </Fragment>
          ))}
        </div>
        <div className={"edit"}>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="option-on"
                fill="none"
                viewBox="-1 5 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 12H4"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="2 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"option-off"}
              >
                <path
                  fillRule={"evenodd"}
                  clipRule="evenodd"
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                  fill="currentColor"
                />
              </svg>
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
