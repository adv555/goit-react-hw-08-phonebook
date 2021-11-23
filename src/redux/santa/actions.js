import { createAction } from '@reduxjs/toolkit';

const addMember = createAction('members/addMember');
const deleteMember = createAction('members/deleteMember');
export { addMember, deleteMember };
