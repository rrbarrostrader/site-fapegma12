import { GraduationCap, BookMarked, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: GraduationCap,
    title: "Graduação",
    description: "Cursos de bacharelado e licenciatura com formação completa.",
    courses: ["Administração", "Pedagogia", "Teologia", "História", "Língua Portuguesa/Inglês/Espanhol"],
    color: "bg-primary",
  },
  {
    icon: BookMarked,
    title: "Pós-graduação",
    description: "Especialize-se e destaque-se no mercado de trabalho.",
    courses: ["Psicopedagogia", "AEE", "ABA", "Educação Infantil", "Psicologia Clínica", "Gestão Escolar", "Educação Física Escolar", "Nutrição Esportiva"],
    color: "bg-accent",
  },
  {
    icon: Wrench,
    title: "Cursos Técnicos",
    description: "Cursos técnicos profissionalizantes de curta duração.",
    courses: ["Técnico em Estética", "Técnico em Enfermagem"],
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
          {categories.map((cat) => {
            // Definindo o ícone com letra maiúscula para o padrão React
            const CategoryIcon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all group"
              >
                <div className={`${cat.color} p-6`}>
                  <CategoryIcon className="w-10 h-10 text-primary-foreground mb-3" />
                  <h3 className="text-2xl font-bold text-primary-foreground">{cat.title}</h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">{cat.description}</p>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
                    {cat.courses.map((course) => (
                      <li key={course} className="flex items-start gap-2 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span className="text-xs md:text-sm leading-tight">{course}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full mt-6 group-hover:border-accent group-hover:text-accent transition-colors" asChild>
                    <a href="#inscricao">
                      Saiba Mais <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;