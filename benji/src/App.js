import "./App.css";
import BasePageLayout from "./components/UI/BasePageLayout";
import CalendarView from "./components/CalendarView";
import Section from "./components/UI/Section";
import styled from "styled-components";
import GoalSectionHomePage from "./components/GoalSectionHomePage";
import BudgetSectionHomePage from "./components/BudgetSectionHomePage/BudgetSectionHomePage";

// Wrap Calendar into div for positioning
const CalendarContainer = styled.div`
  padding: 0.25rem 1.25rem 0.75rem 1.75rem;
  height: 100%;
`;

// Customize styling for the header
const calendarHeaderStyle = {
  position: "absolute",
  width: "30%",
  top: "1.25rem",
  left: "1.5rem",
};

// Simple function for logging the date clicked on Calendar
const logDate = (date) => console.log(date);

// Styling of the Expenses section
const expensesSectionStyle = {
  width: "24vw",
  maxWidth: "31rem",
  margin: "0 0.75rem 0 0",
};

// Wrapper for Budget, Calendar and Goals sections
const SectionsContainer = styled.div`
  width: 60%;
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem 0 0.75rem;
`;

// Wrapper for Budget, Calendar and Goals sections
const CalendarGoalsContainer = styled.div`
  width: 100%;
  max-width: 70rem;
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
          <BudgetSectionHomePage />
          <CalendarGoalsContainer>
            <Section sectionStyle={calendarSectionStyle}>
              <h1 className={"section-header"} style={calendarHeaderStyle}>
                Calendar
              </h1>
              <CalendarContainer>
                <CalendarView onClickDay={logDate} />
              </CalendarContainer>
            </Section>
            <GoalSectionHomePage />
          </CalendarGoalsContainer>
        </SectionsContainer>
      </BasePageLayout>
    </div>
  );
}

export default App;
