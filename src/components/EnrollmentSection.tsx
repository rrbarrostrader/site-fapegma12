import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Phone } from "lucide-react";

const EnrollmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de me inscrever.\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nCurso: ${formData.course}`;
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(message)}`, "_blank");
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
              <label className="block text-sm font-medium text-foreground mb-1.5">Nome Completo</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Curso de Interesse</label>
              <select
                required
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Selecione um curso</option>
                <optgroup label="Graduação">
                  <option>Administração</option>
                  <option>Pedagogia</option>
                  <option>Direito</option>
                  <option>Enfermagem</option>
                  <option>Contabilidade</option>
                </optgroup>
                <optgroup label="Especialização">
                  <option>MBA em Gestão</option>
                  <option>Psicopedagogia</option>
                  <option>Direito Público</option>
                </optgroup>
                <optgroup label="Técnico">
                  <option>Enfermagem (Técnico)</option>
                  <option>Informática</option>
                  <option>Segurança do Trabalho</option>
                </optgroup>
              </select>
            </div>

            <Button type="submit" variant="whatsapp" size="lg" className="w-full text-base">
              <Phone className="w-5 h-5" />
              Enviar Inscrição via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
