import { Fragment } from "react";
import styled from "styled-components";
import "./Goals.css";
import TopNavigationBar from "./components/TopNavigationBar";
import Section from "./components/Section";

const SmallerSection = styled(Section)`
  width: 75em;
  height: 15rem;
`;

const LargerSection = styled(Section)`
  width: 75em;
  height: 42rem;
  margin-top: 3rem;
`;

function Goals() {
  return (
    <Fragment>
      <TopNavigationBar />
      <SmallerSection>
        <h2>Goals</h2>
      </SmallerSection>
      <LargerSection>
        <h2>Summary</h2>
      </LargerSection>
    </Fragment>
  );
}

export default Goals;
