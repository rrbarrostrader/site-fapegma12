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
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-primary overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <LocationSection />
        <EnrollmentSection />
      </main>
      <Footer />

      {/* Floating WhatsApp Button Otimizado */}
      <a
        href="https://wa.me/5599981355292"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
        aria-label="Contato via WhatsApp"
      >
        <div className="hidden md:block bg-white text-primary-foreground font-bold px-4 py-2 rounded-full shadow-2xl border border-accent/20 group-hover:scale-105 transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
          Dúvidas? Fale Conosco!
        </div>
        <div className="w-16 h-16 bg-whatsapp text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce-slow border-4 border-white/20">
          <Phone className="w-8 h-8 fill-current" />
        </div>
      </a>
    </div>
  );
};

export default Index;
