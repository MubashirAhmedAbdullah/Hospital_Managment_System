import { AdminSidebar } from "@/Components/AdminSidebar";
import { SidebarProvider } from "@/Components/ui/sidebar";

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
        <AdminSidebar />
        <main className="">
          {children}
        </main>
    </SidebarProvider>
  )
}
