const { createSlice } = require("@reduxjs/toolkit");
const { getDataTeachers, addTeacherToFavorites, removeTeachersFromFavorites, getAllTeachersFromFavorites } = require("./teachersOperation");

const teachersSlice = createSlice({
    name: 'teachers',
    initialState: {
        teachers: [],
        isLoading: false,
        filter: {
            language: null,
            level: null,
            price: null,
        },
        favorites: [],
        error: null,
    },
    reducers: {
        changeFilter: ({filter}, { payload }) => {
            const { language, level, price } = payload;
            filter.language = language;
            filter.level = level;
            filter.price = price;
        },
        cleanFavorites: (state, {payload}) => {
            state.favorites = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataTeachers.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.teachers = payload;
            })
            .addCase(addTeacherToFavorites.fulfilled, (state, { payload }) => {
                state.favorites.push(payload);
            })
            .addCase(removeTeachersFromFavorites.fulfilled, (state, { payload }) => {
                state.favorites = state.favorites.filter(favorite => favorite.id !== payload);
            })
            .addCase(getAllTeachersFromFavorites.fulfilled, (state, { payload }) => {
                state.favorites = payload;
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

export const { changeFilter,  cleanFavorites } = teachersSlice.actions;
export default teachersSlice.reducer;