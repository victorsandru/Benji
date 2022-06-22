import styled, { createGlobalStyle } from "styled-components";
import "./Goals.css";
import TopNavigationBar from "./components/TopNavigationBar";
import Section from "./components/Section";
import SummaryCard from "./components/SummaryCard";
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

function Goals() {
  return (
    <Fragment>
      <GlobalStyle />
      <TopNavigationBar />
      <SmallerSection>
        <h1 className={"section-header"}>Your Goals</h1>
        <br />
        <SummaryCard data={5} category={"active"} />
      </SmallerSection>

      <LargerSection></LargerSection>
    </Fragment>
  );
}

export default Goals;
