import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/logo.png";

const Header = ()=>{
    const router = useRouter();
    return(
        <div onClick={()=>router.push("/")} className="fixed w-full top-0 flex p-5 rounded-b-[60px] h-[30vh]  bg-black z-10 hover:cursor-pointer">
            {/* <div className="relative h-[50px] w-[50px]" >
                <Image src={logo} layout="fill"objectFit="contain"/>
            </div> */}
            <div>
                <span className="text-3xl text-white ">Ngwako</span>
                <span className="text-3xl text-yellow-400">lator</span>
            </div>
            
        </div>
    )
}
export default Header;