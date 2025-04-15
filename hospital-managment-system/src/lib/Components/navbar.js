import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoLogIn } from "react-icons/io5";


export default function Navbar(){
    return(
        <nav className="w-full h-20 p-3 flex items-center justify-between">
                  <div><Link href={"/"}><Image src={"/ChatGPT Image Apr 15, 2025, 04_05_09 PM.png"} height={50} width={60} alt="image logo" className="rounded-full" /></Link></div>
                  <div>
                    <ul className="flex items-center gap-5">
                      <Link href={""}><li className="text-base font-semibold text-[#007BFF]">Home</li></Link>
                      <Link href={""}><li className="text-base font-semibold text-[#007BFF]">Services</li></Link>
                      <Link href={""}><li className="text-base font-semibold text-[#007BFF]">About us</li></Link>
                    </ul>
                  </div>
        
                  <div>
                    <Link href={""}>
                      <div className="flex items-center gap-3">
                        <p className="text-base font-semibold text-[#007BFF]">Login Now</p>
                        <IoLogIn size={35} style={{ color: "#007BFF" }} />
                      </div>
                    </Link>
                  </div>
        
                </nav>
    )
}