import { createSlice } from "@reduxjs/toolkit";
import animalsData from "../animalsData";

// get saved animals from localStorage, otherwise use the starting data
const saved = localStorage.getItem("animals");

const animalsSlice = createSlice({
    name: "animals",
    initialState: saved ? JSON.parse(saved) : animalsData,
    reducers: {
        // add a new rescued animal to the list
        addAnimal(state, action) {
            state.unshift(action.payload);
        },

        // remove an animal using its id
        removeAnimal(state, action) {
            return state.filter((animal) => animal.id !== action.payload);
        }
    }
});

export const { addAnimal, removeAnimal } = animalsSlice.actions;
export default animalsSlice.reducer;
