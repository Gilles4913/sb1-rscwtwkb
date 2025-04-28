import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Building2, MonitorSmartphone, Tv, Cloud, Factory, ArrowRight, CheckCircle2, Wrench, Cog, Boxes } from 'lucide-react';

export default function Materiel() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Écrans professionnels"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🎯 Des écrans pour chaque usage
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Nous proposons une large gamme d'équipements pour répondre à tous les contextes d'utilisation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Écrans vitrines */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Store className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-6">🛍️ Écrans professionnels pour vitrines et points de vente</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Haute luminosité pour une visibilité optimale même en plein soleil</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Formats portrait ou paysage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Design fin, encadrement discret</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Fonctionnement 24/7, anti-reflets et forte résistance thermique</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600 italic">
                Applications : vitrines de magasin, caisses, têtes de gondole, bornes de commande
              </p>
            </div>

            {/* Écrans corporate */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Building2 className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-6">🏢 Écrans d'intérieur pour communication corporate</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Affichage en open space, hall d'accueil, salle de pause</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Idéal pour diffuser des infos RH, événements internes, KPIs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Possibilité de synchronisation sur plusieurs sites</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600 italic">
                Formats disponibles : de 32'' à 98'', ou murs d'écrans assemblés
              </p>
            </div>

            {/* Totems */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <MonitorSmartphone className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-6">📢 Totems et bornes interactives</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Totems d'accueil, d'information ou de guidage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Écrans tactiles capacitifs multipoints</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Structure sécurisée et personnalisable (habillage, logo)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Intégration possible d'imprimante, scanner QR, badge NFC</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600 italic">
                Utilisation : accueil visiteurs, salons, collectivités, centres commerciaux
              </p>
            </div>

            {/* Murs d'images */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Tv className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-6">📺 Mur d'images et écrans LED indoor/outdoor</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Murs d'écrans LCD bord ultra-fin ou LED pitch serré</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Résolution Full HD / 4K / 8K selon la configuration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Modularité extrême pour formats très larges ou originaux</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600 italic">
                Applications : grandes surfaces, salles de contrôle, événementiel, façades
              </p>
            </div>

            {/* Écrans outdoor */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Cloud className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-6">🚧 Écrans outdoor / extérieurs renforcés</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Étanchéité IP65 minimum, résistant aux températures extrêmes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Luminosité jusqu'à 5 000 nits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Caisson ventilé ou climatisé</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Fixation sur mât, mur, mobilier urbain ou au sol</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-600 italic">
                Idéal pour : collectivités, stades, zones piétonnes, parkings, drive
              </p>
            </div>

            {/* Écrans spécifiques */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Factory className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-6">🧩 Écrans spécifiques ou sur mesure</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Écrans stretch (ultra panoramiques)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Écrans transparents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Écrans incurvés ou en format carré</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Moniteurs industriels pour environnement exigeant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessoires et Installation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Boxes className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold">🛠️ Accessoires et intégration complète</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Nous fournissons également tous les éléments complémentaires pour une installation clé-en-main :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Supports muraux, totems, pieds au sol, potences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Boîtiers Android ou Windows embarqués</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Lecteurs de contenus externes (mini PC, media player)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Câblage, alimentation, coffrets de protection</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Wrench className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold">🔧 Installation & support technique</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Nos équipes vous accompagnent de A à Z :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Étude de faisabilité et choix du matériel adapté</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Livraison et installation sur site</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Configuration, tests et formation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Maintenance préventive et support technique</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Équipements fiables */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Cog className="h-10 w-10 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold">🚀 Des équipements fiables et éprouvés</h2>
            </div>
            <p className="text-xl text-gray-600">
              Nous sélectionnons uniquement des écrans professionnels, certifiés pour un fonctionnement intensif,
              intérieur et extérieur avec un contrôle de la luminosité en fonction de l'ensoleillement.
            </p>
            <p className="mt-4 text-gray-600">
              Nous assurons également le suivi des pièces détachées et la continuité de service.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            📞 Vous avez un projet d'affichage dynamique ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nous sélectionnons uniquement des écrans professionnels, certifiés pour un fonctionnement intensif,
            en intérieur et extérieur avec contrôle de la luminosité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Demander une étude gratuite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Obtenir une recommandation personnalisée
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}