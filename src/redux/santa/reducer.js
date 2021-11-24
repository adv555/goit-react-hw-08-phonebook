import { createReducer } from '@reduxjs/toolkit';
import { addMember, deleteMember } from 'redux/santa/actions';

const initialState = [
  { id: 1, name: 'Klause', email: 'email@mail.com', present: 'gift-1' },
  { id: 2, name: 'Simone', email: 'email2@mail.com', present: 'gift-2' },
  { id: 3, name: 'Jane', email: 'email3@mail.com', present: 'gift-3' },
  { id: 4, name: 'Oliver', email: 'email4@mail.com', present: 'gift-4' },
  { id: 5, name: 'Charlotte', email: 'email5@mail.com', present: 'gift-5' },
  { id: 6, name: 'James', email: 'email6@mail.com', present: 'gift-6' },
];

export const members = createReducer(initialState, {
  [addMember]: (state, { payload }) => [...state, payload],
  [deleteMember]: (state, { payload }) => state.filter(member => member.id !== payload),
});
