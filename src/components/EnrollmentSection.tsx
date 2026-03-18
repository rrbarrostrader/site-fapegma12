import { Button } from "@/components/ui/button";
import { useState, ChangeEvent, FormEvent } from "react";
import { Phone } from "lucide-react";

const EnrollmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de me inscrever.\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nCurso: ${formData.course}`;
    window.open(`https://wa.me/5599981355292?text=${encodeURIComponent(message)}`, "_blank", "noopener noreferrer");
  };

  return (
    <section id="inscricao" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-accent" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Inscrição</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-4">
              Garanta sua vaga agora
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Preencha o formulário abaixo e entraremos em contato pelo WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-2xl space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nome Completo</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="(99) 90000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-foreground mb-1.5">Curso de Interesse</label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Selecione um curso</option>
                <optgroup label="Graduação">
                  <option value="Administração">Administração</option>
                  <option value="Teologia">Teologia</option>
                  <option value="Pedagogia">Pedagogia</option>
                  <option value="História">História</option>
                  <option value="Matemática">Matemática</option>
                  <option value="Língua Portuguesa/Inglês/Espanhol">Língua Portuguesa/Inglês/Espanhol</option>
                </optgroup>
                <optgroup label="Pós-graduação">
                  <option value="Educação Física">Educação Física</option>
                  <option value="Psicopedagogia">Psicopedagogia</option>
                  <option value="ABA">ABA</option>
                  <option value="AEE">AEE</option>
                  <option value="Educação Infantil">Educação Infantil</option>
                  <option value="Clínica">Clínica</option>
                  <option value="Gestão Escolar">Gestão Escolar</option>
                  <option value="Nutrição Esportiva">Nutrição Esportiva</option>
                </optgroup>
                <optgroup label="Técnico">
                  <option value="Enfermagem (Técnico)">Enfermagem (Técnico)</option>
                  <option value="Técnico em Estética">Técnico em Estética</option>
                </optgroup>
              </select>
            </div>

            <Button type="submit" variant="whatsapp" size="lg" className="w-full text-base font-bold py-7 rounded-xl shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              GARANTIR MINHA VAGA AGORA
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;