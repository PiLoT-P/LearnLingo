import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkApi) => { 
    try {
      const userFirebase = await createUserWithEmailAndPassword(auth, email, password);
      const userData = userFirebase.user;

      await updateProfile(userData, { displayName: name });

      return {
        token: userData.uid,
        name: userData.displayName,
        email: userData.email
      };
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ name, email, password }, thunkApi) => {
      try { 
        const userFirebase = await signInWithEmailAndPassword(auth, email, password);
        const userData = userFirebase.user;

        return {
          token: userData.uid,
          name: userData.displayName,
          email: userData.email
        };
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await signOut(auth).then(console.log('logout'));
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);