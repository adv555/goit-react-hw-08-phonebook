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
  // register.pending();
  try {
    const { data } = await axios.post('/users/signup', newUserData);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    // register.rejected(error);
  }
});
const logIn = createAsyncThunk('auth/login', async userData => {
  // logIn.pending();
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    // console.log(error);
    logIn.rejected(error);
  }
});
const logOut = createAsyncThunk('auth/logout', async () => {
  // logOut.pending();
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
    // logOut.rejected(error);
  }
});

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  console.log(thunkAPI.getState());
  // fetchCurrentUser.pending();
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  console.log(persistedToken);

  token.set(persistedToken);

  if (persistedToken === null) {
    console.log('токена нет');
    return thunkAPI.rejectWithValue(5);
    // return state;
  }
  try {
    const { data } = await axios.get('/users/current');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    // fetchCurrentUser.rejected(error);
  }
});

export { register, logIn, logOut, fetchCurrentUser };
