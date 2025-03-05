import { MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/constants';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <button 
        onClick={handleWhatsAppClick}
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <MessageSquare size={28} />
      </button>
      <span className="absolute -top-10 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md text-sm whitespace-nowrap">
        Fale conosco pelo WhatsApp
        <span className="absolute bottom-[-6px] right-6 transform rotate-45 w-3 h-3 bg-white"></span>
      </span>
    </div>
  );
};

export default FloatingWhatsApp;
