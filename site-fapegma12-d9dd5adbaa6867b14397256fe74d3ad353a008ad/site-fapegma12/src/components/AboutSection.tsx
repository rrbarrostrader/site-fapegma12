import { BookOpen, Users, Award, Target } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Ensino de Excelência", desc: "Corpo docente qualificado e metodologias inovadoras." },
  { icon: Users, title: "Comunidade Ativa", desc: "Rede de apoio entre alunos, professores e ex-alunos." },
  { icon: Award, title: "Reconhecimento MEC", desc: "Cursos reconhecidos e aprovados pelo MEC." },
  { icon: Target, title: "Foco no Mercado", desc: "Formação prática voltada para as demandas do mercado." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Sobre Nós</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Educação que transforma vidas
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O IAB FAPEGMA, localizado no Conjunto Vitória em Imperatriz, é referência em educação superior e técnica.
            Nossa missão é oferecer ensino acessível e de qualidade, formando profissionais preparados
            para os desafios do mundo contemporâneo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
