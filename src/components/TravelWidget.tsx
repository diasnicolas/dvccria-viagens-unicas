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
          <div id="wrapper">
  <befly-widget language="pt-br" new-tab="true">
  </befly-widget>
</div>
<script type="text/javascript" src="https://static.onertravel.com/widget/search/production/widget-befly.js">
</script>
        </div>
      </div>
    </section>
  );
};

export default TravelWidget;
