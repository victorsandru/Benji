/*
 * This component will show information about the goal.
 */
import styled from "styled-components";
import "./GoalCard.css";

const SavedAmount = styled.p`
  font-weight: 800;
  font-size: 20px;
  color: #ffffff;
  display: block;
  margin: auto 0.5rem;
`;

const TotalAmount = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  margin: auto 0.5rem;

  color: #9c9a9a;
`;

const GoalCard = (props) => {
  // Calculate progress in % to dynamically change the width of the progress bar
  let progress = (props.goalInfo.savedAmount / props.goalInfo.goalAmount) * 100;

  return (
    <div className={"goal-card"}>
      <h2 className={"goal-name"}>{props.goalInfo.name}</h2>
      <div className={"progress-container"}>
        <div className={"progress-bar-bg"}>
          <div
            className={"progress-bar"}
            style={{
              minWidth: "5%",
              width: `${progress}%`,
            }}
          >
            <SavedAmount>{`$${props.goalInfo.savedAmount.toLocaleString(
              "en-US"
            )}`}</SavedAmount>
          </div>
        </div>
        <TotalAmount>{`$${props.goalInfo.goalAmount.toLocaleString(
          "en-US"
        )}`}</TotalAmount>
      </div>
    </div>
  );
};

export default GoalCard;
