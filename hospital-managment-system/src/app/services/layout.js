import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";




export default function ServicesLayout ({children}){
    return (
        <section>
            <Navbar />
            {children}
            <Footer />
        </section>
    )
}