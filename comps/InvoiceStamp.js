import { useState } from "react";

function InvoiceStamp() {
    const [stamps, setStamps] = useState([
        "/stamp1.png",
        "/stamp2.png",
        "/stamp3.png",
        "/stamp4.png",
        "/stamp5.png",
    ]);

    const [rotations, setRotations] = useState(["-rotate-12", "rotate-0", "rotate-12","rotate-45", "rotate-3","-rotate-12", "-rotate-3","-rotate-45" , "rotate-6", "-rotate-6"]);
    const [reflect, setReflect] = useState(["-", ""]);
    
    return ( 
        <div className="mt-24">
            <div className="flex w-full justify-end">
                <img src={stamps[Math.floor(Math.random() * stamps.length)]} 
                    alt="invoice stamp" 
                    className={rotations[Math.floor(Math.random() * rotations.length)]}
                    width={300} height={100}
                />
            </div>
        </div>
     );
}

export default InvoiceStamp;