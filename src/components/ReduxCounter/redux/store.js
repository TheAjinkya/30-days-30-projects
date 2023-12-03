import { configureStore } from "@reduxjs/toolkit";
import {countReducer} from "./countSlice"
import { authReducer } from "./countSlice"

export const store = configureStore({
  reducer: { count: countReducer, auth: authReducer },
})

