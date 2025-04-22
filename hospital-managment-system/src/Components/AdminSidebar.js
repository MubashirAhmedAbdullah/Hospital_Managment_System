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

import {
    MdHome,
    MdPeople,
    MdCalendarToday,
    MdSearch,
    MdSettings,
} from "react-icons/md";

const items = [
    {
        title: "Dashboard",
        url: "/Admin/Dashboard",
        icon: MdHome,
    },
    {
        title: "Patients",
        url: "/Admin/Patient",
        icon: MdPeople,
    },
    {
        title: "Doctors",
        url: "#",
        icon: MdCalendarToday,
    },
    {
        title: "Appointments",
        url: "#",
        icon: MdSearch,
    },
    {
        title: "Departments",
        url: "#",
        icon: MdSettings,
    },
];

export function AdminSidebar() {
    return (
        <SidebarProvider>
            <Sidebar className="w-64 border-r bg-white shadow-md min-h-screen">
                <SidebarContent className="px-4 py-5">
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-2xl font-bold text-[#007BFF] mb-6">
                            Mansoori HMS
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu className="space-y-2">
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title} className="text-base">
                                        <SidebarMenuButton asChild>
                                            <a
                                                href={item.url}
                                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F1FF] hover:text-[#007BFF] transition-all"
                                            >
                                                <item.icon className="h-5 w-5" />
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
        </SidebarProvider>
    );
}
