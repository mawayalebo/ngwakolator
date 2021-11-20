import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectJobs } from "../app/slices/job.slice";
import { selectJobsTotal } from "../app/slices/job.slice";
import {removeJob}  from "../app/slices/job.slice";
import { TrashIcon } from '@heroicons/react/solid';

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
                    <span className="font-bold text-2xl">Grand Total: R{ jobsTotal }</span>
                </div>  
            }
            
            <div className="bg-black rounded-t-[60px] w-full h-screen overflow-x-scroll">
                {
                    jobs.length > 0 && 
                    <div class="p-10 flex flex-col ">
                        {
                            jobs.map((job, index)=>{
                                return(
                                    <div className="bg-[whitesmoke] w-full flex items-center p-5 mb-1 justify-evenly" key={job.id}>
                                        <div className="absolute left-4 bg-[grey] rounded-full text-black flex items-center justify-center border-black border-solid border-1 shadow-lg w-5 h-5">
                                            <span>{index + 1}</span>
                                        </div>
                                        <div className=" relative flex flex-grow space-x-3 items-center justify-center rounded-xl">
                                            <span className="">{job.type}</span>
                                            <span className="">{job.pages? `Pages: ${job.pages}` : ''} </span>
                                            <span className="">{job.copies? `Copies: ${job.copies}` : ''} </span>
                                            <span className="">R{job.price}</span>
                                            <div onClick={ ()=> deleteJob(job.id) } class="absolute -right-4 -top-2 bg-red-600 rounded-full  flex items-center self-end cursor-pointer py-3 hover:scale-110">
                                            <TrashIcon className="text-white h-4 w-4 "/>
                                            </div>
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
