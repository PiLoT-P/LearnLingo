import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUserFB } from 'service/getDataFromFirebase';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, thunkApi) => { 
    try {
        const userData = await registerUserFB(user);
        return userData;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, thunkApi) => {
      try { 

    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {

    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);