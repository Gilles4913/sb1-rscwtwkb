import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Clock, Sparkles, Leaf, Music2, ArrowRight, Store, MonitorSmartphone, Presentation, Tag, CheckCircle2 } from 'lucide-react';

export default function Retail() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Boutique moderne"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Un affichage qui attire, informe et transforme
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Dans les points de vente, l'affichage numérique valorise vos offres, 
              guide les clients et anime votre boutique avec modernité.
            </p>
          </div>
        </div>
      </section>

      {/* L'affichage dynamique au service de votre point de vente */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                🛍️ L'affichage dynamique au service de votre point de vente
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Dans un univers commercial en constante évolution, capter l'attention du client n'est plus un luxe, c'est une nécessité.
                Grâce à nos solutions d'écrans connectés, offrez une expérience d'achat moderne, fluide et immersive, tout en valorisant votre marque et vos offres.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745409639/A2Display%20-%20Retails%20-%20Affichage%20vitrine.webp"
                alt="Écran d'affichage dynamique en magasin"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valorisez vos produits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">🎯 Valorisez vos produits en temps réel</h2>
          <p className="text-xl text-gray-600 mb-8">
            Affichez vos promotions, nouveautés et meilleures ventes au bon endroit, au bon moment.
            Grâce à un pilotage centralisé ou local, vous pouvez adapter vos messages en fonction des heures, des stocks, ou des événements commerciaux.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">✅ Promotions du jour</h3>
              <p className="text-gray-600">Mettez en avant vos offres spéciales et réductions en cours.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">✅ Produits en vedette</h3>
              <p className="text-gray-600">Valorisez vos nouveautés et produits phares.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">✅ Cross-selling et up-selling visuel</h3>
              <p className="text-gray-600">Suggérez des produits complémentaires et options premium.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maximisez l'impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">📍 Maximisez l'impact en zones chaudes</h2>
              <p className="text-xl text-gray-600 mb-8">
                Placer un écran dans une vitrine, à l'entrée ou en tête de gondole, c'est créer un point d'attraction immédiat.
                Nos écrans haute luminosité attirent le regard même en plein jour, pour booster l'entrée en magasin ou inciter à l'achat.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745422499/A2Display_-_retails_-_Commerce_-_affichage_dynamique_-_vitrine_magasin_trxtzj.jpg"
                alt="Écran vitrine avec animation produit"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Créez du lien */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">🤝 Créez du lien avec vos clients</h2>
          <p className="text-xl text-gray-600 mb-8">Utilisez l'écran comme canal de communication de marque :</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                Mettez en avant votre univers, votre histoire, vos engagements (écoresponsabilité, fabrication locale, etc.)
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                Valorisez les avis clients ou vos réseaux sociaux
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                Humanisez l'expérience d'achat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gagnez du temps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">⏱️ Gagnez du temps pour vos équipes</h2>
          <p className="text-xl text-gray-600 mb-8">
            L'affichage dynamique permet aussi de diminuer la charge des équipes en diffusant de façon automatisée :
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">Les horaires d'ouverture</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">Les consignes sanitaires ou de sécurité</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">Les messages récurrents ou réglementaires</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 font-medium">
            Plus de réactivité, moins de papier, moins d'erreurs.
          </p>
        </div>
      </section>

      {/* Formats adaptés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">🧩 Des formats adaptés à chaque usage</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous proposons une large gamme d'écrans adaptés à tous les espaces :
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">Écrans vitrine haute luminosité</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">Totems et bornes interactives</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">Écrans encastrés ou suspendus</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">Murs d'images pour surfaces plus grandes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">Des écrans LED transparents pour vos vitrines</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">Écrans tactiles pour consultation de catalogue ou de stock</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gestion intelligente */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">🧠 Une gestion simple et intelligente</h2>
          <p className="text-xl text-gray-600 mb-8">Notre solution vous permet de :</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Planifier vos campagnes d'affichage à l'avance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cibler certains magasins ou zones</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Mettre à jour le contenu à distance, en quelques clics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Analyser les performances des diffusions</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 font-medium">
            🎛️ Interface intuitive, prise en main rapide, assistance incluse.
          </p>
        </div>
      </section>

      {/* Boostez vos ventes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">📈 Boostez vos ventes et l'image de votre enseigne</h2>
          <p className="text-xl text-gray-600 mb-8">
            L'affichage dynamique n'est pas qu'un outil technologique, c'est un levier de performance commerciale :
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">Attention</h3>
              <p className="text-gray-600">Captez le regard et l'intérêt des clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">Mémorisation</h3>
              <p className="text-gray-600">Renforcez l'impact de vos messages</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-3">Intention d'achat</h3>
              <p className="text-gray-600">Déclenchez le passage à l'acte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Réseaux de boutiques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">🔄 Pour les réseaux de boutiques</h2>
            <p className="text-xl text-gray-600 mb-8">
              Synchronisez l'affichage dans toutes vos boutiques tout en permettant une personnalisation locale.
              Idéal pour les franchises, les réseaux de distribution ou les grandes enseignes.
            </p>
          </div>
        </div>
      </section>

      {/* Expérience visuelle */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">👁️ L'expérience visuelle comme facteur de différenciation</h2>
            <p className="text-xl text-gray-600 mb-8">
              Aujourd'hui, un client entre aussi pour l'expérience qu'il va vivre. Un magasin animé, vivant, 
              avec des écrans bien intégrés est perçu comme plus moderne, plus attractif, plus fiable.
            </p>
            <p className="text-blue-600 font-medium">
              💡 Même de petits écrans bien placés font la différence.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions recommandées */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions recommandées</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <MonitorSmartphone className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Écrans vitrine</h3>
              <p className="text-gray-600 mb-4">
                Captez l'attention des passants avec des écrans haute luminosité.
              </p>
              <Link to="/materiel" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Voir les écrans vitrine
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Presentation className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Écrans rayon</h3>
              <p className="text-gray-600 mb-4">
                Informez et guidez vos clients au plus près des produits.
              </p>
              <Link to="/materiel" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Découvrir les supports
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ShoppingBag className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Totems interactifs</h3>
              <p className="text-gray-600 mb-4">
                Proposez des démonstrations produits et informations détaillées.
              </p>
              <Link to="/materiel" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Explorer les totems
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-2xl font-medium text-gray-900 mb-8">
              "On a vu l'impact dès la première semaine : plus de visiteurs s'arrêtent en vitrine, 
              et nos promos sont bien mieux vues."
            </p>
            <footer className="text-gray-600">
              <p className="font-semibold">Gérante</p>
              <p>Boutique Éco Déco</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Transformez votre point de vente
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Demander une démonstration pour votre commerce
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/materiel"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Voir les écrans pour points de vente
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}