import { GraduationCap, BookOpen, PenTool, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: GraduationCap,
    title: "Graduação",
    description: "Cursos de bacharelado e licenciatura com formação completa.",
    courses: ["Administração", "Pedagogia","História", "Matemática", "Língua Portuguesa/Inglês/Espanhol"],
    color: "bg-primary",
    textColor: "text-white",
  },
  {
    icon: BookOpen,
    title: "Pós-graduação",
    description: "Especialize-se e destaque-se no mercado de trabalho.",
    courses: ["Educação Física", "Psicopedagogia", "ABA", "AEE", "Educação Infantil", "Gestão Escolar", "Nutrição Esportiva"],
    color: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: PenTool,
    title: "Cursos Técnicos",
    description: "Cursos técnicos profissionalizantes de curta duração.",
    courses: ["Enfermagem (Técnico)", "Técnico em Estética","Teologia"],
    color: "bg-navy-dark",
    textColor: "text-white",
  },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-[0.2em]">Nossos Cursos</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-4 mb-6">
            Encontre o curso ideal para você
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg">
            Oferecemos diversas modalidades de ensino para atender às suas necessidades e objetivos profissionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const CategoryIcon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group flex flex-col h-full bg-white rounded-2xl shadow-xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`${cat.color} p-8 flex flex-col items-center text-center`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 shadow-inner">
                    <CategoryIcon className={`w-8 h-8 ${cat.textColor}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${cat.textColor}`}>
                    {cat.title}
                  </h3>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed font-medium italic">
                    "{cat.description}"
                  </p>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {cat.courses.map((course) => (
                      <li key={course} className="flex items-start gap-3 group/item">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="text-foreground/90 font-semibold text-sm group-hover/item:text-primary transition-colors">
                          {course}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full border-2 border-primary/10 hover:border-accent hover:bg-accent hover:text-accent-foreground font-bold py-6 rounded-xl transition-all" asChild>
                    <a href="#inscricao">SAIBA MAIS</a>
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