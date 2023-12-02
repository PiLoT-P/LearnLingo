import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, database } from "../../firebase";
import { get, push, ref, set } from "firebase/database";

export const getDataTeachers = createAsyncThunk(
    'teachers/getData',
    async (_, thunkApi) => {
        try {
            const teachersRef = ref(database)
            const snapshot = await get(teachersRef);
            const {teachers} = snapshot.val()

            return teachers;
        } catch (err) {
            console.error('Error fetching data:', err);
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export const addTeacherToFavorites = createAsyncThunk(
    'teachers/addToFavorites',
    async (teacher, thunkApi) => {
        const userId = auth.currentUser.uid;
        try {
            const favoritesRef = ref(database, `users/${userId}/favorites`);

            const newFavoriteRef = push(favoritesRef);
            await set(newFavoriteRef, teacher);

            return teacher;
        } catch (err) {
            console.error('Error fetching data:', err);
            return thunkApi.rejectWithValue(err.message);
        }
    }
)