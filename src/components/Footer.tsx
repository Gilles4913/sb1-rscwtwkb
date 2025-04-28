import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745333946/A2Display%20-%20logo%20blanc%20-%20Affichage%20num%C3%A9rique%20intelligent%20-%20Dynamique%20-%20Interactif.png" alt="A2Display" className="h-12 w-auto" />
            </div>
            <p className="text-sm">
              Solutions innovantes d'affichage dynamique et interactif pour tous vos espaces
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation rapide</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-500">Accueil</Link></li>
              <li><Link to="/software" className="hover:text-blue-500">Le Logiciel</Link></li>
              <li><Link to="/materiel" className="hover:text-blue-500">Matériel</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
              <li>
                <Link to="/contact" className="text-blue-500 hover:text-blue-400">
                  Demander une démo
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@a2display.fr" title="Envoyer un email à A2Display">contact@a2display.fr</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+33984311194" title="Appeler A2Display">+33 (0)9 84 31 11 94</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <address>1 rue de la Caillardière, Beaucouzé 49070, France</address>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Nos solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/secteur/collectivites" className="hover:text-blue-500">Collectivités</Link></li>
              <li><Link to="/secteur/residences-seniors" className="hover:text-blue-500">Résidences seniors</Link></li>
              <li><Link to="/secteur/corporate" className="hover:text-blue-500">Entreprises</Link></li>
              <li><Link to="/secteur/sport" className="hover:text-blue-500">Sport</Link></li>
              <li><Link to="/secteur/retail" className="hover:text-blue-500">Commerce</Link></li>
              <li><Link to="/partenaires" className="hover:text-blue-500">Partenaires</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li><Link to="/mentions-legales" className="hover:text-blue-500">Mentions légales</Link></li>
              <li><Link to="/cgu" className="hover:text-blue-500">CGU</Link></li>
              <li><Link to="/cgv" className="hover:text-blue-500">CGV</Link></li>
              <li><Link to="/confidentialite" className="hover:text-blue-500">Politique de confidentialité</Link></li>
              <li><Link to="/cookies" className="hover:text-blue-500">Politique cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} A2Display. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/a2display/"
              target="_blank"
              rel="noopener noreferrer"
              title="Suivez-nous sur LinkedIn"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/a2display/"
              target="_blank"
              rel="noopener noreferrer"
              title="Suivez-nous sur Instagram"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}