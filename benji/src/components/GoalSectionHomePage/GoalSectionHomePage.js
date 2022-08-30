import "./GoalSectionHomePage.css";
import "../UI/Section/Section.css";
import DummyGoalData from "../DummyGoalData";
import ProgressBar from "../ProgressBar";
import calculateGoalInfo from "../GoalInfoCalc";
import GoalInfo from "../GoalsPage/GoalInfo";
import { useState } from "react";

/**
 * This component will render the elements for displaying Goals on the home page.
 *
 * Accepts the object with styles as a prop.
 * */
const GoalSectionHomePage = () => {
  // Change displayed goal based on selected index
  const [goalIndex, setGoalIndex] = useState(0);
  const changeGoalIndex = (goalIndex) => {
    setGoalIndex(goalIndex);
  };

  return (
    <div className={"goal-section--home-page"}>
      <h1 style={{ color: "white" }} className={"section-header"}>
        Goals
      </h1>
      {DummyGoalData.map((goal, index) => {
        const [progress, monthsLeft] = calculateGoalInfo(goal);
        return (
          <div
            className={"goal-info-container--home-page"}
            style={{ opacity: `${goalIndex === index ? "1" : "0"}` }}
            key={index}
          >
            <h2 className={"goal-name--home-page"}>{goal.name}</h2>
            <ProgressBar
              progress={progress}
              savedAmount={goal.savedAmount}
              goalAmount={goal.goalAmount}
              barType={"home-page"}
            />
            <GoalInfo
              monthsLeft={monthsLeft}
              autosaveAmount={goal.autosaveAmount}
              classes={"home-page"}
            />
          </div>
        );
      })}
      <div className={"goal-switching-btns"}>
        {DummyGoalData.map((_, index) => (
          <div
            className={"goal-switching-btn"}
            key={index}
            onClick={changeGoalIndex.bind(null, index)}
          >
            {goalIndex === index && (
              <div className={"goal-switching-selected"} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalSectionHomePage;
