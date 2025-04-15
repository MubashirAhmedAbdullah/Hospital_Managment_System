import { Button, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoLogIn } from "react-icons/io5";


export default function Home() {
  return (
    <div>
      <div className="mx-10">
        <div className="flex item-center gap-5 my-12">
          <div style={{ width: "50%" }} className="">
            <div className="">
              <p className="text-4xl/12 font-bold text-center text-[#007BFF]">Welcome to <br />Mansoori Hospital Management <br /> A New Era of Healthcare Efficiency</p>
              <p className="text-gray-400 mt-5 text-center text-lg">Mansoori Hospital Management is a tech-driven solution designed to simplify hospital operations from patient records to doctor scheduling so your focus stays on what truly matters: patient care.</p>
              <div className="mt-12 flex items-center gap-10 justify-center">
                <Button style={{ background: "#007BFF", color: "#fff", height: "40px" }} className="text-white w-32 text-lg">Get Started</Button>
                <Button style={{ background: "#007BFF", color: "#fff", height: "40px" }} className="text-white w-32 text-lg">Learn More</Button>
              </div>
            </div>
          </div>
          <div style={{ width: "50%" }} className="relative">
            <Image src={"/ChatGPT Image Apr 15, 2025, 08_57_05 PM.png"} alt="Hero Image" fill={true} />

          </div>
        </div>

        <div>
          <section className="bg-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#007BFF] mb-6">
                About Mansoori Hospital Management
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
                Mansoori Hospital Management is a modern healthcare platform built to simplify and streamline hospital operations. Our system empowers hospitals with digital solutions for appointments, patient records, staff coordination, billing, and more — all in one secure and easy-to-use interface.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
                {/* Feature 1 */}
                <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-[#007BFF] mb-2">All-in-One Platform</h3>
                  <p className="text-gray-600">
                    Manage patients, doctors, and administrative workflows without switching between tools.
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-[#007BFF] mb-2">Fast & Secure</h3>
                  <p className="text-gray-600">
                    Built on modern technology to ensure quick access and top-level data protection.
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-[#007BFF] mb-2">Smart Automation</h3>
                  <p className="text-gray-600">
                    Automated scheduling, reminders, and reporting to boost hospital efficiency.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
