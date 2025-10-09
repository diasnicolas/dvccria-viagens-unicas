import { Card } from "@/components/ui/card";
import { Plane, Hotel, Shield, MapPin, HeadphonesIcon, Sparkles } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Pacotes Turísticos Personalizados",
    description: "Roteiros exclusivos criados especialmente para você, de acordo com seu perfil, interesses e orçamento.",
  },
  {
    icon: Plane,
    title: "Passagens Aéreas e Terrestres",
    description: "As melhores opções de voos e transporte terrestre, com preços competitivos e diversas formas de pagamento.",
  },
  {
    icon: Hotel,
    title: "Hospedagem",
    description: "Seleção criteriosa de hotéis, resorts e pousadas que garantem conforto, segurança e excelente custo-benefício.",
  },
  {
    icon: Shield,
    title: "Seguro Viagem",
    description: "Proteção completa para você viajar tranquilo, com cobertura para imprevistos médicos, bagagem e cancelamentos.",
  },
  {
    icon: MapPin,
    title: "Roteiros Exclusivos",
    description: "Experiências únicas em destinos nacionais e internacionais, com dicas locais e vivências autênticas.",
  },
  {
    icon: HeadphonesIcon,
    title: "Assessoria Completa",
    description: "Suporte em todas as etapas da viagem, desde o planejamento até o retorno, com atendimento personalizado.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para tornar sua viagem inesquecível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-poppins leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
