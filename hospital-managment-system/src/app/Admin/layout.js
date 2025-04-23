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
} from "@/components/ui/sidebar";
import Image from "next/image";

const items = [
    {
        title: "Home",
        url: "#",
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
            <div className="flex min-h-screen bg-[#f0f4f8]">
                <Sidebar className="w-72 border-r bg-white shadow-md">
                    <SidebarContent className="p-6">
                        <SidebarGroup>
                            <SidebarGroupLabel className="text-xl font-bold text-[#007BFF] mb-6 gap-3 flex items-center">
                                <span><Image src={"/ChatGPT Image Apr 15, 2025, 04_05_09 PM.png"} height={100} width={50} alt="logo imagr" className="rounded-full" /></span> Mansoori HMS
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu className="space-y-2">
                                    {items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a
                                                    href={item.url}
                                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-[#E5F1FF] hover:text-[#007BFF] transition-all"
                                                >
                                                    <item.icon className="w-5 h-5" />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>

                {/* Main content area */}
                <div className="flex-1 p-8">{children}</div>
            </div>
        </SidebarProvider>
    );
}
