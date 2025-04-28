import React from 'react';
import { ArrowRight, Monitor, Zap, Shield, Layout, Clock, PenTool as Tool, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function Hero() {
  const { t } = useLanguage();
  
  return (
    <>
    <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Borne interactive"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" itemScope itemType="https://schema.org/Product">
              <span itemProp="name">
              L'affichage dynamique et interactif, simplement efficace
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8" itemProp="description">
              Expert en affichage légal numérique, panneaux LED et bornes interactives. Solutions sur-mesure pour mairies, résidences seniors et entreprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors flex items-center"
              >
                Demander une démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                Découvrir nos solutions
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 p-6 rounded-lg">
                  <Monitor className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-white font-semibold mb-2">Affichage Intelligent</h3>
                  <p className="text-gray-200 text-sm">Gérez votre contenu en temps réel</p>
                </div>
                <div className="bg-white/20 p-6 rounded-lg">
                  <Zap className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-white font-semibold mb-2">Performance</h3>
                  <p className="text-gray-200 text-sm">Solution haute disponibilité</p>
                </div>
                <div className="bg-white/20 p-6 rounded-lg">
                  <Shield className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-white font-semibold mb-2">Sécurité</h3>
                  <p className="text-gray-200 text-sm">Protection des données</p>
                </div>
                <div className="bg-white/20 p-6 rounded-lg">
                  <Monitor className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-white font-semibold mb-2">Multi-écrans</h3>
                  <p className="text-gray-200 text-sm">Gestion centralisée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Pourquoi A2Display */}
    <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi A2Display ?</h2>
        <p className="text-xl text-blue-600 font-semibold text-center mb-12">
          Plus de 2000 utilisateurs nous font déjà confiance en France
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Layout className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Interface intuitive</h3>
            <p className="text-gray-600">Prise en main rapide et simple</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Monitor className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Compatibilité tous supports</h3>
            <p className="text-gray-600">S'adapte à tous vos écrans</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Installation rapide</h3>
            <p className="text-gray-600">Déploiement en quelques heures</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Matériel professionnel</h3>
            <p className="text-gray-600">Qualité et fiabilité garanties</p>
          </div>
        </div>
      </div>
    </section>
    
    {/* Le logiciel A2Display */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Votre communication visuelle, centralisée et simplifiée</h2>
            <p className="text-xl text-gray-600 mb-6">
              Pilotez tous vos écrans depuis une interface intuitive, où que vous soyez. Notre solution d'affichage dynamique vous permet de gérer vos contenus en quelques clics, en toute autonomie, sans compétences techniques.
            </p>
            <p className="text-gray-600 mb-6">
              Écrans en vitrine, totems interactifs, bornes tactiles, murs d'images ou panneaux LED, notre logiciel s'adapte à tous les supports, en intérieur comme en extérieur.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-4">Un seul outil :</h3>
              <p className="text-gray-600 mb-4">
                Que vous souhaitiez informer, orienter, divertir, vendre ou engager, notre solution s'adapte à vos besoins, à votre public et à votre organisation.
              </p>
              <p className="text-gray-600 font-medium">
                Créez une expérience visuelle fluide, moderne et percutante… sur tous vos écrans.
              </p>
            </div>
            <Link 
              to="/software" 
              className="inline-flex items-center bg-accent text-primary px-6 py-3 rounded-full hover:bg-accent/90 transition-colors font-medium"
            >
              En savoir plus
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg shadow-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/4rqSg7PDTOQ?autoplay=1&mute=1&loop=1&playlist=4rqSg7PDTOQ"
                title="La Communication par l'écran"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Solutions par secteur */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Solutions par secteur</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { 
              title: 'Collectivités', 
              desc: 'Informez vos citoyens', 
              link: '/secteur/collectivites' 
            },
            { 
              title: 'Résidences seniors', 
              desc: 'Créez du lien humain', 
              link: '/secteur/sante' 
            },
            { 
              title: 'Corporate', 
              desc: 'Communication interne', 
              link: '/secteur/corporate' 
            },
            { 
              title: 'Associations sportives', 
              desc: 'Planning, scores', 
              link: '/secteur/sport' 
            },
            { 
              title: 'Commerce', 
              desc: 'Affichage promotionnel', 
              link: '/secteur/retail' 
            }
          ].map((sector) => (
            <Link
              key={sector.title}
              to={sector.link}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold mb-2">{sector.title}</h3>
              <p className="text-gray-600">{sector.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
    
    {/* Qui sommes-nous */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">👋 Qui sommes-nous ?</h2>
          <p className="text-xl text-gray-600 mt-4">
            A2Display – L'affichage dynamique au service de vos messages
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-5">
                  <span className="w-2 bg-blue-600"></span>
                  <span className="w-2 bg-white"></span>
                  <span className="w-2 bg-red-600"></span>
                </span>
                Un logiciel 100% made in France
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              A2Display est un éditeur français de solutions d'affichage dynamique et interactif, basé à Angers, au cœur du Grand Ouest.
            </p>
            <p className="text-gray-600 mb-6">
              Depuis notre création, nous concevons des outils performants, intuitifs et évolutifs pour permettre à nos clients de communiquer efficacement sur tous types d'écrans, en toute autonomie.
            </p>
            <p className="text-gray-600">
              Notre logiciel, 100% développé par notre équipe, est multilingue, personnalisable et adapté à une grande variété de secteurs : collectivités, entreprises, retail, résidences seniors, sport, tourisme…
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745422499/A2Display_-_logiciel_-_Affichage_dynamique_et_interactif_l7cfvb.jpg"
              alt="A2Display - Solutions d'affichage dynamique"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img
              src="https://i0.wp.com/sunudisplay.sn/wp-content/uploads/2023/03/Section.jpg?resize=1024%2C347&ssl=1"
              alt="Présence internationale A2Display"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-6">📍 Une présence locale et internationale</h3>
            <p className="text-gray-600 mb-6">
              Nous intervenons sur tout le territoire français métropolitain, y compris en Corse, dans les DOM-TOM et les territoires d'outre-mer, grâce à un réseau de partenaires de confiance.
            </p>
            <p className="text-gray-600 mb-6">
              Nous sommes également présents à l'international à travers notre filiale Sunudisplay, située à Dakar (Sénégal), qui déploie nos solutions dans toute l'Afrique de l'Ouest.
            </p>
            <a
              href="https://www.sunudisplay.sn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              🌍 www.sunudisplay.sn
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">💡 Notre mission</h3>
            <p className="text-gray-600">
              Rendre la communication visuelle plus accessible, plus flexible et plus impactante, grâce à des outils digitaux puissants, pensés pour le terrain.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">🔧 Notre expertise</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Développement logiciel 100% français</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Intégration matérielle (écrans, totems, bornes…)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Accompagnement sur-mesure</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                <span>Maintenance & support réactif</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">🤝 À vos côtés, ici et ailleurs</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Que vous soyez une mairie, un groupe industriel, un commerce ou une association, nous avons la solution adaptée à vos besoins et à vos enjeux.
          </p>
          <p className="text-gray-600 font-medium">
            A2Display, c'est une entreprise à taille humaine, proche de ses clients, avec des ambitions sans frontières.
          </p>
        </div>
      </div>
    </section>
    
    {/* Matériel */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Notre matériel</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/materiel" className="group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors">
              <h3 className="font-semibold mb-4">Intérieur / Extérieur</h3>
              <p className="text-gray-600 mb-4">
                Solutions pour halls d'accueil, bureaux et espaces intérieurs
              </p>
              <span className="text-blue-600 group-hover:underline">En savoir plus →</span>
            </div>
          </Link>
          <Link to="/materiel" className="group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors">
              <h3 className="font-semibold mb-4">Tactile / Non tactile</h3>
              <p className="text-gray-600 mb-4">
                Écrans tactiles et solutions interactives
              </p>
              <span className="text-blue-600 group-hover:underline">En savoir plus →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
    
    {/* CTA Final */}
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Besoin de conseils ou d'une démonstration ?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactez-nous
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Demander une démo
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}

export default Hero