import { useState , useEffect} from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../app/slices/job.slice";
const Job = ()=>{
    const dispatch = useDispatch();
    const [ jobs, setJobs ] = useState([]);
    const [ inputs, setInputs ] = useState({pages:"", copies:"", type:"copy"});

    //change display based on job type
    const checkType = (type)=>{
        if(type==="copy"){
            return "block"
        }
        if(type==="print"){
            return "block"
        }
        return "hidden"
    }

    const handleChange = (e)=>{
        
        setInputs({...inputs,[e.target.id]:e.target.value});
        
    }

    const addToJobs = (e)=>{
        e.preventDefault();
        if(inputs.type === "copy"){
            dispatch(addJob({pages: inputs.pages, type: inputs.type, copies: inputs.copies, price:((inputs.pages*2)*(inputs.copies))}))
        }
        if(inputs.type === "print"){
            dispatch(addJob({pages: inputs.pages, type: inputs.type, copies: inputs.copies, price:((inputs.pages*3)*(inputs.copies))}))
        }
        if(inputs.type === "scan"){
            dispatch(addJob({pages: inputs.pages, type: inputs.type, price:((inputs.pages*4))}))
        }
        if(inputs.type === "email" ){
            dispatch(addJob({pages: inputs.pages, type: inputs.type, price:((inputs.pages*4)+8)}))
        }
    }

    useEffect(()=>{
        
    },[]);
    return(
        <div className="">
            <div className="border-solid border-[purple] border-2 p-5 shadow-lg rounded-lg bg-white">
                <form >
                    <div className="">
                        <div className="flex align-center justify-between bg-[purple] p-2 text-white rounded-2xl m-2">
                            <label>Pages:</label>
                            <input  onChange={handleChange} id="pages" className="flex-grow" type="number" placeholder="number of pages"/>
                        </div>
                        <div className={`flex align-center justify-between bg-[purple] p-2 text-white rounded-2xl m-2 ${checkType(inputs.type)}`}>
                            <label>Copies:</label>
                            <input onChange={handleChange} id="copies" className="flex-grow" type="number" placeholder="number of copies"/>
                        </div>
                        <div className="flex align-center justify-between bg-[purple] p-2 rounded-2xl m-2">
                            <label className="text-white">Job Type</label>
                            <select className="flex-grow text-black" onChange={handleChange} id="type" value={inputs.type}>
                                <option value="copy">Copy</option>
                                <option value="print">Print</option>
                                <option value="scan">Scan</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={addToJobs}>Add Job</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Job;