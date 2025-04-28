import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, Shield, Users, Globe } from 'lucide-react';

export default function Terms() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Conditions applicables à l'utilisation du site a2display.fr
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Informations légales */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Article 1. Informations légales</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                En vertu de l'article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé dans cet article l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-semibold">Le site a2display.fr est édité par :</p>
                  <p>A2Display SAS</p>
                  <p>1 rue de la Caillardière, 49070 BEAUCOUZE, FRANCE</p>
                  <p>Immatriculée au 82494827700028 RCS Angers</p>
                  <p>Téléphone : 09 84 31 11 94</p>
                  <p>Email : contact@a2display.fr</p>
                </div>
                <div>
                  <p className="font-semibold">Le site a2display.fr est hébergé par :</p>
                  <p>Netlify, Inc.</p>
                  <p>512 2nd Street, Fl 2</p>
                  <p>San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>

          {/* Présentation et Contact */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Articles 2-3. Présentation et Contact</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mb-4">Article 2. Présentation du site</h3>
              <p>
                Le site a2display.fr a pour objet : Service en ligne en mode SAAS pour gérer de l'affichage dynamique sur les écrans.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Article 3. Contact</h3>
              <p>
                Pour toute question ou demande d'information concernant le site, ou tout signalement de contenu ou d'activités illicites, l'utilisateur peut contacter l'éditeur à l'adresse e-mail suivante : contact@a2display.fr ou adresser un courrier recommandé avec accusé de réception à : A2Display SAS – 1 rue de la Caillardière, 49070 BEAUCOUZE, FRANCE
              </p>
            </div>
          </div>

          {/* Conditions d'utilisation */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Articles 4-6. Conditions d'utilisation</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mb-4">Article 4. Acceptation des conditions d'utilisation</h3>
              <p>
                L'accès et l'utilisation du site sont soumis à l'acceptation et au respect des présentes Conditions Générales d'Utilisation. L'éditeur se réserve le droit de modifier, à tout moment et sans préavis, le site et des services ainsi que les présentes CGU.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Article 5. Accès et navigation</h3>
              <p>
                L'éditeur met en œuvre les solutions techniques à sa disposition pour permettre l'accès au site 24 heures sur 24, 7 jours sur 7. Il pourra néanmoins à tout moment suspendre, limiter ou interrompre l'accès au site ou à certaines pages de celui-ci afin de procéder à des mises à jours, des modifications de son contenu ou tout autre action jugée nécessaire au bon fonctionnement du site.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Article 6. Gestion du site</h3>
              <p>Pour la bonne gestion du site, l'éditeur pourra à tout moment :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Suspendre, interrompre ou limiter l'accès à tout ou partie du site</li>
                <li>Supprimer toute information pouvant en perturber le fonctionnement</li>
                <li>Suspendre le site afin de procéder à des mises à jour</li>
              </ul>
            </div>
          </div>

          {/* Services et Responsabilités */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Articles 7-12. Services et Responsabilités</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Article 7. Services réservés aux utilisateurs inscrits</h3>
                  <p>L'accès à certains services est conditionné par l'inscription de l'utilisateur. L'inscription et l'accès aux services du site sont réservés exclusivement aux personnes physiques capables juridiquement, ayant rempli et validé le formulaire d'inscription.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Article 8-9. Responsabilités et liens hypertextes</h3>
                  <p>L'éditeur n'est responsable que du contenu qu'il a lui-même édité. Les liens hypertextes présents sur le site peuvent renvoyer vers d'autres sites internet sur lesquels A2Display n'exerce pas de contrôle.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Articles 10-12. Confidentialité et propriété intellectuelle</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Le site dispose d'une politique de confidentialité décrivant le traitement des données personnelles</li>
                    <li>Les contenus du site sont protégés par les lois relatives à la propriété intellectuelle</li>
                    <li>Tout litige en relation avec l'utilisation du site est soumis au droit français</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Last Update */}
          <div className="text-sm text-gray-500 text-center">
            Dernière mise à jour : 15/02/2022
          </div>
        </div>
      </div>
    </div>
  );
}