import "./GoalSectionHomePage.css";
import "../UI/Section/Section.css";
import DummyGoalData from "../DummyGoalData";
import ProgressBar from "../ProgressBar";
import calculateGoalInfo from "../GoalInfoCalc";
import GoalInfo from "../GoalInfo";
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
          >
            <h2 className={"goal-name--home-page"}>{goal.name}</h2>
            <ProgressBar
              progress={progress}
              savedAmount={goal.savedAmount}
              goalAmount={goal.goalAmount}
              barType={"home-page"}
              barFill={"#FFFFFF"}
            />
            <GoalInfo
              monthsLeft={monthsLeft}
              autosaveAmount={goal.autosaveAmount}
              containerStyle={{ margin: "8% 0 0 6%" }}
              svgStyle={{ color: "#FFFFFF" }}
              highlightTextStyle={{ color: "#FFFFFF" }}
              normalTextStyle={{ color: "#2F2F2F" }}
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
