import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import LocationSection from "@/components/LocationSection";
import EnrollmentSection from "@/components/EnrollmentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <LocationSection />
        <EnrollmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;