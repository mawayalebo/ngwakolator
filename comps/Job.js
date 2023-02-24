import { useState , useEffect} from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../app/slices/job.slice";
import { useRouter } from 'next/router';
const Job = ()=>{
    const dispatch = useDispatch();
    const [ jobs, setJobs ] = useState([]);
    const [ inputs, setInputs ] = useState({pages:"", copies:"", type:"copy-black"});
    const router = useRouter()
    //change display based on job type
    const checkType = (type)=>{
        if(type==="copy-black" || type==="copy-colour"){
            return "block"
        }
        if(type==="print-black" || type==="print-colour"){
            return "block"
        }
        return "hidden"
    }
    
    const handleChange = (e)=>{
        
        setInputs({...inputs,[e.target.id]:e.target.value});
        
    }

    const addToJobs = (e)=>{
        e.preventDefault();
        const id = Math.random();
        if(inputs.type === "copy-black" && inputs.pages && inputs.copies){

            dispatch(addJob({id, pages: inputs.pages, type: inputs.type, copies: inputs.copies, price:((inputs.pages*2)*(inputs.copies)), uPrice:2}))
        }
        if(inputs.type === "print-black" && inputs.pages && inputs.copies){
            dispatch(addJob({id, pages: inputs.pages, type: inputs.type, copies: inputs.copies, price:((inputs.pages*3)*(inputs.copies)), uPrice:3}))
        }
        if(inputs.type === "scan" && inputs.pages){
            dispatch(addJob({id, pages: inputs.pages, type: inputs.type, price:((inputs.pages*4)), uPrice:4}))
        }
        if(inputs.type === "email+scan" && inputs.pages){
            dispatch(addJob({id, pages: inputs.pages, type: inputs.type, price:((inputs.pages*4)+8), uPrice:4}))
        }
        if(inputs.type === "copy-colour" && inputs.pages && inputs.copies){
            dispatch(addJob({id, pages: inputs.pages, type: inputs.type, copies: inputs.copies, price:((inputs.pages*5)*(inputs.copies)), uPrice:5}))
        }
        if(inputs.type === "print-colour" && inputs.pages && inputs.copies){
            dispatch(addJob({id, pages: inputs.pages, type: inputs.type, copies: inputs.copies, price:((inputs.pages*7)*(inputs.copies)), uPrice:7}))
        }
        if(inputs.type === "typing" && inputs.pages){
            dispatch(addJob({id, pages: inputs.pages, type: inputs.type, price:((inputs.pages*30)), uPrice:30}))
        }
        if(inputs.type === "lamination" && inputs.pages){
            dispatch(addJob({id, pages: inputs.pages, type: inputs.type, price:((inputs.pages*20)), uPrice:20}))
        }
        if(inputs.type === "email" && inputs.pages){
            dispatch(addJob({id, pages: inputs.pages, type: inputs.type, price:((inputs.pages*8)), uPrice:8}))
        }
    }

    return(
        <div className="fixed p-10 flex flex-col items-center justify-center left-[40vw] top-[10vh] z-10">
            
            <div className="border-solid border-[grey] border-2 p-5 shadow-xl shadow-black rounded-lg bg-white ">
                <form >
                    <div className="">
                        <label>Job Type</label>
                        <div className="flex align-center justify-between bg-[black] p-2 rounded-2xl m-2">
                            
                            <select className="flex-grow bg-transparent text-white focus:outline-none" onChange={handleChange} id="type" value={inputs.type}>
                                <option className="flex-shrink bg-[black]" value="copy-black">Copy in Black & White</option>
                                <option className="flex-shrink bg-[black]" value="print-black">Print in Black & White</option>
                                <option className="flex-shrink bg-[black]" value="copy-colour">Copy in Colour</option>
                                <option className="flex-shrink bg-[black]" value="print-colour">Print in Colour</option>
                                <option className="flex-shrink bg-[black]" value="scan">Scanning</option>
                                <option className="flex-shrink bg-[black]" value="typing">Typing</option>
                                <option className="flex-shrink bg-[black]" value="email+scan">Email + Scanning</option>
                                <option className="flex-shrink bg-[black]" value="email">Email only</option>
                                <option className="flex-shrink bg-[black]" value="lamination">Lamination</option>
                            </select>
                        </div>
                        <label>Pages</label>
                        <div className="flex align-center justify-between bg-[black] p-2 text-white rounded-2xl m-2 shadow-2xl">
                            
                            <input  onChange={handleChange} id="pages" className="flex-grow bg-transparent focus:outline-none" type="number" placeholder="number of pages" required/>
                        </div>
                        <label className={checkType(inputs.type)}>Copies</label>
                        <div className={`flex align-center justify-between bg-[black] p-2 text-white rounded-2xl m-2 ${checkType(inputs.type)}`}>
                            
                            <input onChange={handleChange} id="copies" className="flex-grow bg-transparent focus:outline-none" type="number" placeholder="number of copies" required/>
                        </div>
                        
                        <div className="flex mt-5">
                            <button className="p-2  w-full bg-black text-white shadow-lg border-solid border-[grey] border-1 active:scale-90" type="submit" onClick={addToJobs}>Add Job</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className=" py-1 grid grid-cols-2 gap-4">
                <div onClick={()=>router.push("/price")} className="rounded-full px-5 bg-blue-900 hover:cursor-pointer hover:transition hover:scale-125 duration-300 ease-out delay-200">
                    <span className="text-white whitespace-nowrap">price-list</span>
                </div>
                <div onClick={()=>router.push("/invoice")} className="rounded-full px-5 bg-yellow-400 hover:cursor-pointer hover:transition hover:scale-125 duration-300 ease-out delay-200">
                    <span className="text-black whitespace-nowrap">Invoice</span>
                </div>
                
            </div>
        </div>
    )
}

export default Job;