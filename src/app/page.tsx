import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "../components/testimonialCards";

import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructor";


export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

   <HeroSection/>
   <FeaturedCourses/>
   <WhyChooseUs/>
   <TestimonialCards/>
   <UpcomingWebinar/>
   <Instructors/>
  </main>
  );
}
