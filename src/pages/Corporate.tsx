import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calendar, LineChart, Cloud, Factory, Users, ArrowRight, CheckCircle2, MonitorSmartphone, Globe2 } from 'lucide-react';

export default function Corporate() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Espace de travail moderne"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Une communication interne qui fait sens
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              L'affichage dynamique est un atout puissant pour informer vos équipes, 
              valoriser vos initiatives et renforcer la culture d'entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Cas d'usage typiques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Messages RH</h3>
              <p className="text-gray-600">
                Diffusez les informations RH, sécurité, recrutements et événements internes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calendar className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Infos du jour</h3>
              <p className="text-gray-600">
                Partagez les anniversaires, planning de la semaine et actualités internes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <LineChart className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">KPIs et chiffres clés</h3>
              <p className="text-gray-600">
                Visualisez en temps réel les indicateurs de performance de l'activité.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Cloud className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Infos dynamiques</h3>
              <p className="text-gray-600">
                Météo, transports, flux RSS pour dynamiser vos espaces de travail.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Factory className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Production</h3>
              <p className="text-gray-600">
                Tableaux d'affichage pour les ateliers et zones de production.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multi-sites</h3>
              <p className="text-gray-600">
                Communication harmonisée entre tous vos établissements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Borne d'accueil interactive */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                🛬 Borne d'accueil interactive : une première impression professionnelle
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Accueillez vos visiteurs avec modernité, qu'ils aient un rendez-vous ou non.
                Notre borne tactile autonome s'installe à l'entrée de vos locaux pour fluidifier les arrivées, 
                renforcer la sécurité, et offrir une expérience d'accueil fluide et intuitive.
              </p>
              <h3 className="text-xl font-bold mb-4">✅ Fonctionnalités principales :</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Enregistrement des visiteurs avec ou sans RDV</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Notification automatique des collaborateurs concernés</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Impression de badge ou QR code d'accès</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Affichage des consignes de sécurité ou documents à signer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Statistiques de fréquentation</span>
                </li>
              </ul>
              <p className="mt-6 text-blue-600 font-medium">
                Une solution idéale pour les entreprises multisites, les sièges sociaux ou les espaces partagés.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1744900002/A2Display-mockup_pupire_accueil_corporate_mc9rxe.webp"
                alt="Borne d'accueil interactive"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Écrans d'affichage internes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1744984911/%C3%89cran_Non_Tactile-R%C3%A9gion_Pays_de_la_Loire-2024_unn1ya.webp"
                alt="Écran d'affichage interne"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">
                🖥️ Écrans d'affichage internes : informez et engagez vos collaborateurs
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transformez vos écrans en véritables relais de communication interne.
                Dans les espaces de pause, couloirs, bureaux ou ateliers, nos solutions d'affichage dynamique 
                permettent de diffuser les informations clés de l'entreprise en temps réel.
              </p>
              <h3 className="text-xl font-bold mb-4">✅ Contenus possibles :</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Infos RH, planning, anniversaires, événements internes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Résultats, chiffres clés, indicateurs de performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Messages de prévention ou de sécurité</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Diffusion de contenus multimédias ou flux en direct</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>RSE, Livret d'accueil, Organigramme, Annuaire/Trombinoscope</span>
                </li>
              </ul>
              <p className="mt-6 text-blue-600 font-medium">
                Un canal de communication moderne pour renforcer la cohésion et garder vos équipes bien informées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions recommandées */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions recommandées</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <MonitorSmartphone className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Écrans professionnels</h3>
              <p className="text-gray-600 mb-4">
                Solutions adaptées pour les open-spaces, cafétérias et halls d'entrée. 
                Installation discrète et pilotage centralisé.
              </p>
              <Link to="/materiel" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Découvrir nos écrans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Globe2 className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Solution connectée</h3>
              <p className="text-gray-600 mb-4">
                Pilotage multi-sites et intégration avec vos outils (intranet, Google Calendar).
              </p>
              <Link to="/software" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Découvrir le logiciel
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
              "Nous avons installé des écrans dans 5 de nos agences. La communication est plus 
              fluide et les équipes sont connectées à l'info utile."
            </p>
            <footer className="text-gray-600">
              <p className="font-semibold">Directeur de site</p>
              <p>Groupe XY</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Modernisez votre communication d'entreprise
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Voir une démo personnalisée
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/materiel"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Découvrir nos écrans adaptés
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}