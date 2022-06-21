import styled, { createGlobalStyle } from "styled-components";
import "./Goals.css";
import TopNavigationBar from "./components/TopNavigationBar";
import Section from "./components/Section";
import { Fragment } from "react";

// Use styled-components to specify the sizes of two sections
const SmallerSection = styled(Section)`
  width: 70vw;
  height: 15rem;
`;

const LargerSection = styled(Section)`
  width: 70vw;
  height: 42rem;
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
        <h1>Goals</h1>
      </SmallerSection>
      <LargerSection>
        <h1>Summary</h1>
      </LargerSection>
    </Fragment>
  );
}

export default Goals;
