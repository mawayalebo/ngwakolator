import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectJobs } from "../app/slices/job.slice";

const Jobs = () => {
    useEffect(()=>{
          
    },[]);

    const jobs = useSelector(selectJobs);

    useEffect(()=>{
          console.log("something jobs");
          console.log(jobs);
    },[jobs]);

    return ( 
        <div>
            {
                jobs.length > 0 && 
                <div>
                    <h1>Job List</h1>
                    {
                        jobs.map((job, index)=>{
                            return(
                                <div key={index}>
                                    <h3>{index + 1}. {job.type}: {job.price}</h3>
                                </div>
                            )
                            
                        })
                    }
                </div>
            }
        </div>
     );
}
 
export default Jobs;
