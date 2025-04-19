


import Footer from "@/Components/footer";
import Navbar from "@/Components/navbar";




export default function AboutUSLayout ({children}){
    return (
        <section>
            <Navbar />
            {children}
            <Footer />
        </section>
    )
}