import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, isRTL } = useLanguage();

  const navItems = [
    { name: t('home'), href: '#home', icon: Home },
    { name: t('about'), href: '#about', icon: User },
    { name: t('projects'), href: '#projects', icon: Code },
    { name: t('experience'), href: '#experience', icon: Briefcase },
    { name: t('contact'), href: '#contact', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Animation */}
          <div className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer transform hover:scale-105">
            {t('name')}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-blue-600 transition-all duration-200 hover:scale-105 transform ${
                  isRTL ? 'hover:translate-x-1' : 'hover:-translate-x-1'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </button>
            ))}
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3 space-x-reverse">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-transform duration-300 hover:scale-110"
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with Animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center space-x-3 space-x-reverse text-gray-600 hover:text-blue-600 transition-all duration-200 p-2 rounded-lg hover:bg-gray-50 transform hover:scale-105 ${
                    isRTL ? 'hover:translate-x-2' : 'hover:-translate-x-2'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.3s ease ${index * 0.1}s`
                  }}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
