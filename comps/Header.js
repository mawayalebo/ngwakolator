import Image from "next/image";
import logo from "../public/logo.png";

const Header = ()=>{
    return(
        <div className="fixed w-full top-0 flex p-5 rounded-b-[60px] h-[30vh] align-center  bg-black z-10">
            <div className="relative h-[50px] w-[50px]">
                <Image src={logo} layout="fill"objectFit="contain"/>
            </div>
            <div>
                <span className="text-3xl text-white mx-5">Ngwakolator</span>
            </div>
            
        </div>
    )
}
export default Header;