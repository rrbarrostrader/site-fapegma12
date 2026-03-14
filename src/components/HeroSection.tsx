import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Imagem de Fundo com Camadas de Cor */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCampus} 
          alt="Campus IAB FAPEGMA" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-medium mb-6">
            ✨ Matrículas Abertas 2026
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme seu futuro com o <span className="text-accent">IAB FAPEGMA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
            Ensino de qualidade no Conjunto Vitória em Imperatriz - MA. Graduação, Especialização e Cursos Técnicos para impulsionar sua carreira.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="#inscricao">
                Inscreva-se Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            
            <Button variant="whatsApp" size="lg" className="text-white border-white hover:bg-white/10" asChild>
              <a href="https://wa.me/5599981355292" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
          
          {/* Estatísticas */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-sm text-white/60">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">2.000+</div>
              <div className="text-sm text-white/60">Alunos Formados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-white/60">Cursos Disponíveis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;