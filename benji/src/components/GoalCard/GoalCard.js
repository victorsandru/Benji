/*
 * This component will show information about the goal.
 */

import { useState, useRef } from "react";
import "./GoalCard.css";
import ProgressBar from "../ProgressBar";
import GoalAddInfo from "../GoalAddInfo";

const GoalCard = (props) => {
  // Extract data received from props
  let { name, goalAmount, savedAmount, autosaveAmount, savingsHistory } =
    props.goalInfo;
  // Calculate progress in % to dynamically change the width of the progress bar
  let progress = (savedAmount / goalAmount) * 100;
  // Calculate how many months remain until reaching the goal
  let monthsLeft = Math.ceil((goalAmount - savedAmount) / autosaveAmount);

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
            key={Math.random()}
          />
        </div>
        <div className={"goal-months-autosave-container"}>
          <div className={"text-container"}>
            <div className={"svg-container-calendar-repeat"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className={"text-highlight"}>{`${monthsLeft} months left`}</p>
            <p className={"text-normal"}>to reach the goal</p>
          </div>
          <div className={"text-container"}>
            <div className={"svg-container-calendar-repeat"}>
              <svg
                width="24"
                height="24"
                viewBox="1 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3701 7.99993L13.8701 10.598V8.99993H6.88989V12.9999H4.88989V6.99993H13.8701V5.40186L18.3701 7.99993Z"
                  fill="currentColor"
                />
                <path
                  d="M10.1299 16.9999H19.1101V10.9999H17.1101V14.9999H10.1299V13.4019L5.62988 15.9999L10.1299 18.598V16.9999Z"
                  fill="currentColor"
                />
              </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
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
