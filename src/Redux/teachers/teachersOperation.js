import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../firebase";
import { get, ref } from "firebase/database";

export const getDataTeachers = createAsyncThunk(
    'teachers/getData',
    async (_, thunkApi) => {
        try {
            console.log('thun');
            const teachersRef = ref(database)
            console.log('thun2', teachersRef);
            const snapshot = await get(teachersRef);
            console.log('thun3', snapshot);
            const teachersData = snapshot.val()

            console.log('dataTeach',teachersData);
            return teachersData;
        } catch (err) {
            console.error('Error fetching data:', err);
            return thunkApi.rejectWithValue(err.message);
        }
    }
)