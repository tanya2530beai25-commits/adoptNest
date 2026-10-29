import { configureStore } from "@reduxjs/toolkit";
import animalsReducer from "./animalsSlice";
import favoritesReducer from "./favoritesSlice";
import requestsReducer from "./requestsSlice";

const store = configureStore({
    reducer: {
        animals: animalsReducer,
        favorites: favoritesReducer,
        requests: requestsReducer
    }
});

// save data in localStorage every time the store changes
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("animals", JSON.stringify(state.animals));
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
    localStorage.setItem("requests", JSON.stringify(state.requests));
});

export default store;
