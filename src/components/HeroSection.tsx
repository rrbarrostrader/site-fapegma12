import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
      {/* Imagem de Fundo com Camadas de Cor */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCampus} 
          alt="Campus IAB FAPEGMA" 
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/25 text-accent border border-accent/40 text-sm font-bold mb-8 animate-in slide-in-from-left duration-500">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            MATRÍCULAS ABERTAS 2026
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] animate-in slide-in-from-left duration-700 delay-100">
            O futuro da sua carreira começa <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">aqui</span>.
          </h1>
          
          <p className="text-lg md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl font-medium animate-in slide-in-from-left duration-700 delay-200">
            Formação de excelência em Imperatriz - MA. Cursos reconhecidos pelo MEC para você se destacar no mercado de trabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-in slide-in-from-left duration-700 delay-300">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-bold px-10 h-16 shadow-2xl shadow-accent/20 hover:scale-105 transition-all" asChild>
              <a href="#inscricao">
                GARANTIR MINHA VAGA
                <ArrowRight className="w-6 h-6 ml-2" />
              </a>
            </Button>
            
            <Button variant="whatsapp" size="lg" className="text-lg font-bold px-10 h-16 shadow-2xl shadow-green-600/20 hover:scale-105 transition-all" asChild>
              <a href="https://wa.me/5599981355292" target="_blank" rel="noopener noreferrer">
                <Phone className="w-6 h-6 mr-2" />
                FALAR COM CONSULTOR
              </a>
            </Button>
          </div>
          
          {/* Prova Social Rápida */}
          <div className="mt-12 flex flex-wrap gap-6 animate-in slide-in-from-bottom duration-1000 delay-500">
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">Reconhecido pelo MEC</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">Aulas Presenciais</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">Suporte via WhatsApp</span>
            </div>
          </div>
          
          {/* Estatísticas */}
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-12 border-t border-white/10 pt-10 max-w-2xl animate-in fade-in duration-1000 delay-700">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">10+</div>
              <div className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-widest mt-1">Anos de História</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">2.000+</div>
              <div className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-widest mt-1">Alunos Formados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
              <div className="text-xs md:text-sm text-white/60 font-medium uppercase tracking-widest mt-1">Cursos Oferecidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
