import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    value: 0
}

const countSlice = createSlice({
    name: "count",
    initialState: initialValue,
    reducers: {
        increment: (state, action) => {
            state.value = state.value + action.payload;
        },
        decrement: (state, action) => {
            state.value = state.value - action.payload;
        },
        reset: (state, action) => {
            state.value = 0;
        }
    }
})

const initialState = {
    authenticated: false
}

const authSlice = createSlice({
    name: "authenticate",
    initialState,
    reducers: {
        login: (state) => {
            state.authenticated = !state.authenticated;
        },
        logout: (state) => {
            state.authenticated = false;
        }
    }
})

export const authReducer = authSlice.reducer;
export const countReducer = countSlice.reducer;

export const { login, logout } = authSlice.actions;

export const { increment, decrement, reset } = countSlice.actions;
