"use client"


import {
    Calendar,
    Home,
    Users,
    Stethoscope,
    CalendarCheck,
    Hospital,
    LogOut
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/Components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

const items = [
    {
        title: "Home",
        url: "/Admin/dashboard",
        icon: Home,
    },
    {
        title: "Patients",
        url: "/Admin/patientsRecord",
        icon: Users,
    },
    {
        title: "Doctors",
        url: "#",
        icon: Stethoscope,
    },
    {
        title: "Appionments",
        url: "#",
        icon: CalendarCheck,
    },
    {
        title: "Hospitals",
        url: "#",
        icon: Hospital,
    },
];

export default function AdminLayout({ children }) {
    return (
        <SidebarProvider>
            <div className="w-full flex bg-[#f0f4f8] min-h-screen">
                <Sidebar className="w-64 border-r bg-white shadow-md flex flex-col">
                    <SidebarContent className="p-2 pt-5 flex flex-col h-full justify-between">
                        {/* Top Content */}
                        <div>
                            <SidebarGroup>
                                <SidebarGroupLabel className="text-lg font-bold text-[#007BFF] mb-6 gap-3 flex items-center">
                                    <span>
                                        <Image
                                            src={"/ChatGPT Image Apr 15, 2025, 04_05_09 PM.png"}
                                            height={100}
                                            width={50}
                                            alt="logo"
                                            className="rounded-full"
                                        />
                                    </span>
                                    Mansoori HMS
                                </SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu className="space-y-2">
                                        {items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild>
                                                    <Link
                                                        href={item.url}
                                                        className="flex items-center gap-3 px-8 py-2 rounded-lg text-base font-medium text-gray-600 hover:bg-[#E5F1FF] hover:text-[#007BFF] transition-all"
                                                    >
                                                        <item.icon className="w-5 h-5" />
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </div>

                        {/* Logout Button at the Bottom */}
                        <div className="px-8 pb-6">
                            <button
                                className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-base font-medium text-gray-600 hover:bg-[#FFE5E5] hover:text-red-600 transition-all"
                                onClick={() => {
                                    // Replace with actual logout logic
                                    console.log("Logging out...");
                                }}
                            >
                                <LogOut className="w-5 h-5" />
                                Logout
                            </button>
                        </div>
                    </SidebarContent>
                </Sidebar>

                {/* Main content area */}
                <div className="flex-1 p-4">{children}</div>
            </div>
        </SidebarProvider>
    );
}
