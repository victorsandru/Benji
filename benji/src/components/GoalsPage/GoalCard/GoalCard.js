import { useState, useRef } from "react";
import "./GoalCard.css";
import ProgressBar from "../../ProgressBar";
import GoalAddInfo from "../GoalAddInfo";
import ChevronLeft from "../../Icons/ChevronLeft";
import GoalInfo from "../GoalInfo";

/**
 * This component will show information about the goal.
 */
const GoalCard = (props) => {
  // Extract data received from props
  const {
    name,
    goalAmount,
    savedAmount,
    autosaveAmount,
    savingsHistory,
    progress,
    monthsLeft,
  } = props.goalInfo;

  // Manage whether the goal card is expanded
  const goalCardRef = useRef(); // reference to the goal card
  const [expanded, setExpanded] = useState(false);

  // Expand goal card on click
  const expandGoalCard = () => {
    setExpanded((previousState) => !previousState);
  };

  const [goalActive, setGoalActive] = useState(props.goalInfo.active);

  const changeGoalActive = () => {
    setGoalActive((prevState) => !prevState);
  };

  const goalActiveClass = goalActive ? "active" : "inactive";

  return (
    <div
      className={`goal-card ${goalActiveClass} ${
        expanded && "goal-card-expanded"
      } `}
      ref={goalCardRef}
    >
      <div className={"goal-main-info-container"}>
        <div className={"goal-name-progress-container"}>
          <h2 className={"goal-name"}>{name}</h2>
          <ProgressBar
            progress={progress}
            savedAmount={savedAmount}
            goalAmount={goalAmount}
            barType={`goal-card-large ${goalActiveClass}`}
          />
        </div>
        <GoalInfo
          monthsLeft={monthsLeft}
          autosaveAmount={autosaveAmount}
          classes={`goal-page ${goalActive ? "active" : "inactive"}`}
        />
        <button
          className={`goal-expand-btn ${goalActiveClass} ${
            expanded ? "pressed" : ""
          }`}
        >
          <div className={"svg-container-chevron"} onClick={expandGoalCard}>
            <ChevronLeft />
          </div>
        </button>
      </div>
      <GoalAddInfo
        goalActive={goalActive}
        onGoalActiveChange={changeGoalActive}
        subgoals={props.goalInfo.subgoals}
        savingsHistory={savingsHistory}
      />
    </div>
  );
};

export default GoalCard;
