import { createSelector } from 'reselect';

const selectGymReducer = state => state.gym;

export const selectExercises = createSelector(
  [selectGymReducer],
  gym => gym.exercises
);

export const selectBodyPart = createSelector(
  [selectGymReducer],
  gym => gym.bodyPart
);

export const selectSearch = createSelector(
  [selectGymReducer],
  gym => gym.search
);
