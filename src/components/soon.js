import {AiOutlineTwitter} from "react-icons/ai";
import {FaDiscord} from "react-icons/fa";

const Soon = () => {
    return (
            <div className="flex flex-col w-full justify-center items-center md:bg-black/50 bg-black/70">
                <div className="flex flex-col justify-center items-center -mt-40">
                <img src="../img/logo.png" className="w-80 h-auto"/>
                <h1 className="text-3xl font-bold font-museo text-white text-center px-5">Flying isn’t dangerous, crashing is what’s dangerous! </h1>
                <h1 className="text-5xl font-bold font-museo text-white md:pt-4 pt-5">Coming soon... </h1>    
                </div>            
                <div className="absolute flex bottom-5 font-museo text-2xl text-white">
                    <a href="">
                        <AiOutlineTwitter className="w-10 h-10 m-5 text-[#1d9bf0]"/>
                    </a>
                    <a href="">
                        <FaDiscord className="w-10 h-10 m-5 text-[#5865f2]"/>
                    </a>
                </div>
            </div>
    )
}
export default Soon;