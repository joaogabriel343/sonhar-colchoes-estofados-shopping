import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/constants';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-sonhar-black shadow-lg py-2' : 'bg-transparent dark:bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link to="/" className="flex items-center" onClick={scrollToTop}>
          <div className="h-10 w-40 flex items-center">
            <h1 className="text-xl font-bold text-sonhar-red">
              SONHAR <span className="text-sonhar-black dark:text-white">Colchões</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-medium hover:text-sonhar-red transition-colors"
            onClick={scrollToTop}
          >
            Início
          </Link>
          <a href="#about" className="font-medium hover:text-sonhar-red transition-colors">
            Sobre
          </a>
          <a href="#products" className="font-medium hover:text-sonhar-red transition-colors">
            Produtos
          </a>
          <a href="#team" className="font-medium hover:text-sonhar-red transition-colors">
            Equipe
          </a>
          <a href="#contact" className="font-medium hover:text-sonhar-red transition-colors">
            Contato
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Contact Button */}
          <button onClick={handleWhatsAppClick} className="flex items-center gap-2 btn-primary">
            <Phone size={18} />
            <span>Fale Conosco</span>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle Button on Mobile */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button className="ml-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} className="dark:text-white" /> : <Menu size={24} className="dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-sonhar-black shadow-md py-4 px-4 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="font-medium py-2 border-b border-gray-100 dark:border-gray-800 hover:text-sonhar-red transition-colors dark:text-white"
              onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
            >
              Início
            </Link>
            <a
              href="#about"
              className="font-medium py-2 border-b border-gray-100 dark:border-gray-800 hover:text-sonhar-red transition-colors dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#products"
              className="font-medium py-2 border-b border-gray-100 dark:border-gray-800 hover:text-sonhar-red transition-colors dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#team"
              className="font-medium py-2 border-b border-gray-100 dark:border-gray-800 hover:text-sonhar-red transition-colors dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Equipe
            </a>
            <a
              href="#contact"
              className="font-medium py-2 border-b border-gray-100 dark:border-gray-800 hover:text-sonhar-red transition-colors dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <button onClick={handleWhatsAppClick} className="whatsapp-btn self-start mt-2">
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
