/*
 * This component renders the page with goals.
 */

import { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "./Goals.css";
import TopNavigationBar from "./components/TopNavigationBar";
import Section from "./components/Section";
import SummaryCard from "./components/SummaryCard";
import AddGoalCard from "./components/AddGoalCard";
import GoalFilterAndSorting from "./components/GoalFilterAndSorting";
import GoalCard from "./components/GoalCard";
import SideBar from "./components/SideBar";
import Gradient2 from "./components/Gradient2";

// This is a dummy goal data which is used to testing purposes
import dummyGoals from "./components/DummyGoalData";

// Create global style to apply gray background
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F5F5;
  }
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
      <GlobalStyle />
      <TopNavigationBar />
      <main>
        <SideBar />
        <div className={"sections"}>
          <Section sectionStyle={"summary-section"}>
            <h1 className={"section-header"}>Your Goals</h1>
            <div className={"goals-summary"}>
              <SummaryCard data={5} category={"active"} />
              <VerticalBar />
              <SummaryCard data={10} category={"completed"} />
              <VerticalBar />
              <SummaryCard data={1} category={"due today"} />
              <VerticalBar />
              <SummaryCard data={"37%"} category={"progress"} />
              <VerticalBar />
              <AddGoalCard />
            </div>
          </Section>
          <Section sectionStyle={"list-section"}>
            <GoalFilterAndSorting />
            <div className={"goals-list"}>
              {dummyGoals.map((goal) => (
                <GoalCard goalInfo={goal} key={Math.random()} />
              ))}
            </div>
          </Section>
        </div>
      </main>
      <svg>
        <defs>
          <Gradient2 />
        </defs>
      </svg>
    </Fragment>
  );
}

export default Goals;
