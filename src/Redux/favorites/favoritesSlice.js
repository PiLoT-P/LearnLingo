const { createSlice } = require("@reduxjs/toolkit");

const favoritesSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: [],
        error: null,
    },
    reducers: {},
    
})

export default favoritesSlice.reducer;