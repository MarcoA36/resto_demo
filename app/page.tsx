import HeroSection from "@/components/hero-section"
import OfferBanner from "@/components/offer-banner"
import PromotionsBanner from "@/components/promotions-banner"
import Specialties from "@/components/specialties"
import AboutSection from "@/components/about-section"
import WhyChooseUs from "@/components/why-choose-us"
import LocationHours from "@/components/location-hours"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import DemoBadge from "@/components/DemoBadge"

export default function Home() {
  return (
    <main className="w-full">
      <div id="home">
        <HeroSection />
      </div>
      <OfferBanner />
      <PromotionsBanner />
      <div id="especialidades">
        <Specialties />
      </div>
      <div id="nosotros">
        <AboutSection />
      </div>
      <WhyChooseUs />
      <div id="ubicacion">
        <LocationHours />
      </div>
      <CallToAction />
 
      <Footer />
    </main>
  )
}
