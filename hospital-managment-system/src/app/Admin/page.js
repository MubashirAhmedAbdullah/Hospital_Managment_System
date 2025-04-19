import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider
  } from "@/components/ui/sidebar"
  
  import { Calendar, Home, Inbox, Search, Settings, Users, Activity, CheckCircle } from "lucide-react"
  
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
  ]
  
  export default function Admin() {
    return (
      <SidebarProvider>
        <div className="flex min-h-screen bg-[#f0f4f8]">
          <Sidebar className="w-64 border-r bg-white shadow-md">
            <SidebarContent className="p-5">
              <SidebarGroup>
                <SidebarGroupLabel className="text-2xl font-bold text-[#007BFF] mb-6">Mansoori HMS</SidebarGroupLabel>
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
  
          {/* Main Dashboard Content Area */}
          <main className="flex-1 p-10">
            <h1 className="text-3xl font-semibold text-[#007BFF] mb-6">Welcome to the Admin Panel</h1>
            <p className="text-muted-foreground text-base mb-10">
              Here you can manage hospital operations, monitor activities, and make real-time decisions efficiently.
            </p>
  
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
                <Users className="w-10 h-10 text-[#007BFF]" />
                <div>
                  <h2 className="text-lg font-semibold">1,250</h2>
                  <p className="text-sm text-muted-foreground">Patients</p>
                </div>
              </div>
  
              <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
                <Activity className="w-10 h-10 text-[#007BFF]" />
                <div>
                  <h2 className="text-lg font-semibold">78</h2>
                  <p className="text-sm text-muted-foreground">Active Doctors</p>
                </div>
              </div>
  
              <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4">
                <CheckCircle className="w-10 h-10 text-[#007BFF]" />
                <div>
                  <h2 className="text-lg font-semibold">320</h2>
                  <p className="text-sm text-muted-foreground">Appointments Today</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    )
  }
  