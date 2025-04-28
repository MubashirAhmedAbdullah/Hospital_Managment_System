
import {
  Home,
  CalendarPlus,
  CalendarCheck,
  ClipboardList,
  Stethoscope,
  Settings,
  LogOut,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"


const items = [
  {
    title: "Dashboard",
    url: "/patient/dashboard",
    icon: Home,
  },
  {
    title: "Book Appointment",
    url: "/patient/book-appointment",
    icon: CalendarPlus,
  },
  {
    title: "My Appointments",
    url: "/patient/my-appointments",
    icon: CalendarCheck,
  },
  {
    title: "Medical Records",
    url: "/patient/medical-records",
    icon: ClipboardList,
  },
  {
    title: "Doctors Directory",
    url: "/patient/doctors-directory",
    icon: Stethoscope,
  },
  {
    title: "Profile Settings",
    url: "/patient/profile",
    icon: Settings,
  },
];

export default function PatientLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="w-full flex bg-transparent min-h-screen">
        {/* Sidebar */}
        <Sidebar className="w-64 border-r bg-transparent shadow-md flex flex-col">
          <SidebarContent className="p-2 pt-5 flex flex-col h-full justify-between">
            {/* Sidebar Top */}
            <div>
              <SidebarGroup>
                <SidebarGroupLabel className="text-lg font-bold text-[#007BFF] mb-6 gap-3 flex items-center">
                  <span>
                    <Image
                      src="/ChatGPT Image Apr 15, 2025, 04_05_09 PM.png"
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

            {/* Sidebar Bottom - Logout Button */}
            <div className="px-8 pb-6">
              <button
                className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-base font-medium text-gray-600 hover:bg-[#FFE5E5] hover:text-red-600 transition-all"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="w-full bg-white shadow-md flex items-center justify-between px-8 py-6">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-[#007BFF]">Mansoori Hospital Management System</h1>
            </div>

            {/* User Profile Image */}
            <Link href="/patient/profile">
              {/* <Image
                src="/user-avatar.png" // <-- Make sure you have this image or change the path
                alt="User Profile"
                width={40}
                height={40}
                className="rounded-full cursor-pointer hover:opacity-80 transition"
              /> */}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

            </Link>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
