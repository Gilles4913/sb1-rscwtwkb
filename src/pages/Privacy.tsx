import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, UserCheck, Database, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Politique de confidentialité
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Protection et traitement de vos données personnelles
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Préambule</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Cette politique de confidentialité s'applique au site : a2display.fr.
              </p>
              <p className="text-gray-600 mt-4">
                La présente politique de confidentialité a pour but d'exposer aux utilisateurs du site :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>La manière dont sont collectées et traitées leurs données à caractère personnel</li>
                <li>Quels sont les droits des utilisateurs concernant ces données</li>
                <li>Qui est responsable du traitement des données à caractère personnel collectées</li>
                <li>A qui ces données sont transmises</li>
                <li>La politique du site en matière de fichiers "cookies"</li>
              </ul>
            </div>
          </div>

          {/* Data Collection */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Database className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Données collectées</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Les données à caractère personnel collectées sur le site a2display.fr sont les suivantes :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Adresse email</li>
                <li>Nom de l'entreprise</li>
                <li>Nom et Prénom</li>
                <li>Numéro de téléphone</li>
              </ul>
              <p className="text-gray-600 mt-6">
                Ces données sont collectées lorsque l'utilisateur effectue l'une des opérations suivantes sur le site :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Renseignement du formulaire de contact</li>
              </ul>
              <p className="text-gray-600 mt-6">
                Le responsable du traitement conservera ces données pour une durée de 5 ans.
              </p>
            </div>
          </div>

          {/* User Rights */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <UserCheck className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Droits de l'utilisateur</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Conformément à la réglementation concernant le traitement des données à caractère personnel,
                l'utilisateur possède les droits suivants :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-4 text-gray-600">
                <li>
                  <span className="font-semibold">Droit d'accès, de rectification et droit à l'effacement</span>
                  <p className="mt-2">
                    L'utilisateur peut prendre connaissance, mettre à jour, modifier ou demander la suppression 
                    des données le concernant par email à contact@a2display.fr
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Droit à la portabilité des données</span>
                  <p className="mt-2">
                    L'utilisateur a le droit de demander la portabilité de ses données personnelles vers un autre service.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Droit à la limitation et à l'opposition du traitement</span>
                  <p className="mt-2">
                    L'utilisateur a le droit de demander la limitation ou de s'opposer au traitement de ses données 
                    par le site, sans que le site ne puisse refuser, sauf à démontrer l'existence de motifs légitimes et impérieux.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Sécurité des données</h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Le responsable du traitement des données s'engage à protéger les données à caractère personnel 
                collectées, à ne pas les transmettre à des tiers sans que l'utilisateur n'en ait été informé et 
                à respecter les finalités pour lesquelles ces données ont été collectées.
              </p>
              <p className="text-gray-600 mt-4">
                De plus, le responsable du traitement des données s'engage à notifier l'utilisateur en cas de 
                rectification ou de suppression des données, à moins que cela n'entraîne pour lui des formalités, 
                coûts et démarches disproportionnés.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-gray-600">
              Pour toute information complémentaire ou exercice de vos droits, vous pouvez contacter le responsable 
              du traitement des données :
            </p>
            <div className="mt-4">
              <p className="font-semibold">Le Directeur de publication</p>
              <a href="mailto:contact@a2display.fr" className="text-blue-600 hover:underline">
                contact@a2display.fr
              </a>
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