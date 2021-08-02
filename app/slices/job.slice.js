import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs:[]
}

export const jobSlice = createSlice({
    name:"job",
    initialState,
    reducers:{
        addJob : (state, action) =>{
            state.jobs = [...state.jobs, action.payload]
        },
        removeJob : (state, action)=>{

        }
    }
});


export const { addJob, removeJob } = jobSlice.actions;

export const selectJobs = state => state.job.jobs;

export default jobSlice.reducer;


