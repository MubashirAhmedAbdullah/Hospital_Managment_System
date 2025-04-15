import { Button, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoLogIn } from "react-icons/io5";


export default function Home() {
  return (
    <div>
      <div className="mx-10">
        <div className="flex item-center ">
          <div style={{width: "50%"}} className="border-2">
            <div>
              <p className="text-3xl/12 font-semibold text-center text-[#007BFF]"><p>Welcome to</p><p>Mansoori Hospital Management</p><p>A New Era of Healthcare Efficiency</p></p>
              <p className="text-gray-400 mt-5 text-center">Mansoori Hospital Management is a tech-driven solution designed to simplify hospital operations from patient records to doctor scheduling so your focus stays on what truly matters: patient care.</p>
              <div>
                <Button>Hello World</Button>
              </div>
            </div>
          </div>
          <div style={{width: "50%"}} className="border-2">

          </div>
        </div>
      </div>
    </div>
  );
}
