
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 pb-4",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm pb-4" 
          : "bg-transparent pb-4"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/cf51e25b-f234-4ed6-aec9-a8a7fdf35aef.png" 
              alt="Jus Digital Logo" 
              className="h-8 md:h-10"
            />
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-jus-purple/80 hover:text-jus-purple font-medium transition-colors">
            Como Funciona
          </a>
          <a href="#testimonials" className="text-jus-purple/80 hover:text-jus-purple font-medium transition-colors">
            Casos de Sucesso
          </a>
          <a href="#product" className="text-jus-purple/80 hover:text-jus-purple font-medium transition-colors">
            Produto
          </a>
          <a href="#pricing" className="text-jus-purple/80 hover:text-jus-purple font-medium transition-colors">
            Preços
          </a>
          <a href="#cta" className="button-primary">
            Começar Agora
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-jus-purple" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-jus-purple/80 hover:text-jus-purple font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#testimonials" 
              className="text-jus-purple/80 hover:text-jus-purple font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Casos de Sucesso
            </a>
            <a 
              href="#product" 
              className="text-jus-purple/80 hover:text-jus-purple font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Produto
            </a>
            <a 
              href="#pricing" 
              className="text-jus-purple/80 hover:text-jus-purple font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Preços
            </a>
            <a 
              href="#cta" 
              className="button-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Começar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
