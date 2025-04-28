import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent backdrop-blur-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={isScrolled || !isHomePage
                  ? "https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745333428/A2Display%20-%20logo%20-%20Affichage%20num%C3%A9rique%20intelligent%20-%20Dynamique%20-%20Interactif.png"
                  : "https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745333946/A2Display%20-%20logo%20blanc%20-%20Affichage%20num%C3%A9rique%20intelligent%20-%20Dynamique%20-%20Interactif.png"
                } 
                alt="A2Display" 
                className="h-16 w-auto transition-opacity duration-300" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/software" className={`${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'} hover:text-accent transition-colors font-medium`}>
              Le Logiciel
            </Link>
            <div className="relative group">
              <button className={`${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'} hover:text-accent transition-colors font-medium`}>
                Secteurs
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white/80 backdrop-blur-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link 
                  to="/secteur/collectivites"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="block px-4 py-2 text-gray-900 hover:bg-accent hover:text-gray-900 transition-colors"
                >
                  Collectivités
                </Link>
                <Link 
                  to="/secteur/residences-seniors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="block px-4 py-2 text-gray-900 hover:bg-accent hover:text-gray-900 transition-colors"
                >
                  Résidences seniors
                </Link>
                <Link 
                  to="/secteur/corporate"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="block px-4 py-2 text-gray-900 hover:bg-accent hover:text-gray-900 transition-colors"
                >
                  Entreprises
                </Link>
                <Link 
                  to="/secteur/sport"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="block px-4 py-2 text-gray-900 hover:bg-accent hover:text-gray-900 transition-colors"
                >
                  Sport
                </Link>
                <Link 
                  to="/secteur/retail"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="block px-4 py-2 text-gray-900 hover:bg-accent hover:text-gray-900 transition-colors"
                >
                  Retail
                </Link>
              </div>
            </div>
            <Link to="/materiel" className={`${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'} hover:text-accent transition-colors font-medium`}>
              Matériel
            </Link>
            <Link to="/partenaires" className={`${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'} hover:text-accent transition-colors font-medium`}>
              Partenaires
            </Link>
            <Link to="/contact" className={`${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'} hover:text-accent transition-colors font-medium`}>
              Contact
            </Link>
          </nav>

          <Link 
            to="/contact"
            className="hidden md:block bg-accent text-primary px-6 py-2 rounded-full hover:bg-accent/90 transition-colors font-medium"
          >
            Demander une démo
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-text' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-text' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/software"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Le Logiciel
            </Link>
            <Link
              to="/secteur/collectivites"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Collectivités
            </Link>
            <Link
              to="/secteur/residences-seniors"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Résidences seniors
            </Link>
            <Link
              to="/secteur/corporate"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Entreprises
            </Link>
            <Link
              to="/secteur/sport"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Sport
            </Link>
            <Link
              to="/secteur/retail"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Retail
            </Link>
            <Link
              to="/secteur/sport"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Sport
            </Link>
            <Link
              to="/secteur/retail"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Retail
            </Link>
            <Link
              to="/materiel"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Matériel
            </Link>
            <Link
              to="/partenaires"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Partenaires
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-text hover:bg-accent/10 rounded-md"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full mt-4 bg-accent text-primary px-6 py-2 rounded-full hover:bg-accent/90 transition-colors text-center"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}