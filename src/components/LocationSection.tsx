import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-[0.2em]">Localização</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-4 mb-6">
            Venha nos visitar
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            {/* Endereço */}
            <div className="bg-white rounded-2xl p-8 border-2 border-primary/10 hover:border-accent hover:shadow-2xl transition-all duration-500 flex gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">Endereço</h4>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed font-medium">
                  Rua E, 27 Conjunto Vitória<br />
                  Imperatriz - MA
                </p>
              </div>
            </div>

            {/* Horário */}
            <div className="bg-white rounded-2xl p-8 border-2 border-primary/10 hover:border-accent hover:shadow-2xl transition-all duration-500 flex gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">Horário de Funcionamento</h4>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed font-medium">
                  Horário flexível: Atendimento conforme turmas <br />
                  <strong className="text-primary">Consulte nossa secretaria para horários atuais.</strong>
                </p>
              </div>
            </div>

            {/* Contato Social */}
            <div className="bg-white rounded-2xl p-8 border-2 border-primary/10 hover:border-accent hover:shadow-2xl transition-all duration-500 flex gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <PhoneIcon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">Canais de Atendimento</h4>
                <div className="text-muted-foreground text-sm mt-2 space-y-1 font-medium">
                  <p className="hover:text-accent transition-colors">(99) 98135-5292</p>
                  <p className="hover:text-accent transition-colors">iabfapegmaitz@gmail.com</p>
                  <a 
                    href="https://www.instagram.com/iab.fapegma/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline block font-bold"
                  >
                    @iab.fapegma
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa Interativo */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/10 h-[400px] bg-muted hover:shadow-3xl transition-all duration-500">
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
