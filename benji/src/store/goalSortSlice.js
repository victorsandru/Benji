import { createSlice } from "@reduxjs/toolkit";

const sortOptions = {
  name: "Name",
  goalAmount: "Goal amount",
  savedAmount: "Saved amount",
  monthsLeft: "Months left",
  autosaveAmount: "Autosave amount",
};

const initialState = {
  sortOptions,
  sortMenuShown: false,
  selectedSortOption: undefined,
  sortAscending: undefined,
};

const goalSortSlice = createSlice({
  name: "goalSort",
  initialState,
  reducers: {
    showSortMenu(state, action) {
      const hide = action.payload;

      if (hide !== null && hide !== undefined) {
        state.sortMenuShown = hide;
      } else {
        state.sortMenuShown = !state.sortMenuShown;
      }
    },

    changeSortOption(state, action) {
      const option = action.payload;

      if (option !== state.selectedSortOption) {
        state.selectedSortOption = option;
        state.sortAscending = true;
      } else {
        state.sortAscending = !state.sortAscending;
      }
    },
  },
});

export default goalSortSlice.reducer;
export const goalSortActions = goalSortSlice.actions;
