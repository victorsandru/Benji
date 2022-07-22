/*
 * This component renders the page with goals.
 */

import { Fragment } from "react";
import styled from "styled-components";
import "./Goals.css";
import BasePageLayout from "../../components/UI/BasePageLayout";
import Section from "../../components/UI/Section";
import SummaryCard from "../../components/SummaryCard";
import AddGoalCard from "../../components/UI/AddGoalCard";
import GoalFilterAndSorting from "../../components/GoalFilterAndSorting";
import GoalCard from "../../components/GoalCard";

// This is a dummy goal data which is used to testing purposes
import dummyGoals from "../../components/DummyGoalData";

// Define CSS properties for different sections
const summarySectionStyles = {
  width: "80vw",
  minHeight: "17rem",
  height: "20%",
};

const goalsListStyles = {
  width: "80vw",
  height: "70%",
  maxHeight: "70%",
  marginTop: "2.25%",
};

// Create styling for internal divs
const GoalsSummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const GoalsListContainer = styled.div`
  height: 83%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`;

// Create vertical bar to separate summary cards
const VerticalBar = styled.div`
  width: 0;
  height: 7rem;
  margin: 1.25rem 2.5rem 0;
  border: 1px solid rgba(201, 201, 201, 0.9);
`;

function Goals() {
  return (
    <Fragment>
      <BasePageLayout>
        <div className={"main-content-wrapper"}>
          <Section sectionStyle={summarySectionStyles}>
            <h1 className={"section-header"}>Your Goals</h1>
            <GoalsSummaryContainer>
              <SummaryCard data={5} category={"active"} />
              <VerticalBar />
              <SummaryCard data={10} category={"completed"} />
              <VerticalBar />
              <SummaryCard data={1} category={"due today"} />
              <VerticalBar />
              <SummaryCard data={"37%"} category={"progress"} />
              <VerticalBar />
              <AddGoalCard />
            </GoalsSummaryContainer>
          </Section>
          <Section sectionStyle={goalsListStyles}>
            <GoalFilterAndSorting />
            <GoalsListContainer>
              {dummyGoals.map((goal) => (
                <GoalCard goalInfo={goal} key={Math.random()} />
              ))}
            </GoalsListContainer>
          </Section>
        </div>
      </BasePageLayout>
    </Fragment>
  );
}

export default Goals;
