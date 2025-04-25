import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

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
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];

export default function AdminLayout({ children }) {
    return (
        <SidebarProvider>
            <div className="w-full flex bg-[#f0f4f8] min-h-screen">
                <Sidebar className="w-64 border-r bg-white shadow-md">
                    <SidebarContent className="p-2 pt-5">
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
                                </span>{" "}
                                Mansoori HMS
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu className="space-y-2">
                                    {items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <Link
                                                    href={item.url}
                                                    className="flex items-center gap-3 px-8 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-[#E5F1FF] hover:text-[#007BFF] transition-all"
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
                    </SidebarContent>
                </Sidebar>

                {/* Main content area */}
                <div className="flex-1 p-4">{children}</div>
            </div>
        </SidebarProvider>
    );
}
