import { createReducer } from '@reduxjs/toolkit';
import { changeEyesRotation } from './actions';

export const eyesRotation = createReducer(
  {},
  {
    [changeEyesRotation]: (_, { payload }) => payload,
  },
);
