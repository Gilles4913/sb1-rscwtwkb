import React from 'react';
import { Building2, User, Server } from 'lucide-react';

export default function Legal() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Mentions légales
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Informations légales concernant le site a2display.fr
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Company Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">A. Éditeur du site</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <div className="mt-6 space-y-4">
                <div>
                  <p className="font-semibold">A2Display SAS</p>
                  <p>1 rue de la Caillardière, 49070 BEAUCOUZE, FRANCE</p>
                  <p>RCS Angers 824948277</p>
                  <p>Capital social : 50 000 euros</p>
                  <p>Téléphone : (+33) 9 84 31 11 94</p>
                  <p>Email : contact@a2display.fr</p>
                </div>
                <div>
                  <p className="font-semibold">Hébergement :</p>
                  <p>Netlify, Inc.</p>
                  <p>512 2nd Street, Fl 2</p>
                  <p>San Francisco, CA 94107</p>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Publication Director */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">B. Directeur de publication</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                Le directeur de la publication est Monsieur Arnaud PICHON, en sa qualité de Président de A2Display SAS.
              </p>
              <div className="mt-4">
                <a 
                  href="mailto:contact@a2display.fr"
                  className="text-blue-600 hover:underline"
                >
                  contact@a2display.fr
                </a>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Server className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">C. Protection des données</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p>
                Les informations personnelles collectées sur ce site sont traitées conformément à notre politique de confidentialité.
                Pour toute question concernant la protection de vos données, vous pouvez nous contacter via le formulaire de contact
                ou par email.
              </p>
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