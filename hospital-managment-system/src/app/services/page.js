import { services } from "@/lib/data";
import { CalendarCheck, FileText, UserCheck, CreditCard, BarChart, ShieldCheck } from "lucide-react";



export default function Services() {
    return (
        <div className="min-h-screen py-20 px-6 md:px-20">
            {/* Page Header */}
            <div className="text-center mb-16">
                <h1 className="text-3xl md:text-5xl font-bold text-[#007BFF] mb-4">
                    Our Services
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Discover the complete suite of tools designed to optimize hospital operations and improve patient care.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-[#007BFF] mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600">{service.desc}</p>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
                <h2 className="text-2xl font-bold text-[#007BFF] mb-4">
                    Want to See It in Action?
                </h2>
                <p className="text-gray-600 mb-6">Request a free demo or start exploring our live dashboard today.</p>
                <button className="bg-[#007BFF] hover:bg-[#005FCC] text-white py-3 px-6 rounded-xl transition">
                    Request Demo
                </button>
            </div>
        </div>
    )
}