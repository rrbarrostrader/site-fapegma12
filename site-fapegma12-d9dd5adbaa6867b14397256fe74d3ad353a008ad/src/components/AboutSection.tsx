import { BookOpen, Users, Award, Target } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Ensino de Excelência", desc: "Corpo docente qualificado e metodologias inovadoras." },
  { icon: Users, title: "Comunidade Ativa", desc: "Rede de apoio entre alunos, professores e ex-alunos." },
  { icon: Award, title: "Reconhecimento MEC", desc: "Cursos reconhecidos e aprovados pelo MEC." },
  { icon: Target, title: "Foco no Mercado", desc: "Formação prática voltada para as demandas do mercado." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-br from-secondary via-white to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-[0.2em]">Sobre Nós</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-4 mb-6">
            Educação que transforma vidas
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed font-medium">
            O IAB FAPEGMA, localizado no Conjunto Vitória em Imperatriz, é referência em educação superior e técnica.
            Nossa missão é oferecer ensino acessível e de qualidade, formando profissionais preparados
            para os desafios do mundo contemporâneo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-accent font-bold" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
