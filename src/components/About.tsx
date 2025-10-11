import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Globe, Award } from "lucide-react";
import about1 from "@/assets/about_1.jpeg";
import about2 from "@/assets/about_2.jpeg";
import about3 from "@/assets/about_3.jpeg";
import about4 from "@/assets/about_4.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Sobre a DV&C
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Nascemos do sonho de transformar experiências em memórias inesquecíveis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Nossa História</h3>
                <p className="text-muted-foreground font-poppins">
                  A DV&C Turismo e Viagens nasceu do sonho de transformar experiências em memórias 
                  inesquecíveis. Fundada por Danyele Vieira Caetano, arquiteta de formação e apaixonada 
                  por viagens, que já explorou mais de 10 países e diversos destinos nacionais.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Nossa Missão</h3>
                <p className="text-muted-foreground font-poppins">
                  Mais do que vender pacotes, acreditamos em realizar sonhos. Cada viagem é planejada 
                  com cuidado, atenção e carinho, porque entendemos que viajar é muito mais do que mudar 
                  de lugar — é sentir, viver e se conectar.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Nossos Valores</h3>
                <p className="text-muted-foreground font-poppins">
                  Atendimento humanizado, transparência, segurança e excelência. Valorizamos a confiança 
                  e o relacionamento próximo com cada cliente, trabalhando apenas com parceiros de qualidade.
                </p>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <p className="font-poppins italic text-foreground/80">
                "Cada roteiro é pensado para refletir o perfil e o desejo de cada viajante — 
                porque sabemos que nenhum sonho é igual ao outro."
              </p>
              <p className="mt-4 font-poppins font-semibold text-primary">
                - Danyele Vieira Caetano, Fundadora
              </p>
            </Card>
          </div>

          <div className="animate-fade-in">
            <Card className="p-6 bg-card shadow-lg">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-center">
                Conheça nossa Fundadora
              </h3>
              <Carousel className="w-full max-w-md mx-auto">
    <CarouselContent>
      <CarouselItem>
                    <img
                      src={about1}
          alt="Fundadora - Foto 1"
          className="aspect-[3/4] w-full object-cover rounded-lg"
        />
      </CarouselItem>
      <CarouselItem>
        <img 
          src={about2}
          alt="Fundadora - Foto 2"
          className="aspect-[3/4] w-full object-cover rounded-lg"
        />
      </CarouselItem>
      <CarouselItem>
        <img 
           src={about3}
          alt="Fundadora - Foto 3"
          className="aspect-[3/4] w-full object-cover rounded-lg"
        />
      </CarouselItem>
      <CarouselItem>
        <img 
           src={about4}
          alt="Fundadora - Foto 4"
          className="aspect-[3/4] w-full object-cover rounded-lg"
        />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious className="left-2" />
    <CarouselNext className="right-2" />
  </Carousel>
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm font-poppins text-muted-foreground">
                  <Globe className="w-4 h-4" />
                  <span>10+ países visitados</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
