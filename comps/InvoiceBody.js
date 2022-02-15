import { useSelector } from "react-redux";
import { selectJobs } from "../app/slices/job.slice";
const InvoiceBody = () => {
    const jobs = useSelector(selectJobs);
    return ( 
        <div className="border-t-black border-t-2 mt-5">
            {/* body header */}
            <div className="grid grid-cols-4 gap-4 border-b-black border-b-2">
                <span className="font-bold">Job Type</span>
                <span className="font-bold">Unit Price</span>
                <span className="font-bold">Quantity</span>
                <span className="font-bold">Total</span>
            </div>
            {
                jobs && jobs.map((job, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4">
                        <span>{job.type}</span>
                        <span>
                            {job.type === 'email+scan'? 'R4 (R8)': 'R'+job.uPrice}
                        </span>
                        <span>
                            {
                                job.pages && job.copies > 1 ? parseInt(job.pages) * parseInt(job.copies) : parseInt(job.pages)
                            }
                            {
                                job.pages && job.copies === false ? job.pages : null
                            }
                        </span>
                        <span className="font-bold">R{job.price}</span>
                        
                    </div>
                ))
            }
        </div>
     );
}
 
export default InvoiceBody;