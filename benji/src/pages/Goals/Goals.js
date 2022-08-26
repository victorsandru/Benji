import { GoalSortFilterContextProvider } from "../../store/goal-sort-filter-context";
import "./Goals.css";
import ClickableOverlay from "../../components/GoalsPage/ClickableOverlay";
import BasePageLayout from "../../components/UI/BasePageLayout";
import Section from "../../components/UI/Section";
import SummaryCard from "../../components/SummaryCard";
import AddGoalCard from "../../components/UI/AddGoalCard";
import GoalFilterAndSorting from "../../components/GoalsPage/GoalFilterAndSorting";
import GoalsList from "../../components/GoalsPage/GoalsList/GoalsList";

// Dummy goal data which is used to testing purposes
import dummyGoals from "../../components/DummyGoalData";
import calculateGoalInfo from "../../components/GoalInfoCalc";

// Calculate goal current progress and the number of months left to reach the goal
const goals = dummyGoals.map((goal) => {
  const [progress, monthsLeft] = calculateGoalInfo(goal);
  return {
    ...goal,
    progress,
    monthsLeft,
  };
});

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
  height: "67%",
};

/**
 * This component renders the page with goals.
 */
export default function Goals() {
  return (
    <GoalSortFilterContextProvider>
      <ClickableOverlay />
      <BasePageLayout
        classes={["main-content-wrapper"]}
        pageMinWidth={"66.5rem"}
      >
        <Section sectionStyle={summarySectionStyles}>
          <h1 className={"section-header"}>Your Goals</h1>
          <div className={"goals-summary-container"}>
            <SummaryCard data={5} category={"active"} />
            <div className={"goals-page--vertical-bar"} />
            <SummaryCard data={10} category={"completed"} />
            <div className={"goals-page--vertical-bar"} />
            <SummaryCard data={1} category={"due today"} />
            <div className={"goals-page--vertical-bar"} />
            <SummaryCard data={"37%"} category={"progress"} />
            <div className={"goals-page--vertical-bar"} />
            <AddGoalCard />
          </div>
        </Section>
        <Section sectionStyle={goalsListStyles}>
          <GoalFilterAndSorting />
          <div className={"goals-list-container"}>
            <GoalsList goals={goals} />
          </div>
        </Section>
      </BasePageLayout>
    </GoalSortFilterContextProvider>
  );
}
