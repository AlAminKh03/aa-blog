import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "default",
  filter: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setSort, setFilter } = filterSlice.actions;
