import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  exercises: [],
  bodyPart: "all",
  search: "",
};

const gymSlice = createSlice({
  name: "gym",
  initialState: INITIAL_STATE,
  reducers: {
    setExercises(state, action) {
      state.exercises = action.payload;
    },
    setBodyPart(state, action) {
      state.bodyPart = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setExercises, setBodyPart, setSearch } = gymSlice.actions;
export const gymReducer = gymSlice.reducer;
