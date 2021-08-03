import Image from "next/image";
import logo from "../public/logo.png";

const Header =()=>{
    return(
        <div className="flex justify-center mb-5 p-5 rounded-3xl align-center  bg-[purple]">
            <Image src={logo} width={50} height={50} className="object-contain"/>
            <span className="text-4xl text-white font-bold mx-5">Ngwakolator</span>
        </div>
    )
}
export default Header;