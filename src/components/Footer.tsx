const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary via-navy-dark to-primary py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-primary-foreground font-extrabold text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              IAB FAPEGMA
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed font-medium">
              Educação de qualidade no Conjunto Vitória em Imperatriz - MA, formando profissionais preparados para o mercado.
            </p>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-[0.2em] mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Sobre Nós", "Cursos", "Localização", "Inscrição"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                    className="text-primary-foreground/70 hover:text-accent text-sm font-semibold transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-[0.2em] mb-6">Contato</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed font-medium space-y-2">
              <span className="block">Conjunto Vitória, Imperatriz - MA</span>
              <span className="block hover:text-accent transition-colors">(99) 98135-5292</span>
              <span className="block hover:text-accent transition-colors">iabfapegmaitz@gmail.com</span>
              <a 
                href="https://www.instagram.com/iab.fapegma/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block hover:text-accent transition-colors font-bold"
              >
                @iab.fapegma
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm font-medium">
            © 2026 IAB FAPEGMA. Todos os direitos reservados. | Desenvolvido com ❤️ para sua educação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
