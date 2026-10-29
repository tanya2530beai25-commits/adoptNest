import { createSlice } from "@reduxjs/toolkit";

// get saved favorites from localStorage
const saved = localStorage.getItem("favorites");

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: saved ? JSON.parse(saved) : [],   // array of animal ids
    reducers: {
        toggleFavorite(state, action) {
            const id = action.payload;
            if (state.includes(id)) {
                return state.filter((item) => item !== id);
            } else {
                state.push(id);
            }
        }
    }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
