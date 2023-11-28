const { createSlice } = require("@reduxjs/toolkit");
const { getDataTeachers } = require("./teachersOperation");

const teachersSlice = createSlice({
    name: 'teachers',
    initialState: {
        teachers: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataTeachers.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.teachers = payload;
            })
            .addMatcher(
                (action) =>
                    action.type.startsWith("teachers") && action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) =>
                    action.type.startsWith("teachers") && action.type.endsWith("/fulfilled"),
                (state) => {
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) =>
                    action.type.startsWith("teachers") && action.type.endsWith("/rejected"),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            );
    }
})

export default teachersSlice.reducer;