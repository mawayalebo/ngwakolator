import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../app/slices/job.slice";

export const store = configureStore({
    reducer:{
        job: jobReducer,
    }
});