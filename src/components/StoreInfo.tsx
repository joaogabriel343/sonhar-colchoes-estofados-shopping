import { STORE_CONTACT_ITEMS, STORE_INFO } from '@/lib/constants';
import { useEffect, useRef } from 'react';

const StoreInfo = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  // Atualização do mapa usando o iframe do Google Maps
  useEffect(() => {
    if (mapContainer.current) {
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.3747745492005!2d-45.450119325332125!3d-21.571289380217195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca937514066ec3%3A0x84f8d66ee3565204!2sSONHAR%20COLCH%C3%95ES%20E%20ESTOFADOS%20-%20SHOPPING!5e0!3m2!1spt-BR!2sbr!4v1741214704872!5m2!1spt-BR!2sbr";
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.style.border = "0";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";

      mapContainer.current.appendChild(iframe);
    }

    return () => {
      if (mapContainer.current && mapContainer.current.firstChild) {
        mapContainer.current.removeChild(mapContainer.current.firstChild);
      }
    };
  }, []);

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Visite Nossa <span className="text-sonhar-red">Loja</span>
          </h2>
          <div className="w-20 h-1 bg-sonhar-red mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Estamos esperando por você para oferecer o melhor atendimento e encontrar os produtos ideais para o seu lar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-bold">Informações de Contato</h3>
            {STORE_CONTACT_ITEMS.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-sonhar-red bg-opacity-10 rounded-full shrink-0">
                  <item.icon className="w-6 h-6 text-sonhar-red" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-gray-600">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mapa da Loja usando iframe */}
          <div className="h-80 rounded-lg overflow-hidden shadow-elegant">
            <div ref={mapContainer} className="w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
