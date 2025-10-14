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

  useEffect(() => {
    if (!containerRef.current) return;

    // Criar Shadow DOM
    const shadowRoot = containerRef.current.attachShadow({ mode: 'open' });

    // Estilo para resetar e isolar
    const style = document.createElement('style');
    style.textContent = `
      :host {
        all: initial;
        display: block;
      }
      
      :host * {
        all: revert;
      }
      
      #wrapper {
        display: block;
      }
    `;
    shadowRoot.appendChild(style);

    // Criar container para o widget
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    shadowRoot.appendChild(wrapper);

    // Carregar CSS APENAS no Shadow DOM
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://static.onertravel.com/widget/search/production/styles.css';
    shadowRoot.insertBefore(link, shadowRoot.firstChild);

    // Carregar script DENTRO do Shadow DOM (não no document.body)
    const script = document.createElement('script');
    script.src = 'https://static.onertravel.com/widget/search/production/widget-befly.js';
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => {
      // Criar o widget APÓS o script carregar
      const berflyWidget = document.createElement('befly-widget');
      berflyWidget.setAttribute('language', 'pt-br');
      berflyWidget.setAttribute('new-tab', 'true');
      wrapper.appendChild(berflyWidget);
    };

    shadowRoot.appendChild(script);

    return () => {
      // Cleanup é automático quando o componente desmonta
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