import { useState, useEffect } from 'react';
import { ArrowRight, Import } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/constants';

const slides = [
  {
    title: "O melhor em conforto para o seu lar",
    subtitle: "Colchões e estofados de alta qualidade",
    image: "https://i.postimg.cc/85fFQcXY/Imagem-do-Whats-App-de-2025-03-15-s-13-09-10-4410288f.jpg",
  },
  {
    title: "Transforme seus momentos de descanso",
    subtitle: "Conforto e durabilidade garantidos",
    image: "https://i.postimg.cc/VNdvn5wN/Imagem-do-Whats-App-de-2025-03-15-s-13-10-30-13c16f5b.jpg",
  },
  {
    title: "Design e qualidade em cada detalhe",
    subtitle: "Sua casa merece o melhor",
    image: "https://i.postimg.cc/C5HxSqGc/Imagem-do-Whats-App-de-2025-03-15-s-13-09-45-0c8d9f5d.jpg",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
          <section className="relative h-screen overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-black">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl hero-slide-text"> {/* Classe para garantir o texto branco */}
                  <h1 
                    className="text-4xl md:text-6xl font-display font-bold mb-4 text-white opacity-0 animate-slideUp"
                    style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className="text-xl md:text-2xl mb-6 text-white opacity-0 animate-slideUp"
                    style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
                  >
                    {slide.subtitle}
                  </p>
                  <div 
                    className="flex flex-wrap gap-4 opacity-0 animate-slideUp"
                    style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
                  >
                    <button 
                      className="btn-primary"
                      onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Conheça Nossos Produtos
                    </button>
                    <button 
                      className="btn-outline border-white text-white hover:bg-white hover:text-sonhar-black"
                      onClick={handleWhatsAppClick}
                    >
                      Fale Conosco
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-sonhar-red w-10' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <a 
          href="#about"
          className="absolute bottom-8 right-8 text-white flex flex-col items-center animate-float hidden md:flex"
        >
          <span className="mb-2 text-sm">Rolar para baixo</span>
          <ArrowRight className="transform rotate-90" />
        </a>
      </section>

  );
};

export default Hero;
