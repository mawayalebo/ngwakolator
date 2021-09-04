import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectJobs } from "../app/slices/job.slice";
import { selectJobsTotal } from "../app/slices/job.slice";
import { Close } from "@material-ui/icons"
import {removeJob}  from "../app/slices/job.slice";

const Jobs = () => {
    
    const jobs = useSelector(selectJobs);
    const jobsTotal = useSelector(selectJobsTotal);
    const dispatch = useDispatch();
    const deleteJob = (id) => {
        dispatch(removeJob(id));
    }

    return ( 
        <div className="absolute top-[80vh] w-full h-screen">
            { 
                jobs.length > 0 && 
                <div className="text-black px-12 flex space-x-3">
                    <span className="font-bold text-2xl">Jobs</span>
                    <span className="font-bold text-2xl">| Total: R{ jobsTotal }</span>
                </div>  
            }
            
            <div className="bg-black rounded-t-[60px] w-full h-screen">
                {
                    jobs.length > 0 && 
                    <div class="p-10 flex flex-col ">
                        {
                            jobs.map((job, index)=>{
                                return(
                                    <div className="bg-[whitesmoke] w-full flex items-center p-5 mb-1 justify-evenly" key={job.id}>
                                        <div className="bg-[grey] rounded-full text-black flex items-center justify-center border-black border-solid border-1 shadow-lg w-5 h-5">
                                            <span>{index + 1}</span>
                                        </div>
                                        <div className="flex space-x-3 items-center">
                                            <span>{job.type}</span>
                                            <span>R{job.price}</span>
                                        </div>
                                        <div onClick={ ()=> deleteJob(job.id) } class="bg-[grey] rounded-full text-black flex items-center justify-center border-black border-solid border-1 shadow-lg w-5 h-5 p-3 cursor-pointer">
                                            <Close/>
                                        </div>
                                    </div>
                                )
                                
                            })
                        }
                    </div>
                }
            </div>
            
        </div>
     );
}
 
export default Jobs;
