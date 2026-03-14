import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Inscrição", href: "#inscricao" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-navy-light/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            IAB
          </div>
          <div className="text-primary-foreground">
            <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              IAB FAPEGMA
            </span>
            <span className="block text-xs text-primary-foreground/70 -mt-1">Conjunto Vitória Imperatriz - MA</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="whatsa" size="sm" asChild>
            <a href="https://wa.me/5599981355292" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-navy-light/30 px-4 pb-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium border-b border-navy-light/10"
            >
              {link.label}
            </a>
          ))}
          <Button variant="whatsapp" size="sm" className="mt-4 w-full" asChild onClick={() => setMobileOpen(false)}>
            <a href="https://wa.me/5599981355292" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;