import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Software from './pages/Software';
import Collectivites from './pages/Collectivites';
import ResidencesSeniors from './pages/Sante';
import Partners from './pages/Partners';
import Corporate from './pages/Corporate';
import Sport from './pages/Sport';
import Retail from './pages/Retail';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Terms from './pages/Terms';
import Sales from './pages/Sales';
import Contact from './pages/Contact';
import Materiel from './pages/Materiel';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/software" element={<Software />} />
            <Route path="/secteur/collectivites" element={<Collectivites />} />
            <Route path="/secteur/residences-seniors" element={<ResidencesSeniors />} />
            <Route path="/secteur/corporate" element={<Corporate />} />
            <Route path="/secteur/sport" element={<Sport />} />
            <Route path="/secteur/retail" element={<Retail />} />
            <Route path="/partenaires" element={<Partners />} />
            <Route path="/materiel" element={<Materiel />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="/confidentialite" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/cgu" element={<Terms />} />
            <Route path="/cgv" element={<Sales />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}