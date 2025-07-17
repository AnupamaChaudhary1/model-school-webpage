
import React, { useState, useEffect } from 'react';
import { Menu, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DarkModeToggle } from './DarkModeToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Teachers', id: 'teachers' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
    { name: 'Reviews', id: 'reviews' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-xl border-b border-purple-200/50 dark:border-purple-700/50' 
        : 'bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-indigo-900/10 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-purple-300/50 dark:border-purple-600/50 ring-2 ring-purple-200/30 dark:ring-purple-700/30">
              <img 
                src="/pic-uploads/a9eadc53-a8d4-4461-98c9-539c10a46824.png" 
                alt="Model English Boarding School Logo"
                className="w-full h-full object-cover"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground leading-tight">Model English</h1>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Boarding School</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-all duration-200 relative group px-3 py-2 rounded-lg hover:bg-purple-100/50 dark:hover:bg-purple-900/30"
              >
                {item.name}
                <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-6"></span>
              </button>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-purple-100/50 dark:hover:bg-purple-900/30"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-purple-200/50 dark:border-purple-700/50 py-4 animate-slide-in shadow-lg bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-900/50 dark:to-blue-900/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100/50 dark:hover:bg-purple-900/30 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
