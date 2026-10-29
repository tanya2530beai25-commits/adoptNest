import { createSlice } from "@reduxjs/toolkit";

// get saved requests from localStorage
const saved = localStorage.getItem("requests");

const requestsSlice = createSlice({
    name: "requests",
    initialState: saved ? JSON.parse(saved) : [],   // adoption requests
    reducers: {
        addRequest(state, action) {
            state.push(action.payload);
        },
        removeRequest(state, action) {
            return state.filter((req) => req.id !== action.payload);
        }
    }
});

export const { addRequest, removeRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
