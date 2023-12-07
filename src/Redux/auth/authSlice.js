const { createSlice } = require("@reduxjs/toolkit");
const { registerUser, loginUser, logoutUser } = require("./authOperation");


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isAuth: false,
        email: null,
        name: null,
        theme: null,
        isLoading: false,
        error: null,
    },
    reducers:{
        changeTheme: (state, {payload}) => {
            state.theme = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, {payload}) => {
                state.token = payload.token;
                state.name = payload.name;
                state.email = payload.email;
                state.isAuth = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.name = payload.name;
                state.email = payload.email;
                state.isAuth = true;
            })
            .addCase(logoutUser.fulfilled, (state, { payload }) => {
                return {
                    token: null,
                    isAuth: false,
                    email: null,
                    name: null,
                    isLoading: false,
                    error: null,
                }
            })
            .addMatcher(
                (action) =>
                    action.type.startsWith("auth") && action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) =>
                    action.type.startsWith("auth") && action.type.endsWith("/fulfilled"),
                (state) => {
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) =>
                    action.type.startsWith("auth") && action.type.endsWith("/rejected"),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            );
    }
})


export const { changeTheme } = authSlice.actions;
export default authSlice.reducer;