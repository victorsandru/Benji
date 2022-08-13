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
  minWidth: "60rem",
  height: "30%",
  marginBottom: "2%",
};

const goalsListStyles = {
  width: "80vw",
  minWidth: "60rem",
  height: "64%",
  maxHeight: "64%",
  paddingBottom: "1%",
};

// Create styling for internal divs
const GoalsSummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  height: 100%;
  padding: 1.5% 5% 0 5%;
  width: 90%;
`;

const GoalsListContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`;

// Create vertical bar to separate summary cards
const VerticalBar = styled.div`
  width: 0;
  min-height: 40%;
  max-height: 40%;
  margin: 1.25rem 2.5rem 0;
  border: 1px solid rgba(201, 201, 201, 0.9);
`;

function Goals() {
  return (
    <Fragment>
      <BasePageLayout classes={["main-content-wrapper"]}>
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
      </BasePageLayout>
    </Fragment>
  );
}

export default Goals;
