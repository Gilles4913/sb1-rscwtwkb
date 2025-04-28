import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, Building, AlertTriangle, MapPin, QrCode, FileText, 
  ArrowRight, CheckCircle2, MonitorSmartphone, Landmark, Scale,
  MonitorPlay, Building2, Tv, Globe
} from 'lucide-react';

export default function Collectivites() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Mairie"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              L'affichage numérique au service des citoyens et de la légalité
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Informez, engagez, et affichez légalement en toute simplicité : bornes, site web, panneaux LED, écrans intérieurs…
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Demander une démonstration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Affichage légal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold">Affichage légal en 1 clic, conforme et moderne</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Publiez vos actes officiels (arrêtés, délibérations, convocations...) automatiquement :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>sur une borne physique tactile</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>sur une page dédiée du site internet communal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>avec historique et archivage automatique</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>sans double saisie, via une interface simple</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1744900042/A2Display_borne_tctl_ext-m%C3%A9ru-2025-SQUARE_rhn33s.webp"
                alt="Borne interactive d'affichage légal"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testez par vous-même */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Testez par vous-même</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Sélectionnez une ville</h3>
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => {
                  const iframe = document.getElementById('city-display') as HTMLIFrameElement;
                  if (iframe) {
                    iframe.src = e.target.value;
                  }
                }}
                defaultValue="https://stream.a2display.fr/MZiqtIGPusDYoCQFln2Ty675"
              >
                <option value="https://stream.a2display.fr/MZiqtIGPusDYoCQFln2Ty675">Ville de Trélazé</option>
                <option value="https://stream.a2display.fr/JXlDmkf7dRYHBWeAunpaUF60">Ville de Meysse</option>
                <option value="https://stream.a2display.fr/evVqwkIx3tjSuadB7zbTGyO8">Ville de Solliès-Pont</option>
              </select>
              <p className="mt-4 text-gray-600">
                Découvrez en direct l'affichage légal de ces communes.
              </p>
              
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-gray-700 font-medium underline">Volume de traitement</p>
                  <p className="text-gray-600 mt-2">
                    Nous traitons entre 3000 et 5000 documents par jour ouvrés.
                    Les documents sont stockés en France par un des plus gros hébergeur européen.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-medium underline">Comment fonctionne le traitement des fichiers ?</p>
                  <p className="text-gray-600 mt-2">
                    Un certificat électronique de type cachet serveur permet le scellement des données. Il certifie le contenu d'un document.
                    Cela signifie que l'authenticité et l'intégrité du document ou des données sont garanties.
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>L'authenticité signifie que l'émetteur des données est identifié de manière certaine.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>L'intégrité du document permet de prouver qu'aucune de ces données n'a pu être modifiée.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-600">
                    Tous nos documents sont infalsifiables conformément à la loi.
                    A tout moment, il est possible de télécharger les certificats d'affichage et de purge du délai de recours par des tiers.
                  </p>
                  <p className="text-gray-600 mt-3">
                    Par exemple, passé 2 mois pour les permis de construire, le délai de recours est dépassé, et automatiquement le document n'est plus affiché.
                    On peut néanmoins retrouver le document avec la fonctionnalité « Recherche ».
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-center font-bold mb-4">Je suis cliquable</p>
              <iframe
                id="city-display"
                src="https://stream.a2display.fr/MZiqtIGPusDYoCQFln2Ty675"
                className="w-2/3 mx-auto aspect-[9/16] border-2 border-black rounded-lg"
                title="Affichage légal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Panneaux LED */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1744987070/Panneau_LED-Herbignac-2022-1_phdmpy.webp"
                alt="Panneau LED"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <MonitorPlay className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold">Diffusez vos messages en temps réel sur vos panneaux LED</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Avec A2Display, programmez et diffusez :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Alertes météo / circulation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Infos de la vie locale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Annonces culturelles ou sportives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Infos de sécurité ou de prévention</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="flex items-center text-blue-800">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Panneaux LED muraux ou sur poteau
                </p>
                <p className="flex items-center text-blue-800 mt-2">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Pilotés depuis le même logiciel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Une application mobile pour une commune connectée et proche de ses citoyens
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Informer, alerter, engager : la commune dans la poche de chaque habitant
              </p>
              <p className="text-gray-600 mb-6">
                Grâce à notre application mobile dédiée, votre commune entre pleinement dans l'ère du numérique de proximité. 
                Offrez à vos administrés et visiteurs un accès direct, pratique et instantané à toutes les informations 
                utiles de la vie locale.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Application mobile communale"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">📲 Des fonctionnalités pensées pour la vie quotidienne</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3">Notifications push</h4>
                <p className="text-gray-600">
                  Tenez vos citoyens informés en temps réel (alertes météo, travaux, événements, urgences…).
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3">Agenda local</h4>
                <p className="text-gray-600">
                  Diffusez facilement les événements de la commune.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3">Actualités</h4>
                <p className="text-gray-600">
                  Partagez les dernières nouvelles de la mairie, des écoles, des associations…
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3">Infos pratiques</h4>
                <p className="text-gray-600">
                  Horaires, contacts, démarches, menus de cantine, lieux publics…
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-3">Participation citoyenne</h4>
                <p className="text-gray-600">
                  Sondages, signalements, appels à bénévoles…
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-6">👥 Une application pour tous</h3>
              <p className="text-gray-600 mb-8">
                Que ce soit pour suivre les actualités locales, s'informer lors d'un passage en ville, 
                ou rester en contact au quotidien, l'application est un outil simple, utile et accessible 
                à tous, y compris les populations éloignées du numérique grâce à son interface intuitive.
              </p>
              
              <h3 className="text-2xl font-bold mb-6">🤝 Une commune réactive et moderne</h3>
              <p className="text-gray-600 mb-8">
                Avec les notifications ciblées, communiquez rapidement avec vos administrés et gagnez en 
                efficacité. Une alerte à diffuser ? Une information urgente à transmettre ? Quelques 
                secondes suffisent pour prévenir toute la population.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-8">
              Créez du lien et valorisez votre action locale
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              L'application mobile devient un canal direct entre la mairie et les citoyens. 
              Elle reflète une collectivité à l'écoute, réactive, et tournée vers l'avenir.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              👉 Découvrir une démonstration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vos usages concrets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Vos usages concrets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Hall de mairie</h3>
              <p className="text-gray-600">Écran d'accueil</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FileText className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Salle du conseil</h3>
              <p className="text-gray-600">Écran pour délibérations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MonitorSmartphone className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Borne extérieure</h3>
              <p className="text-gray-600">Affichage légal et orientation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Tv className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">LED sur place publique</h3>
              <p className="text-gray-600">Alertes & actus</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Globe className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Site internet</h3>
              <p className="text-gray-600">Affichage légal synchronisé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-2xl font-medium text-gray-900 mb-8">
              "A2Display a totalement modernisé notre communication municipale tout en respectant le cadre légal. L'outil est simple et efficace."
            </p>
            <footer className="text-gray-600">
              <p className="font-semibold">Chargée de com</p>
              <p>Mairie des bois d'Anjou</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Et si on simplifiait votre affichage légal et votre communication locale ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Demander une démonstration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/materiel"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Voir le matériel recommandé
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}