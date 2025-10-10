import { Heart, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-playfair font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
              DV&C Turismo e Viagens
            </div>
            <p className="text-muted-foreground font-poppins mb-4">
              Transformando sonhos em memórias inesquecíveis desde o primeiro dia.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-accent" />
              <span className="font-poppins">Feito com paixão por viagens</span>
            </div>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-poppins">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#differentials" className="text-muted-foreground hover:text-primary transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5564992722036"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-poppins">(64) 99272-2036</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@dvecturismoeviagens.com.br"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-poppins text-sm">contato@dvecturismoeviagens.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dvecturismo_e_viagens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="font-poppins">@dvecturismo_e_viagens</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-poppins">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>
                © {currentYear} DV&C Turismo e Viagens. Todos os direitos reservados.
              </p>
              <p className="flex items-center gap-2">
                CNPJ: 62.366.775/0001-32
              </p>
            </div>
            <div className="flex items-center gap-6">
              <img 
                src="/cadastur-logo.png" 
                alt="Cadastur - Ministério do Turismo" 
                className="h-8 object-contain"
              />
              <a 
                href="https://zapturize.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Desenvolvido por ZapTurize
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
