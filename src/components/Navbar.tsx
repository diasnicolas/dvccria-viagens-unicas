import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIrParaWhatsApp } from "@/hooks/useIrParaWhatsApp";
import logotipo from "@/assets/logo_topo.png";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

const irParaWhatsApp = useIrParaWhatsApp();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
           {/*  <div className="text-2xl font-playfair font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
              DV&C
            </div> */}
              <img
              src={logotipo}
              alt="Logotipo DV&C"
              className="h-72 w-auto object-contain"
            />
           
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="font-poppins text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-poppins text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("differentials")}
              className="font-poppins text-foreground hover:text-primary transition-colors"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-poppins text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-poppins text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
              onClick={() => irParaWhatsApp("faleconosco")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("differentials")}
                className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left font-poppins text-foreground hover:text-primary transition-colors py-2"
              >
                Contato
              </button>
              <Button
                className="w-full bg-gradient-to-r from-primary to-primary-glow"
                onClick={() => irParaWhatsApp("faleconosco")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
