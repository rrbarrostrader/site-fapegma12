const Footer = () => {
  return (
    <footer className="bg-navy-dark py-12 border-t border-navy-light/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-primary-foreground font-bold text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              IAB FAPEGMA
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Educação de qualidade no Conjunto Vitória em Imperatriz - MA, formando profissionais preparados para o mercado.
            </p>
          </div>
          <div>
            {/* CORREÇÃO AQUI: Aberto h4 e fechado h4 */}
            <h4 className="text-primary-foreground font-semibold text-sm uppercase tracking-wider mb-3">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Sobre Nós", "Cursos", "Localização", "Inscrição Rápida"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* CORREÇÃO AQUI: Padronizado para h4 para combinar com a coluna ao lado */}
            <h4 className="text-primary-foreground font-semibold text-sm uppercase tracking-wider mb-3">Contato</h4>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Conjunto Vitória, Imperatriz - MA<br />
              (99) 98135-5292<br />
              iabfapegmaitz@gmail.com<br />
              <a href="https://www.instagram.com/iab.fapegma/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                @iab.fapegma
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-navy-light/20 pt-6 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © 2026 IAB FAPEGMA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;