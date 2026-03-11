import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";


const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        
        <div className="absolute inset-0 bg-primary"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-medium mb-6">
            📚 Matrículas Abertas 2026
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Transforme seu futuro com o{" "}
            <span className="text-accent">IAB FAPEGMA</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
            Ensino de qualidade no Conjunto Vitória. Graduação, Especialização e Cursos Técnicos para impulsionar sua carreira.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#inscricao">
                Inscreva-se Agora
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/55981355292" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Fale pelo WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex gap-8 mt-12">
            {[
              { number: "10+", label: "Anos de Experiência" },
              { number: "2.000+", label: "Alunos Formados" },
              { number: "15+", label: "Cursos Disponíveis" },
            ].map((stat) => (
              <div key={stat.label} className="text-primary-foreground">
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.number}</div>
                <div className="text-xs md:text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
