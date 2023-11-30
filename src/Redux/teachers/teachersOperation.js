import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../firebase";
import { get, ref } from "firebase/database";

export const getDataTeachers = createAsyncThunk(
    'teachers/getData',
    async (_, thunkApi) => {
        try {
            const teachersRef = ref(database)
            const snapshot = await get(teachersRef);
            const teachersData = snapshot.val()

            return teachersData;
        } catch (err) {
            console.error('Error fetching data:', err);
            return thunkApi.rejectWithValue(err.message);
        }
    }
)