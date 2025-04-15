import { features } from "@/lib/data";
import { Button, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoLogIn } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <div className="px-4 md:px-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 my-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold text-[#007BFF] leading-snug">
              Welcome to <br />
              Mansoori Hospital Management <br />
              A New Era of Healthcare Efficiency
            </p>
            <p className="text-gray-400 mt-5 text-lg">
              Mansoori Hospital Management is a tech-driven solution designed to simplify hospital operations from patient records to doctor scheduling so your focus stays on what truly matters: patient care.
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-10 justify-center md:justify-start">
              <Button
                style={{ background: "#007BFF", color: "#fff", height: "40px" }}
                className="w-full md:w-32 text-lg"
              >
                Get Started
              </Button>
              <Button
                style={{ background: "#007BFF", color: "#fff", height: "40px" }}
                className="w-full md:w-32 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative h-64 md:h-[400px]">
            <Image
              src="/ChatGPT Image Apr 15, 2025, 08_57_05 PM.png"
              alt="Hero Image"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* About Section */}
        <section className="bg-white py-20 px-6 md:px-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#007BFF] mb-6">
              About Mansoori Hospital Management
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
              Mansoori Hospital Management is a modern healthcare platform built to simplify and streamline hospital operations. Our system empowers hospitals with digital solutions for appointments, patient records, staff coordination, billing, and more — all in one secure and easy-to-use interface.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
              <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#007BFF] mb-2">
                  All-in-One Platform
                </h3>
                <p className="text-gray-600">
                  Manage patients, doctors, and administrative workflows without switching between tools.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#007BFF] mb-2">
                  Fast & Secure
                </h3>
                <p className="text-gray-600">
                  Built on modern technology to ensure quick access and top-level data protection.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-[#007BFF] mb-2">
                  Smart Automation
                </h3>
                <p className="text-gray-600">
                  Automated scheduling, reminders, and reporting to boost hospital efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 md:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#007BFF] mb-6">
              Why Choose Mansoori Hospital Management?
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              We provide powerful, easy-to-use tools to help you manage every aspect of your hospital — faster, smarter, and securely.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-center text-[#007BFF] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
