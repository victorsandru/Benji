import { useState, useRef } from "react";
import "./GoalCard.css";
import ProgressBar from "../ProgressBar";
import GoalAddInfo from "../GoalAddInfo";
import calculateGoalInfo from "../GoalInfoCalc";
import CalendarIcon from "../Icons/CalendarIcon";
import RepeatIcon from "../Icons/RepeatIcon";
import ChevronLeft from "../Icons/ChevronLeft";

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
            barType={"large"}
            barFill={"gradient"}
          />
        </div>
        <div className={"goal-months-autosave-container"}>
          <div className={"text-container"}>
            <div className={"svg-container-calendar-repeat"}>
              <CalendarIcon />
            </div>
            <p className={"text-highlight"}>{`${monthsLeft} months left`}</p>
            <p className={"text-normal"}>to reach the goal</p>
          </div>
          <div className={"text-container"}>
            <div className={"svg-container-calendar-repeat"}>
              <RepeatIcon />
            </div>
            <p className={"text-highlight"}>{`Autosave amount:`}</p>
            <p className={"text-normal"}>{`$${autosaveAmount.toLocaleString(
              "en-US"
            )}`}</p>
          </div>
        </div>
        <button
          className={`goal-expand-btn ${expanded && "goal-expand-btn-pressed"}`}
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
