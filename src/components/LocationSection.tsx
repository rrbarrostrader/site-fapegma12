import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Localização</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Venha nos visitar
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-border flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>Endereço</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Conjunto Vitória, s/n<br />
                  São Luís - MA
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>Horário de Funcionamento</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Segunda a Sexta: 8h às 22h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <PhoneIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>Contato</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  (00) 0000-0000<br />
                  contato@iabfapegma.edu.br
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31893.0!2d-44.28!3d-2.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMzEnNDguMCJTIDQ0wrAxNic0OC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização IAB FAPEGMA"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
