import { createReducer } from '@reduxjs/toolkit';
import { addMember, deleteMember } from 'redux/santa/actions';

const initialState = [
  { id: 1, name: 'Klause', email: 'email@mail.ru', present: 'gift' },
  { id: 2, name: 'Klause12', email: 'email2@mail.ru', present: 'gift2' },
  { id: 3, name: 'Klause3', email: 'email3@mail.ru', present: 'gift3' },
  { id: 4, name: 'Klause4', email: 'email4@mail.ru', present: 'gift4' },
];

export const members = createReducer(initialState, {
  [addMember]: (state, { payload }) => [...state, payload],
  [deleteMember]: (state, { payload }) => state.filter(member => member.id !== payload),
});
