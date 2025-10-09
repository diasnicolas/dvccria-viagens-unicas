import { Card } from "@/components/ui/card";
import { UserCheck, DollarSign, Shield, MapPin, Headphones, Heart } from "lucide-react";

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Nossos roteiros são planejados de acordo com seus desejos, interesses e estilo de viagem.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: DollarSign,
    title: "Ótimo Custo-Benefício",
    description: "Formas de pagamento flexíveis e facilitadas, permitindo que sua viagem seja planejada de maneira acessível.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Shield,
    title: "Segurança e Confiabilidade",
    description: "Parceiros criteriosamente selecionados. Cada viagem é planejada para minimizar riscos e garantir segurança.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: MapPin,
    title: "Experiência Real em Destinos",
    description: "Nossa equipe já explorou diversos países e destinos, vivenciando cada cultura de forma autêntica.",
    gradient: "from-primary-glow to-primary",
  },
  {
    icon: Headphones,
    title: "Suporte Completo",
    description: "Oferecemos suporte contínuo antes e durante a viagem, esclarecendo dúvidas e garantindo tranquilidade.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Heart,
    title: "Paixão por Viagens",
    description: "Nossa missão é transformar sonhos em momentos inesquecíveis, criando memórias que ficam para sempre.",
    gradient: "from-accent to-primary-glow",
  },
];

const Differentials = () => {
  return (
    <section id="differentials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Nossos Diferenciais
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            O que nos torna únicos e especiais na realização dos seus sonhos de viagem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-4`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-poppins leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
