import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:4040';
// axios.defaults.baseURL = 'https://618a957134b4f400177c47b5.mockapi.io/api/v1';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  fetchContacts.pending();
  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    // fetchContacts.rejected(error);
  }
});

const addContact = createAsyncThunk('contacts/addContact', async contact => {
  addContact.pending();
  try {
    const { data } = await axios.post('/contacts', contact);

    return data;
  } catch (error) {
    console.log(error);
    // addContact.rejected(error);
  }
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  deleteContact.pending();
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error);
    // deleteContact.rejected(error);
  }
});

export { fetchContacts, addContact, deleteContact };
