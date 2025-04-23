import AdminRootLayout from "@/Components/AdminLayout";





export default function AdminLayout({children}){
    return(
        <div className="">
            <AdminRootLayout />
            {children}
        </div>
    )
}