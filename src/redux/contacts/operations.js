import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  fetchContacts.pending();
  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const addContact = createAsyncThunk('contacts/addContact', async contact => {
  addContact.pending();
  try {
    const { data } = await axios.post('/contacts', contact);

    return data;
  } catch (error) {
    console.log(error);
  }
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  deleteContact.pending();
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

export { fetchContacts, addContact, deleteContact };
