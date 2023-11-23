import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    mode: "light",
    main: "greeting"
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setMain: (state, action) => {
            state.main = action.payload;
        }
    }
});

export const { setMode, setMain } = authSlice.actions;
export default authSlice.reducer;