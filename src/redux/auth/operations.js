import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async newUserData => {
  try {
    const { data } = await axios.post('/users/signup', newUserData);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
const logIn = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  console.log(state);
  const persistedToken = state.auth.token;

  token.set(persistedToken);

  if (persistedToken === null) {
    // console.log('токена нет');
    return thunkAPI.rejectWithValue(5);
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export { register, logIn, logOut, fetchCurrentUser };
