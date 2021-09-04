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
        removeJob: (state, action)=>{
            const unWantedJob = action.payload;
            const newBasketJobs = state.jobs.filter((job)=>{
                return job.id !== unWantedJob
            });

            state.jobs = newBasketJobs;
        
        }
    }
});


export const { addJob, removeJob } = jobSlice.actions;

export const selectJobs = state => state.job.jobs;
export const selectJobsTotal = (state)=>{
    return state.job.jobs.reduce((total, job)=>{
        return total + job.price;
    }, 0);
};

export default jobSlice.reducer;


