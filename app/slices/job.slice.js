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
            const unWantedJob = state.jobs.findIndex((job)=>{
                return job.id == action.payload.id ;
            });

            const newJobs = [...state.jobs];

            if(unWantedJob >= 0){
                newJobs.splice(unWantedJob, 1);
            }

            state.Jobs = newJobs;

            /*const unWantedItem = action.payload.id;

            const newBasketItems = state.items.filter((item)=>{
                return item.id !== unWantedItem
            });

            state.items = newBasketItems;*/
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


