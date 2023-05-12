import { combineReducers } from "@reduxjs/toolkit";
import { gymReducer } from "./gym/gym-reducer";

export const rootReducer = combineReducers({
  gym: gymReducer,
});
