const TravelWidget = () => {
  return (
    <section id="travel-widget" className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            Encontre a sua Viagem
          </h2>
          <p className="text-lg font-poppins text-muted-foreground max-w-2xl mx-auto">
            Use nosso widget de busca para encontrar a viagem perfeita para você
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card rounded-lg shadow-lg p-8 animate-fade-in">
          {/* Aqui será inserido o widget da OpenTravel */}
          <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-border rounded-lg">
            <p className="text-muted-foreground font-poppins text-center">
              Widget da OpenTravel será inserido aqui
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelWidget;
