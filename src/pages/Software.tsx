import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Calendar, Layers, Globe2, Building, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Software() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Le logiciel d'affichage A2Display
              <span className="block text-2xl md:text-3xl mt-2 font-normal">
                Simple, puissant, connecté.
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Conçu pour les collectivités, entreprises et établissements de toute taille, 
              notre logiciel d'affichage dynamique vous permet de piloter tous vos écrans 
              à distance, en toute simplicité.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Fonctionnalités principales</h2>
            <p className="text-xl text-gray-600">
              Tout est centralisé : créez, programmez, diffusez en quelques clics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Layout className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Création de contenus</h3>
              <p className="text-gray-600">
                Textes, images, vidéos, flux RSS, météo, réseaux sociaux, alertes, et bien plus encore.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calendar className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Planification intuitive</h3>
              <p className="text-gray-600">
                Calendrier glisser-déposer pour programmer vos diffusions simplement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Layers className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Scénarisation avancée</h3>
              <p className="text-gray-600">
                Transitions, zones d'affichage, horaires intelligents personnalisables.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Globe2 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Pilotage à distance</h3>
              <p className="text-gray-600">
                Interface web accessible depuis n'importe quel appareil, en toute sécurité.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multi-écrans / Multi-sites</h3>
              <p className="text-gray-600">
                Gérez tous vos lieux depuis une seule interface centralisée.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <AlertCircle className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Messages d'urgence</h3>
              <p className="text-gray-600">
                Affichage prioritaire instantané en cas d'événement important.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Preview and Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Le Logiciel A2Display</h3>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1744984713/A2Display-mockup_application_a2display_pc_zfh56a.webp"
                  alt="Interface A2Display"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Avantages clés</h2>
              <div className="grid gap-4">
                {[
                  'Aucun besoin de compétence technique',
                  'Mises à jour régulières incluses',
                  'Support client basé en France',
                  '100% compatible écrans tactiles et non tactiles'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ce qu'ils en disent</h2>
            <div>
              <blockquote className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-xl font-medium text-gray-900 mb-8">
                  "Grâce à A2Display, notre communication est plus fluide et automatisée. 
                  Même nos agents peu à l'aise avec l'informatique s'en sortent très bien !"
                </p>
                <footer className="text-gray-600">
                  <p className="font-semibold">Service communication</p>
                  <p>Ville de Saumur</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Essayez notre logiciel dès maintenant !
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Demander une démonstration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contactez notre équipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}