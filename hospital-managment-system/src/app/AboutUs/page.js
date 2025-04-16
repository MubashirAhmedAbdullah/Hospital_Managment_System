import Image from "next/image";
import { values } from "@/lib/data";



export default function AboutUs() {
    return (
        <div className="min-h-screen px-6 md:px-20 py-20 text-gray-800 font-sans">
            {/* Hero Section */}
            <section className="text-center mb-20">
                <h1 className="text-3xl font-extrabold text-[#007BFF] mb-4 leading-tight">
                    Empowering Hospitals Through Smart Technology
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
                    We are on a mission to revolutionize healthcare operations with intelligent, secure, and user-friendly software that makes hospital life easier.
                </p>
            </section>

            {/* Our Story */}
            <section className="max-w-5xl mx-auto mb-20">
                <div className="bg-white p-8">
                    <h2 className="text-3xl font-bold text-center text-[#007BFF] mb-4">Our Story</h2>
                    <p className="text-gray-700 text-lg leading-relaxed text-center">
                        Mansoori Hospital Management System was built to solve a real-world challenge — outdated, paper-heavy systems that slow down operations and compromise patient care.
                        <br /><br />
                        We developed a modern, secure, and comprehensive platform to empower hospitals and clinics to work faster, smarter, and more effectively.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-24">
                <div className="bg-[#E6F0FF] p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold text-[#007BFF] mb-3">🚀 Our Vision</h3>
                    <p className="text-gray-700 text-lg">
                        To become the global standard in digital hospital management — delivering care with confidence, speed, and clarity.
                    </p>
                </div>
                <div className="bg-[#E6F0FF] p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold text-[#007BFF] mb-3">🧠 Our Mission</h3>
                    <p className="text-gray-700 text-lg">
                        To simplify healthcare operations with intelligent tools that free up time, reduce errors, and enable better decisions.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="text-center mb-28">
                <h2 className="text-3xl font-bold text-[#007BFF] mb-10">Why Choose Us?</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex justify-center mb-3">{item.icon}</div>
                            <p className="text-[#007BFF] font-medium text-lg">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center mt-10">
                <h2 className="text-3xl font-extrabold text-[#007BFF] mb-4">
                    Join Us on the Journey to Smarter Healthcare
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                    Get in touch, schedule a live demo, or explore how Mansoori HMS can work for your hospital.
                </p>
                <button className="bg-[#007BFF] hover:bg-[#005FCC] text-white font-medium px-8 py-3 rounded-full transition duration-300 shadow-md">
                    Request a Demo
                </button>
            </section>
        </div>
    )
}