import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:4040';
axios.defaults.baseURL = 'https://618a957134b4f400177c47b5.mockapi.io/api/v1';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  fetchContacts.pending();
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    fetchContacts.rejected(error);
  }
});

const addContact = createAsyncThunk('contacts/addContact', async contact => {
  addContact.pending();
  try {
    const { data } = await axios.post('/contacts', contact);

    return data;
  } catch (error) {
    addContact.rejected(error);
  }
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  deleteContact.pending();
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    deleteContact.rejected(error);
  }
});

export { fetchContacts, addContact, deleteContact };

// witout createAsyncThunk

// import {
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
// } from 'redux/actions';

// const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     console.log(data);
//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };

// const addContact = (name, number) => async dispatch => {
//   const contact = {
//     name,
//     number,
//   };
//   dispatch(addContactRequest());
//   try {
//     const { data } = await axios.post('/contacts', contact);
//     console.log(data);
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

// const deleteContact = id => async dispatch => {
//   dispatch(deleteContactRequest());
//   try {
//     await axios.delete(`/contacts/${id}`);
//     dispatch(deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };
