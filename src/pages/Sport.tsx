import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Trophy, Users, Megaphone, Newspaper, ArrowRight, CheckCircle2, MonitorSmartphone, PlaySquare, Medal } from 'lucide-react';

export default function Sport() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Stade sportif"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Donnez vie à vos clubs avec l'affichage dynamique
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Mettez en valeur vos membres, informez votre communauté et dynamisez vos événements
              avec des écrans connectés à vos activités sportives quotidiennes.
            </p>
          </div>
        </div>
      </section>

      {/* LED Panels Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Boostez la visibilité de vos sponsors avec nos panneaux LED linéaires
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Une solution moderne et dynamique pour valoriser vos partenaires
              </p>
              <p className="text-gray-600 mb-6">
                Offrez une visibilité maximale à vos sponsors grâce à nos panneaux LED linéaires, 
                spécialement conçus pour être installés en bordure de terrain. Que ce soit pour un 
                terrain de football, un gymnase de handball, un terrain de volley ou un parquet de 
                basket, nos solutions s'adaptent à toutes les configurations sportives.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-8">
                <p className="text-blue-800 font-medium">
                  🎯 Objectif : valoriser vos partenaires et générer de nouveaux revenus pour le club.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745825442/A2Display_-_affichage_Duynamique_-_Sport_-_Panneau_LED_bord_de_terrain_owm2lm.png"
                alt="Panneau LED dans un stade"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <p className="bg-blue-50 p-6 rounded-lg mb-8 text-blue-800 font-medium text-lg">
            La solution logiciel A2Display permet de mettre en avant vos sponsors et partenaires pendant les matchs, peu importe le format de l'écran. Exemple ci-dessous d'un affichage sur un panneau linéaire, peu importe la longueur de l'écran 10 mètres ou beaucoup plus.
          </p>

          <div className="w-full aspect-[10/1.5] mb-16">
            <iframe
              src="https://chenipan.a2display.fr/YtP5BSqVUTZGkd7wEINW4r6l"
              className="w-full h-full border-2 border-black"
              title="A2Display Sport"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">✅ Les avantages de nos panneaux LED</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3">Visibilité accrue</h4>
                <p className="text-gray-600">
                  Diffusion de messages animés, logos, vidéos promotionnelles… bien plus percutants qu'une simple bâche.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3">Mise à jour en temps réel</h4>
                <p className="text-gray-600">
                  Modifiez facilement les visuels diffusés selon les matchs, événements ou sponsors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3">Image moderne du club</h4>
                <p className="text-gray-600">
                  Montrez que votre club est tourné vers l'innovation et attire des partenaires premium.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3">Monétisation</h4>
                <p className="text-gray-600">
                  Proposez de nouveaux espaces publicitaires dynamiques pour booster les revenus.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1744900639/A2Display-mockup_panneau_led_sport_t7v2jd.webp"
                alt="Installation sportive avec LED"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">🏟️ Adaptés à tous les environnements</h3>
              <p className="text-gray-600 mb-8">
                Nos panneaux sont robustes, modulables, et conçus pour une installation intérieure 
                ou extérieure, avec une excellente visibilité de jour comme de nuit. Leur design 
                linéaire et discret s'intègre parfaitement en bordure de terrain sans gêner la 
                pratique sportive.
              </p>
              
              <h3 className="text-2xl font-bold mb-6">💼 Pour qui ?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                  <span>Associations sportives</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                  <span>Collectivités et gestionnaires d'installations sportives</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                  <span>Événements ponctuels ou compétitions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-8">
              Faites passer votre club à la vitesse supérieure
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Investir dans un panneau LED linéaire, c'est offrir à vos partenaires un support 
              à la hauteur de leur engagement, tout en modernisant vos installations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              👉 Contactez-nous pour une démonstration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-600">
                Affichez les horaires d'entraînement et les prochains matchs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Trophy className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Résultats</h3>
              <p className="text-gray-600">
                Partagez les scores du week-end et les classements en temps réel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Profils</h3>
              <p className="text-gray-600">
                Mettez en avant vos joueurs, équipes et réussites.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Megaphone className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sponsors</h3>
              <p className="text-gray-600">
                Valorisez vos partenaires et sponsors avec du contenu dédié.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Newspaper className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Actualités</h3>
              <p className="text-gray-600">
                Partagez les actualités de votre fédération et de votre club.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Medal className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Événements</h3>
              <p className="text-gray-600">
                Annoncez vos tournois, stages et événements sportifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions recommandées</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <MonitorSmartphone className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Écrans dynamiques</h3>
              <p className="text-gray-600 mb-4">
                Solutions adaptées pour les halls, espaces de restauration et tribunes.
                Installation professionnelle et gestion à distance.
              </p>
              <Link to="/materiel" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Découvrir nos écrans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <PlaySquare className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Contenu animé</h3>
              <p className="text-gray-600 mb-4">
                Diffusez vos vidéos de match, photos d'équipe et contenus dynamiques
                pour un plus grand impact.
              </p>
              <Link to="/software" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Voir le logiciel
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
              "Nous avons enfin une vraie plateforme pour nos sponsors et nos plannings sont
              visibles par tous."
            </p>
            <footer className="text-gray-600">
              <p className="font-semibold">Président</p>
              <p>Club de Football S.</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Formats d'affichage variés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Des formats d'affichage variés pour dynamiser votre communication sportive
              </h2>
              <p className="text-gray-600 mb-6">
                Avec A2Display, donnez vie à vos infrastructures sportives grâce à une grande variété de formats d'affichage adaptés à chaque besoin.
              </p>
              <p className="text-gray-600 mb-6">
                Que ce soit pour des panneaux LED linéaires en bord de terrain, des écrans géants dans les tribunes, des totems d'accueil pour les spectateurs, ou des moniteurs tactiles pour l'animation événementielle, notre logiciel pilote tous vos dispositifs en toute simplicité.
              </p>
              <p className="text-gray-600 mb-6">
                Diffusez en temps réel :
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                  <span>Sponsors et partenaires pendant les matchs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                  <span>Résultats en direct et classements</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                  <span>Animations de mi-temps et jeux concours</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                  <span>Consignes de sécurité et informations pratiques</span>
                </li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mt-8">
                <p className="text-blue-800 font-medium">
                  🎯 Multi-écrans, multi-formats, multi-sites : A2Display s'adapte à la taille de votre événement, du gymnase local au grand stade international. Une seule plateforme pour une infinité de possibilités visuelles sur tous vos écrans sportifs.
                </p>
              </div>
            </div>
            <div className="w-full aspect-video">
              <iframe
                src="https://chenipan.a2display.fr/ZD0L3a5jTQzIxXpwvYmt9gPE"
                className="w-full h-full border-2 border-black"
                title="A2Display Sport"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Modernisez la communication de votre club
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Voir une démo dans un contexte sportif
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/materiel"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Solutions pour clubs et associations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}