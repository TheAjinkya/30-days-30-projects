import {createSlice} from "@reduxjs/toolkit";

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
export const { increment, decrement, reset } = countSlice.actions;

export default countSlice.reducer;