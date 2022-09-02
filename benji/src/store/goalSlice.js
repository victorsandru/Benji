import dummyGoalData from "../components/DummyGoalData";
import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = {
  goals: dummyGoalData.map((goal) => ({ id: nanoid(), ...goal })),
};

const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    toggleGoalActive(state, action) {
      const goalId = action.payload;
      const goals = [...current(state.goals)];

      const targetGoal = goals.find((goal) => goal.id === goalId);
      const modifiedGoal = { ...targetGoal, active: !targetGoal.active };
      // Substitute old goal object with new goal object
      goals.splice(goals.indexOf(targetGoal), 1, modifiedGoal);

      state.goals = goals;
    },
  },
});

export default goalSlice.reducer;
export const goalActions = goalSlice.actions;
