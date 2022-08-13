import { useState, useRef } from "react";
import "./GoalCard.css";
import ProgressBar from "../ProgressBar";
import GoalAddInfo from "../GoalAddInfo";
import calculateGoalInfo from "../GoalInfoCalc";
import ChevronLeft from "../Icons/ChevronLeft";
import GoalInfo from "../GoalInfo";

/**
 * This component will show information about the goal.
 */
const GoalCard = (props) => {
  // Extract data received from props
  const { name, goalAmount, savedAmount, autosaveAmount, savingsHistory } =
    props.goalInfo;

  // Calculate goal current progress and the number of months left to reach the goal.
  const [progress, monthsLeft] = calculateGoalInfo(props.goalInfo);

  // Manage whether the goal card is expanded
  const goalCardRef = useRef(); // reference to the goal card
  const [expanded, setExpanded] = useState(false);

  // Expand goal card on click
  const expandGoalCard = () => {
    setExpanded((previousState) => !previousState);
  };

  return (
    <div
      className={`goal-card ${expanded && "goal-card-expanded"}`}
      ref={goalCardRef}
    >
      <div className={"goal-main-info-container"}>
        <div className={"goal-name-progress-container"}>
          <h2 className={"goal-name"}>{name}</h2>
          <ProgressBar
            progress={progress}
            savedAmount={savedAmount}
            goalAmount={goalAmount}
            barType={"goal-card-large"}
            barFill={"var(--gradient-1)"}
          />
        </div>
        <GoalInfo
          monthsLeft={monthsLeft}
          autosaveAmount={autosaveAmount}
          containerStyle={{ margin: "1.5rem auto" }}
          svgStyle={{ color: "rgba(156, 154, 154, 0.75)" }}
          highlightTextStyle={{ color: "#9E98CA" }}
          normalTextStyle={{ color: "rgba(156, 154, 154, 0.75)" }}
        />
        <button
          className={`goal-expand-btn ${
            expanded ? "goal-expand-btn-pressed" : ""
          }`}
        >
          <div className={"svg-container-chevron"} onClick={expandGoalCard}>
            <ChevronLeft />
          </div>
        </button>
      </div>
      <GoalAddInfo
        subgoals={props.goalInfo.subgoals}
        savingsHistory={savingsHistory}
      />
    </div>
  );
};

export default GoalCard;
