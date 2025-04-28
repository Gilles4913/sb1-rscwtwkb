import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, HeartPulse, Users, Bell, Newspaper, MonitorSmartphone, Monitor as TouchScreen, ArrowRight, CheckCircle2, Clock, Activity, MessageSquare, Tv } from 'lucide-react';
import VideoModal from '../components/VideoModal';

export default function Sante() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="pt-20">
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://youtu.be/j6lACzXrIbw"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Résidence senior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Créer du lien, apaiser, informer
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              L'affichage dynamique est un outil puissant au service du bien-être des résidents,
              du personnel et des familles. En établissement de santé, il facilite l'organisation,
              rassure et améliore le quotidien.
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
              <Calendar className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Planning des activités</h3>
              <p className="text-gray-600">
                Affichez les animations, ateliers et rendez-vous de la semaine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Bell className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Messages importants</h3>
              <p className="text-gray-600">
                Diffusez les informations essentielles et rappels du quotidien.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Activity className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Bien-être et santé</h3>
              <p className="text-gray-600">
                Partagez des conseils santé, exercices et recommandations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MessageSquare className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Communication familles</h3>
              <p className="text-gray-600">
                Facilitez le lien avec les proches et valorisez les moments de vie.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Menus et services</h3>
              <p className="text-gray-600">
                Affichez les menus du jour et informations pratiques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Tv className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Contenus apaisants</h3>
              <p className="text-gray-600">
                Diffusez des contenus relaxants dans les espaces communs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La borne tactile au cœur de la vie de la résidence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            La borne tactile au cœur de la vie de la résidence
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6">Un accueil chaleureux et moderne</h3>
              <p className="text-gray-600 mb-6">
                La borne tactile installée dans le hall permet aux familles et aux résidents de :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Lire les infos pratiques de la résidence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Découvrir les menus de la semaine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Suivre le planning des animations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Célébrer les anniversaires du mois</span>
                </li>
              </ul>
              <p className="mt-6 text-blue-600 font-medium">
                ➕ Un véritable tableau d'affichage digital, clair, dynamique et adapté à tous.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors mt-8"
              >
                Demander une démonstration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745323615/IMG_0892_r9tmsu.jpg"
                alt="Borne d'accueil et d'information"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745323619/IMG_0894_sr5oce.jpg"
                alt="Borne pour jeux, karaoké et musique"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6">Un outil d'animation ludique et accessible</h3>
              <p className="text-gray-600 mb-6">
                Grâce à la borne, les animateurs peuvent proposer :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Des jeux adaptés (loto, mémory, quizz, jeux de réflexion)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Des séances de karaoké ou de musique pour stimuler les souvenirs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Des contenus divertissants partagés en groupe ou en individuel</span>
                </li>
              </ul>
              <p className="mt-6 text-blue-600 font-medium">
                ✅ Un usage simple, même pour les non-initiés, pour créer du lien et égayer le quotidien.
              </p>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors mt-8 font-medium"
              >
                Les fonctionnalités en vidéo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Les bénéfices pour votre établissement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Pour les résidents</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Meilleure orientation dans l'établissement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Participation accrue aux activités</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Maintien du lien social et familial</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Réduction du stress et de l'anxiété</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Pour le personnel</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Gain de temps sur la diffusion d'informations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Meilleure organisation des activités</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Communication facilitée avec les familles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Image moderne de l'établissement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Des fonctionnalités adaptées au secteur</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-4">Gestion des contenus</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Planification des activités</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Menus de la semaine</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Photos des événements</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-4">Communication</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Messages d'urgence</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Informations familles</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Actualités de l'établissement</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold mb-4">Bien-être</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Contenus relaxants</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Exercices cognitifs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span>Animations interactives</span>
                </li>
              </ul>
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
                Solutions adaptées pour les halls d'accueil, salles communes et couloirs.
                Installation discrète et pilotage centralisé.
              </p>
              <Link to="/materiel" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Découvrir nos écrans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <TouchScreen className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Bornes interactives</h3>
              <p className="text-gray-600 mb-4">
                Pour l'orientation des visiteurs et l'accès aux informations.
                Interface adaptée aux seniors.
              </p>
              <Link to="/materiel" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Voir les bornes
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
              "L'affichage dynamique a vraiment amélioré la communication avec nos résidents
              et leurs familles. C'est devenu un outil indispensable pour notre établissement."
            </p>
            <footer className="text-gray-600">
              <p className="font-semibold">Directrice</p>
              <p>EHPAD Les Jardins du Lac</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Améliorez le bien-être de vos résidents
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Voir une démo dans votre établissement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/materiel"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Découvrir les solutions adaptées
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}