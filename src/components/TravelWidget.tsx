import { useEffect, useRef } from 'react';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'befly-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        language?: string;
        'new-tab'?: string;
      };
    }
  }
}

const TravelWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Criar Shadow DOM
    if (!containerRef.current.shadowRoot) {
      shadowRef.current = containerRef.current.attachShadow({ mode: 'open' });
    } else {
      shadowRef.current = containerRef.current.shadowRoot;
    }

    // Criar container para o widget dentro do Shadow DOM
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'wrapper';
    widgetContainer.className = '[&_*]:!text-inherit';
    
    // Adicionar CSS isolado ao Shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      :host {
        all: initial;
        display: block;
      }
      
      #wrapper {
        all: revert;
      }
    `;
    
    shadowRef.current.appendChild(style);
    shadowRef.current.appendChild(widgetContainer);

    // Criar elemento befly-widget dentro do Shadow DOM
    const berflyWidget = document.createElement('befly-widget');
    berflyWidget.setAttribute('language', 'pt-br');
    berflyWidget.setAttribute('new-tab', 'true');
    widgetContainer.appendChild(berflyWidget);

    // Carregar CSS do widget no Shadow DOM
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://static.onertravel.com/widget/search/production/styles.css';
    shadowRef.current.insertBefore(link, shadowRef.current.firstChild);

    // Carregar script do widget
    const script = document.createElement('script');
    script.src = 'https://static.onertravel.com/widget/search/production/widget-befly.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
          <div ref={containerRef} className="widget-shadow-container" />
        </div>
      </div>
    </section>
  );
};

export default TravelWidget;