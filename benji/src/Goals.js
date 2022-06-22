import styled, { createGlobalStyle } from "styled-components";
import "./Goals.css";
import TopNavigationBar from "./components/TopNavigationBar";
import Section from "./components/Section";
import SummaryCard from "./components/SummaryCard";
import AddGoalCard from "./components/AddGoalCard";
import { Fragment } from "react";

// Use styled-components to specify the sizes of two sections
const SmallerSection = styled(Section)`
  width: 70vw;
  height: 22vh;
`;

const LargerSection = styled(Section)`
  width: 70vw;
  height: 58vh;
  margin-top: 3rem;
`;

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
      <SmallerSection>
        <h1 className={"section-header"}>Your Goals</h1>
        <SummaryCard data={5} category={"active"} />
        <VerticalBar />
        <SummaryCard data={10} category={"completed"} />
        <VerticalBar />
        <SummaryCard data={1} category={"due today"} />
        <VerticalBar />
        <SummaryCard data={"37%"} category={"progress"} />
        <VerticalBar />
        <AddGoalCard />
      </SmallerSection>

      <LargerSection></LargerSection>
    </Fragment>
  );
}

export default Goals;
