import { useState , useEffect} from "react";
const Job = ()=>{

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
        if(inputs.pages && inputs.type){
            setInputs({...inputs,[e.target.id]:e.target.value});
        }
    }

    const addToJobs = (e)=>{
        e.preventDefault();
        if(inputs.type === "copy"){
            setJobs([...jobs, {pages: inputs.pages, type: inputs.type, copies: inputs.copies, price:((inputs.pages*2)*(inputs.copies))}]);
        }
        if(inputs.type === "print"){
            setJobs([...jobs, {pages: inputs.pages, type: inputs.type, copies: inputs.copies, price:((inputs.pages*3)*(inputs.copies))}]);
        }
        if(inputs.type === "scan"){
            setJobs([...jobs, {pages: inputs.pages, type: inputs.type, price:((inputs.pages*4))}]);
        }
        if(inputs.type === "email" ){
            setJobs([...jobs, {pages: inputs.pages, type: inputs.type, price:((inputs.pages*4)+8)}]);
        }
    }

    useEffect(()=>{
        
        console.log(inputs);
        console.log(jobs);
    },[inputs, jobs]);
    return(
        <div className="mt-2 flex justify-center p-2">
            <div className="border-solid border-b-4 p-4">
                <form >
                    <div className="flex flex-col">
                        <div className="flex justify-between align-center">
                            <label>Pages</label>
                            <input  onChange={handleChange} id="pages" className="border-1 border-black border-solid" type="number" placeholder="number of pages"/>
                        </div>
                        <div className={`flex justify-between align-center ${checkType(inputs.type)}`}>
                            <label>Copies</label>
                            <input onChange={handleChange} id="copies" className="border-1 border-black border-solid" type="number" placeholder="number of copies"/>
                        </div>
                        <div className="flex justify-between align-center">
                            <label>Job Type</label>
                            <select onChange={handleChange} id="type" value={inputs.type}>
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