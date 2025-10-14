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

    // Criar um iframe para isolar completamente o widget
    const iframe = document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = 'auto';
    iframe.style.minHeight = '500px';
    
    containerRef.current.appendChild(iframe);

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) return;

    // Escrever HTML no iframe
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://static.onertravel.com/widget/search/production/styles.css">
        <style>
          * {
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
        </style>
      </head>
      <body>
        <div id="wrapper"></div>
        <script src="https://static.onertravel.com/widget/search/production/widget-befly.js"><\/script>
        <script>
          const widget = document.createElement('befly-widget');
          widget.setAttribute('language', 'pt-br');
          widget.setAttribute('new-tab', 'true');
          document.getElementById('wrapper').appendChild(widget);
        <\/script>
      </body>
      </html>
    `);
    iframeDoc.close();

    return () => {
      if (containerRef.current?.contains(iframe)) {
        containerRef.current.removeChild(iframe);
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
          <div ref={containerRef} className="widget-container" />
        </div>
      </div>
    </section>
  );
};

export default TravelWidget;