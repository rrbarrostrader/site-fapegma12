import { GraduationCap, BookMarked, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: GraduationCap,
    title: "Graduação",
    description: "Cursos de bacharelado e licenciatura com formação completa.",
    courses: ["Administração", "Pedagogia", "Direito", "Enfermagem", "Contabilidade"],
    color: "bg-primary",
  },
  {
    icon: BookMarked,
    title: "Especialização",
    description: "Pós-graduação lato sensu para aprofundar seus conhecimentos.",
    courses: ["MBA em Gestão", "Psicopedagogia", "Direito Público", "Gestão Hospitalar", "Docência Superior"],
    color: "bg-accent",
  },
  {
    icon: Wrench,
    title: "Técnico",
    description: "Cursos técnicos profissionalizantes de curta duração.",
    courses: ["Enfermagem", "Informática", "Segurança do Trabalho", "Radiologia", "Meio Ambiente"],
    color: "bg-navy-light",
  },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Nossos Cursos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Encontre o curso ideal para você
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos diversas modalidades de ensino para atender às suas necessidades e objetivos profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all group"
            >
              <div className={`${cat.color} p-6`}>
                <cat.icon className="w-10 h-10 text-primary-foreground mb-3" />
                <h3 className="text-2xl font-bold text-primary-foreground">{cat.title}</h3>
                <p className="text-primary-foreground/80 text-sm mt-1">{cat.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {cat.courses.map((course) => (
                    <li key={course} className="flex items-center gap-3 text-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm">{course}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6 group-hover:border-accent group-hover:text-accent transition-colors" asChild>
                  <a href="#inscricao">
                    Saiba Mais <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
