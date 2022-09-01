import { configureStore } from "@reduxjs/toolkit";
import goalSortReducer from "./goalSortSlice";
import goalFilterReducer from "./goalFilterSlice";

const store = configureStore({
  reducer: {
    goalSort: goalSortReducer,
    goalFilter: goalFilterReducer,
  },
});

export default store;
