import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Inscrição", href: "#inscricao" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-primary/80 backdrop-blur-sm py-4"
      } border-b border-white/10`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground text-lg shadow-inner group-hover:scale-110 transition-transform" style={{ fontFamily: "'Playfair Display', serif" }}>
            IAB
          </div>
          <div className="text-primary-foreground">
            <span className="font-bold text-lg tracking-tight block leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
              IAB FAPEGMA
            </span>
            <span className="text-[10px] text-accent font-medium uppercase tracking-wider">Imperatriz - MA</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-accent text-sm font-semibold transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="whatsapp" size="sm" className="shadow-lg hover:scale-105 transition-transform" asChild>
            <a href="https://wa.me/5599981355292" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 px-4 py-6 animate-in slide-in-from-top duration-300 shadow-2xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-primary-foreground/90 hover:text-accent text-base font-semibold border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 space-y-3">
            <Button variant="whatsapp" size="lg" className="w-full text-base font-bold" asChild onClick={() => setMobileOpen(false)}>
              <a href="https://wa.me/5599981355292" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Falar com Consultor
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
