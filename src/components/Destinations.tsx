import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import machupicchu from "@/assets/destination-machu-picchu.jpg";
import santorini from "@/assets/destination-santorini.jpg";
import dubai from "@/assets/destination-dubai.jpg";

const destinations = [
  {
    name: "Machu Picchu, Peru",
    description: "Explore as ruínas incas e viva uma experiência mística nas montanhas dos Andes.",
    image: machupicchu,
  },
  {
    name: "Santorini, Grécia",
    description: "Descubra as casinhas brancas, cúpulas azuis e o pôr do sol mais famoso do mundo.",
    image: santorini,
  },
  {
    name: "Dubai, Emirados Árabes",
    description: "Luxo, modernidade e aventura no deserto. Uma cidade que une tradição e inovação.",
    image: dubai,
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Destinos Populares
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos destinos mais procurados pelos nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-poppins font-semibold">{destination.name}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground font-poppins mb-4">
                  {destination.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.open("https://wa.me/5564992722036", "_blank")}
                >
                  Saber Mais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Não encontrou o destino dos seus sonhos?
            </h3>
            <p className="text-muted-foreground font-poppins mb-6 max-w-2xl">
              Trabalhamos com destinos nacionais e internacionais personalizados. 
              Entre em contato e conte-nos sobre a viagem perfeita para você!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
              onClick={() => window.open("https://wa.me/5564992722036", "_blank")}
            >
              Solicitar Orçamento Personalizado
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
