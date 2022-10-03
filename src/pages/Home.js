import Hero from "../components/Hero"
import Banner from "../components/Banner"
import NewArrival from "../components/NewArrival"
import Footer from "../components/Footer"
import Smfeature from "../components/Smfeature"
import Testimonial from "../components/Testimonial"
import Navbar from "../components/Navbar"
// import Followup from "../components/Followup"
// import Item from "../components/Item"

export default function Home() {
    return (
        <div className="">
            <Navbar/>
            <Hero />
            <Banner/>
            <NewArrival/>
            <Testimonial/>
            <Footer/>
            <Smfeature/>
        </div>
    )
}