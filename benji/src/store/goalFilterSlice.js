import { createSlice, current } from "@reduxjs/toolkit";

const filterOptions = {
  date: [
    { today: "Today" },
    { tomorrow: "Tomorrow" },
    { thisWeek: "This week" },
    { thisMonth: "This month" },
    { thisYear: "This year" },
  ],
  status: [
    { complete: "Complete" },
    { incomplete: "Incomplete" },
    { active: "Active" },
    { inactive: "Inactive" },
  ],
};

const initialState = {
  filterOptions,
  filterMenuShown: false,
  appliedFilters: [],
};

const goalFilterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    showFilterMenu(state, action) {
      const hide = action.payload;

      if (hide !== null && hide !== undefined) {
        state.filterMenuShown = hide;
      } else {
        state.filterMenuShown = !state.filterMenuShown;
      }
    },

    changeFilter(state, action) {
      const appliedFilters = current(state.appliedFilters);
      const filter = action.payload;

      // Check if the filter has already been applied
      if (appliedFilters.includes(filter)) {
        // Filter out already added filter
        state.appliedFilters = appliedFilters.filter(
          (currentFilter) => currentFilter !== filter
        );
      } else {
        // Add new filter
        state.appliedFilters = [...appliedFilters, filter];
      }
    },

    clearFilterType(state, action) {
      const { filterOptions, appliedFilters } = current(state);
      const filterType = action.payload;

      state.appliedFilters = appliedFilters.filter(
        (filter) => !filterOptions[filterType].includes(filter)
      );
    },
  },
});

export default goalFilterSlice.reducer;
export const goalFilterActions = goalFilterSlice.actions;
