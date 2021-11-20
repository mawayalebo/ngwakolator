import Image from 'next/image';

const Landing = () => {
    const year = new Date().getFullYear();
    const copyright = `© copyright ${year}`;
    return ( 
        <div className="flex flex-col justify-center bg-black h-screen w-screen">
            
            
            <div className="top-100 flex justify-center">
                <Image src='/logo.png' width={80} height={80}/>
            </div> 
            <div className="flex flex-col mt-5">
                <h2 className="text-white text-center">a ngwako technical entrprises build</h2>
                <p className="text-white text-center"> {copyright} </p>
            </div>
            
                        
             
        </div>
     );
}
 
export default Landing;