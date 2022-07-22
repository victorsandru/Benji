import "./App.css";
import BasePageLayout from "./components/UI/BasePageLayout";
import CalendarView from "./components/CalendarView";
import Section from "./components/UI/Section";
import styled from "styled-components";

// Wrap Calendar into div for positioning
const CalendarContainer = styled.div`
  padding: 0.25rem 1.25rem 0.75rem 1.75rem;
  height: 100%;
`;

// Customize styling for the header
const calendarHeaderStyle = {
  position: "absolute",
  width: "30%",
  padding: "4% 0 0 4%",
};

// Simple function for logging the date clicked on Calendar
const logDate = (date) => console.log(date);

// Styling of the Expenses section
const expensesSectionStyle = {
  width: "25vw",
  margin: "0 0.75rem 0 0",
};

// Wrapper for Budget, Calendar and Goals sections
const SectionsContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem 0 0.75rem;
`;

// Styling of the Budget section
const budgetSectionStyle = {
  height: "55%",
  marginBottom: "1.5rem",
};

// Wrapper for Budget, Calendar and Goals sections
const CalendarGoalsContainer = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styling the Calendar section
const calendarSectionStyle = {
  height: "100%",
  marginRight: "0.75rem",
};

// Styling the Goals section
const goalsSectionStyle = {
  height: "100%",
  width: "60%",
  marginLeft: "0.75rem",
};

function App() {
  // This array contains classes for the main-content wrapper
  const mainContentClasses = ["main-content"];

  return (
    <div className="App">
      <BasePageLayout classes={mainContentClasses}>
        <Section sectionStyle={expensesSectionStyle}>
          <h1 className={"section-header"}>Expenses</h1>
        </Section>
        <SectionsContainer>
          <Section sectionStyle={budgetSectionStyle}>
            <h1 className={"section-header"}>Budget</h1>
          </Section>
          <CalendarGoalsContainer>
            <Section sectionStyle={calendarSectionStyle}>
              <h1 className={"section-header"} style={calendarHeaderStyle}>
                Calendar
              </h1>
              <CalendarContainer>
                <CalendarView onClickDay={logDate} />
              </CalendarContainer>
            </Section>
            <Section sectionStyle={goalsSectionStyle}>
              <h1 className={"section-header"}>Goals</h1>
            </Section>
          </CalendarGoalsContainer>
        </SectionsContainer>
      </BasePageLayout>
    </div>
  );
}

export default App;
