import { Button } from "@/components/ui/button";
import { ArrowRight, Plane } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <div className="flex items-center space-x-2">
            <Plane className="w-4 h-4" />
            <span className="text-sm font-poppins">Agência Online</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
          Transformando Sonhos em
          <br />
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Memórias Inesquecíveis
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-poppins font-light mb-8 max-w-3xl mx-auto text-white/90">
          Mais do que uma agência de viagens, somos seus parceiros de jornada. 
          Cuidamos de cada detalhe para que você viva experiências únicas e transformadoras.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-white font-poppins text-lg px-8 py-6 shadow-lg"
            onClick={scrollToContact}
          >
            Planeje sua Viagem
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-foreground font-poppins text-lg px-8 py-6"
            onClick={() => window.open("https://wa.me/5564992722036", "_blank")}
          >
            Fale no WhatsApp
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-poppins px-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <span>Atendimento Personalizado</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
            <span>Parcelamento Facilitado</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary-glow animate-pulse" />
            <span>Suporte Completo</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
