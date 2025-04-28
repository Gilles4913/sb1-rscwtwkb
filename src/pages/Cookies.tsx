import React from 'react';
import { Cookie, Shield, Settings, Info } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Politique de cookies
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Utilisation des cookies sur le site a2display.fr
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="card">
            <div className="flex items-center mb-6">
              <Cookie className="h-8 w-8 text-brand-blue mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">
                Introduction
              </h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Cette politique de cookies explique comment A2Display utilise les cookies et technologies similaires pour vous reconnaître lorsque vous visitez notre site web.
              </p>
            </div>
          </div>

          {/* What are cookies */}
          <div className="card">
            <div className="flex items-center mb-6">
              <Info className="h-8 w-8 text-brand-blue mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">
                Qu'est-ce qu'un cookie ?
              </h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Un cookie est un petit fichier texte qui est placé sur votre ordinateur ou appareil mobile lorsque vous visitez un site web.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-6">
                  Types de cookies utilisés
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-lg mb-3">
                      Cookies essentiels
                    </h4>
                    <p className="text-gray-600">
                      Nécessaires au fonctionnement du site. Ils vous permettent de naviguer sur le site et d'utiliser ses fonctionnalités.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-lg mb-3">
                      Cookies analytiques
                    </h4>
                    <p className="text-gray-600">
                      Nous permettent d'analyser l'utilisation du site pour en améliorer les performances et la conception.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-lg mb-3">
                      Cookies fonctionnels
                    </h4>
                    <p className="text-gray-600">
                      Permettent de mémoriser vos choix et préférences pour une meilleure expérience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Management */}
          <div className="card">
            <div className="flex items-center mb-6">
              <Settings className="h-8 w-8 text-brand-blue mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">
                Gestion des cookies
              </h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8">
                Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et paramétrer la plupart des navigateurs pour les bloquer.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  Paramètres par navigateur
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a 
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img 
                      src="https://www.google.com/chrome/static/images/chrome-logo.svg"
                      alt="Chrome"
                      className="w-8 h-8 mr-3"
                    />
                    <span className="font-medium">Google Chrome</span>
                  </a>
                  <a 
                    href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img 
                      src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-sm.f2523d97cbe0.png"
                      alt="Firefox"
                      className="w-8 h-8 mr-3"
                    />
                    <span className="font-medium">Mozilla Firefox</span>
                  </a>
                  <a 
                    href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img 
                      src="https://www.apple.com/safari/images/overview/icon_safari__gkv7ydwk8uqy_large.png"
                      alt="Safari"
                      className="w-8 h-8 mr-3"
                    />
                    <span className="font-medium">Safari</span>
                  </a>
                  <a 
                    href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img 
                      src="https://edgestatic.azureedge.net/welcome/static/favicon.ico"
                      alt="Edge"
                      className="w-8 h-8 mr-3"
                    />
                    <span className="font-medium">Microsoft Edge</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-brand-gray rounded-xl p-8">
            <p className="text-gray-600">
              Pour toute question concernant notre utilisation des cookies, veuillez nous contacter à :
            </p>
            <div className="mt-4">
              <a 
                href="mailto:contact@a2display.fr" 
                className="text-brand-blue hover:underline font-medium"
              >
                contact@a2display.fr
              </a>
            </div>
          </div>

          {/* Last Update */}
          <div className="text-sm text-gray-500 text-center">
            Dernière mise à jour : 15/02/2024
          </div>
        </div>
      </div>
    </div>
  );
}