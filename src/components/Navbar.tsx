
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo className="z-50 transition-transform hover:scale-105" />

          {/* Desktop Navigation - Vertical Side Navigation on larger screens */}
          <nav className="hidden lg:flex items-center">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group relative text-lgt-dark hover:text-lgt-orange font-medium transition-colors overflow-hidden py-2"
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lgt-orange transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>
            <Button asChild className="bg-lgt-orange hover:bg-orange-600 ml-8 shadow-lg hover:shadow-xl transition-all">
              <Link to="/quote" className="flex items-center">
                Get a Quote
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button - Reimagined interactive hamburger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 text-lgt-dark hover:text-lgt-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Reimagined with visual cues */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-orange-blue lg:hidden z-40 flex flex-col items-center justify-center animate-fade-in">
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-2xl font-medium text-white hover:text-lgt-orange transition-colors transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-white text-lgt-orange hover:bg-gray-100 mt-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/quote" className="flex items-center">
                Get a Quote
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
