import CardHover from "@/components/CardHover"
import FeaturedCourses from "@/components/FeaturedCourses"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Instructor from "@/components/Instructor"
import Testimonial from "@/components/Testimonial"
import WhyChooseUs from "@/components/WhyChooseUs"



function page() {
  return (
   <main className="min-h-screen bg-black/[0.96]  text-white antialiased bg-grid-white/[0.02]">
    {/* <h1 className="text-2xl text-center"> Next.js</h1> */}
    <Hero/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <Testimonial/>
    <CardHover/>
    <Instructor/>
    <Footer/>
   </main>
  )
}

export default page
