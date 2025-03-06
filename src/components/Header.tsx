import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Function to handle navigation on the AllProducts page
  const handleNavigation = (sectionId: string) => {
    // Close the mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    // If we're on the homepage, we can scroll to the section
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on another page, navigate to homepage then to the section
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-sonhar-black shadow-lg py-2 text-white' : 'bg-white py-4 text-sonhar-black'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link to="/" className="flex items-center">
          <div className="h-10 w-40 flex items-center">
            <h1 className="text-xl font-bold text-sonhar-red">
              SONHAR <span className={scrolled ? 'text-white' : 'text-sonhar-black'}>Colchões</span>
            </h1>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`font-medium hover:text-sonhar-red transition-colors ${scrolled ? 'text-white' : 'text-sonhar-black'}`}>
            Início
          </Link>
          <button 
            onClick={() => handleNavigation('about')} 
            className={`font-medium hover:text-sonhar-red transition-colors ${scrolled ? 'text-white' : 'text-sonhar-black'}`}
          >
            Sobre
          </button>
          <button 
            onClick={() => handleNavigation('products')} 
            className={`font-medium hover:text-sonhar-red transition-colors ${scrolled ? 'text-white' : 'text-sonhar-black'}`}
          >
            Produtos
          </button>
          <button 
            onClick={() => handleNavigation('team')} 
            className={`font-medium hover:text-sonhar-red transition-colors ${scrolled ? 'text-white' : 'text-sonhar-black'}`}
          >
            Equipe
          </button>
          <button 
            onClick={() => handleNavigation('contact')} 
            className={`font-medium hover:text-sonhar-red transition-colors ${scrolled ? 'text-white' : 'text-sonhar-black'}`}
          >
            Contato
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Contact Button */}
          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 btn-primary"
          >
            <Phone size={18} />
            <span>Fale Conosco</span>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button className="ml-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} className={scrolled ? 'text-white' : 'text-sonhar-black'} /> : <Menu size={24} className={scrolled ? 'text-white' : 'text-sonhar-black'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-sonhar-black shadow-md py-4 px-4 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium py-2 border-b border-gray-700 text-white hover:text-sonhar-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <button 
              onClick={() => handleNavigation('about')}
              className="font-medium py-2 border-b border-gray-700 text-white hover:text-sonhar-red transition-colors text-left"
            >
              Sobre
            </button>
            <button 
              onClick={() => handleNavigation('products')}
              className="font-medium py-2 border-b border-gray-700 text-white hover:text-sonhar-red transition-colors text-left"
            >
              Produtos
            </button>
            <button 
              onClick={() => handleNavigation('team')}
              className="font-medium py-2 border-b border-gray-700 text-white hover:text-sonhar-red transition-colors text-left"
            >
              Equipe
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="font-medium py-2 border-b border-gray-700 text-white hover:text-sonhar-red transition-colors text-left"
            >
              Contato
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="whatsapp-btn self-start mt-2"
            >
              <Phone size={18} />
              <span>Fale Conosco</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
