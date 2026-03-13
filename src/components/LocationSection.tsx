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
            {/* Endereço */}
            <div className="bg-card rounded-lg p-6 border border-border flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Endereço</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Rua E, 27 Conjunto Vitória<br />
                  Imperatriz - MA
                </p>
              </div>
            </div>

            {/* Horário */}
            <div className="bg-card rounded-lg p-6 border border-border flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Horário de Funcionamento</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Horário flexível: Atendimento conforme turmas <br />
                  <strong>Consulte nossa secretaria para horários atuais.</strong>
                </p>
              </div>
            </div>

            {/* Contato Social */}
            <div className="bg-card rounded-lg p-6 border border-border flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <PhoneIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Canais de Atendimento</h4>
                <div className="text-muted-foreground text-sm mt-1 space-y-1">
                  <p>(99) 98135-5292</p>
                  <p>iabfapegmaitz@gmail.com</p>
                  <a 
                    href="https://www.instagram.com/iab.fapegma/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline block font-medium"
                  >
                    @iab.fapegma
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa Interativo */}
          <div className="rounded-xl overflow-hidden shadow-md border border-border h-[400px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0110815408184!2d-47.44959072427561!3d-5.565373755276406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c55f424c46202f%3A0x27451897331809bc!2sIAB%20FAPEGMA!5e0!3m2!1spt-BR!2sbr!4v1773350578991!5m2!1spt-BR!2sbr"
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