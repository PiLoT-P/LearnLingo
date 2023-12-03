import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, database } from "../../firebase";
import { child, get, push, ref, remove, set } from "firebase/database";

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
            const favoritesRef = ref(database, `users/${userId}/favorites/${teacher.id}`);

            await set(favoritesRef, teacher);

            return teacher;
        } catch (err) {
            console.error('Error fetching data:', err);
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export const removeTeachersFromFavorites = createAsyncThunk(
    'teachers/removeFromFavorites',
    async (id, thunkApi) => {
        const userId = auth.currentUser.uid;
        try {
            const favoritesRef = ref(database, `users/${userId}/favorites`);

            await remove(child(favoritesRef, id));
            
            return id;
        } catch (err) {
            console.error('Error fetching data:', err);
            return thunkApi.rejectWithValue(err.message);
        }
    }
)

export const getAllTeachersFromFavorites = createAsyncThunk(
    'teachers/getAllFromFavorites',
    async (_, thunkApi) => {
        const userId = auth.currentUser.uid;
        try {
            const favoritesRef = ref(database, `users/${userId}/favorites`);

            const snapshot = await get(favoritesRef);
            
            const favoriteTeachers = [];
            snapshot.forEach((childSnapshot) => {
                favoriteTeachers.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
                });
            });

            return favoriteTeachers;
        } catch (err) {
            console.error('Error fetching data:', err);
            return thunkApi.rejectWithValue(err.message);
        }
    }
)