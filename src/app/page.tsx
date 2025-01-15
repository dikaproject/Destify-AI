import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopulerDestinations";
import AIFeatures from "@/components/AIFeatures";
import TravelCategories from "@/components/TravelCategories";
import CTASection from "@/components/CTASection";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PopularDestinations />
      <AIFeatures />
      <TravelCategories />
      <CTASection />
      <Footer />
    </div>
  );
}
