import { Sidebar, SidebarContent, SidebarProvider } from "./ui/sidebar";


export function AdminSidebar() {
    return (
        <SidebarProvider>

            <Sidebar>
                <SidebarContent />
            </Sidebar>
        </SidebarProvider>
    )
}