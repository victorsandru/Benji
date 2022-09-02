import { configureStore } from "@reduxjs/toolkit";
import goalSortReducer from "./goalSortSlice";
import goalFilterReducer from "./goalFilterSlice";
import goalSliceReducer from "./goalSlice";

const store = configureStore({
  reducer: {
    goals: goalSliceReducer,
    goalSort: goalSortReducer,
    goalFilter: goalFilterReducer,
  },
});

export default store;
