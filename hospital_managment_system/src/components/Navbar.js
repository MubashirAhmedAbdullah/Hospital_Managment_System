"use client"

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="mt-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-44">
                        <div className="flex-shrink-0">
                            <Link href={"/"}><Image src={"/logoImage.jpg"} height={100} width={190} alt="logo image" /></Link>
                        </div>

                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg">Home</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg">Doctors</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg">Articles</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg">Appointments</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg">About Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Link href={'/Auth/Login'}>
                        <Button
                            variant="outline"
                            className="text-white w-24 h-10 text-lg bg-blue-600 hover:bg-blue-500 hover:text-white transition-transform duration-300 transform hover:scale-95"
                        >
                            Login
                        </Button>
                        </Link>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition-transform duration-300 transform hover:scale-95"
                        >
                            {isMenuOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Doctors</Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Articles</Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Appointments</Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
                    <Button
                        variant="outline"
                        className="text-white w-full h-10 bg-blue-600 hover:bg-blue-500 hover:text-white transition-transform duration-300 transform hover:scale-110 mt-2"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </nav>
    );
}
