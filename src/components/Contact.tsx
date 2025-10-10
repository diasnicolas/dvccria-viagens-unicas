import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Entre em Contato
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para transformar seus sonhos em realidade. Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Telefones</h3>
                  <a href="tel:+5564992722036" className="block text-muted-foreground hover:text-primary font-poppins mb-1 transition-colors">
                    Agência: (64) 99272-2036
                  </a>
                  <a href="tel:+5564992190591" className="block text-muted-foreground hover:text-primary font-poppins transition-colors">
                    Danyele: (64) 99219-0591
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">E-mail</h3>
                  <a
                    href="mailto:contato@dvecturismoeviagens.com.br"
                    className="text-primary hover:underline font-poppins"
                  >
                    contato@dvecturismoeviagens.com.br
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary-glow rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground font-poppins">
                    Rua Alameda, número 1<br />
                    Setor João Dias - Anicuns/GO
                  </p>
                  <p className="text-sm text-muted-foreground font-poppins mt-2">
                    Agência 100% online
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-glow to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg mb-2">Redes Sociais</h3>
                  <a
                    href="https://www.instagram.com/dvecturismo_e_viagens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-poppins flex items-center"
                  >
                    @dvecturismo_e_viagens
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="font-playfair font-semibold text-lg">Informações Legais</h3>
              </div>
              <p className="text-sm text-muted-foreground font-poppins">
                CNPJ: 62.366.775/0001-32<br />
                Cadastur: Cadastrada
              </p>
            </Card>
          </div>

          <div className="flex items-center justify-center animate-fade-in">
            <Card className="p-8 w-full">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-playfair font-semibold">
                  Solicite seu Orçamento
                </h3>
                <p className="text-muted-foreground font-poppins">
                  Entre em contato conosco via WhatsApp e receba um orçamento personalizado para a viagem dos seus sonhos!
                </p>
                <Button
                  size="lg"
                  onClick={() => window.open('https://wa.me/5564992722036?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 font-poppins"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Solicitar Orçamento via WhatsApp
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
