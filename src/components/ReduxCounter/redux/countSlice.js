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

const initialCart = { value: 0 };

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCart,
    reducers: {
        incrementCart: (state, action) => {
            state.value = state.value + action.payload
        },
        decrementCart: (state, action) => {
            state.value = state.value - action.payload
        },
        removeAll: (state, action) => {
            state.value = 0
        },
        toggleCart: (state, action) => {
            state.value = !state.value
        }
    }

})

export const cartReducer = cartSlice.reducer;
export const { incrementCart, decrementCart, toggleCart } = cartSlice.actions;

export const authReducer = authSlice.reducer;
export const countReducer = countSlice.reducer;

export const { login, logout } = authSlice.actions;

export const { increment, decrement, reset } = countSlice.actions;
