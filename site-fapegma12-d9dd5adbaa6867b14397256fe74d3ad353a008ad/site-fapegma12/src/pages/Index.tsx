import VideoSection from "@/components/VideoSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import LocationSection from "@/components/LocationSection";
import EnrollmentSection from "@/components/EnrollmentSection";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <VideoSection />
      <LocationSection />
      <EnrollmentSection />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contato via WhatsApp"
      >
        <Phone className="w-6 h-6 text-accent-foreground" />
      </a>
    </div>
  );
};

export default Index;
