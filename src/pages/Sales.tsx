import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, ShieldCheck, Package, Settings } from 'lucide-react';

export default function Sales() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Conditions Générales de Vente
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Conditions applicables à la vente des produits et services A2Display
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Définitions */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Article 1. Définitions</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <ul className="list-disc pl-6 space-y-3">
                <li><span className="font-semibold">Produit(s) :</span> L'ensemble des Logiciels et Matériels commercialisés par A2Display.</li>
                <li><span className="font-semibold">Matériel(s) :</span> L'ensemble d'équipement informatique commercialisés par A2Display.</li>
                <li><span className="font-semibold">Service(s) :</span> Toutes les prestations réalisées par A2Display pour le compte du Client y compris la formation, l'installation, l'hébergement, la maintenance et la location.</li>
                <li><span className="font-semibold">Logiciel :</span> L'ensemble des Logiciels A2Display dont A2Display a concédé une licence d'utilisation au Client.</li>
                <li><span className="font-semibold">Client :</span> L'entité juridique ayant passé une commande auprès d'A2Display.</li>
                <li><span className="font-semibold">Anomalie :</span> Désigne toute anomalie de fonctionnement autre que bloquante des Logiciels, notifiée par le pouvoir adjudicateur au titulaire, et reproductible par ce dernier.</li>
                <li><span className="font-semibold">Anomalie Bloquante :</span> Désigne toute anomalie rendant impossible l'utilisation d'une ou plusieurs fonctionnalités du système.</li>
              </ul>
            </div>
          </div>

          {/* Commandes et Livraison */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Package className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Articles 2-4. Commandes et Livraison</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mt-6 mb-4">Article 2. Généralités</h3>
              <p>Les présentes Conditions Générales de Ventes s'appliquent à toute commande d'un Produit, d'un Matériel ou d'un Service directement auprès d'A2Display (par messagerie électronique ou courrier).</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Article 3. Commandes</h3>
              <p>Toute commande passée auprès d'A2Display implique l'acceptation de toutes les clauses des présentes Conditions Générales de Ventes. Le contrat est réputé définitivement conclu dès la signature du bon de commande ou par acceptation écrite du devis par le Client.</p>

              <h3 className="text-xl font-semibold mt-6 mb-4">Article 4. Dispositions relatives aux matériels</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>Les Matériels seront livrés à l'adresse spécifiée dans le Bon de commande.</li>
                <li>Le Client procédera sous sa seule responsabilité à l'installation des Matériels, sauf recours à une prestation.</li>
                <li>A2Display demeure propriétaire des Matériels vendus jusqu'au paiement intégral du prix prévu.</li>
              </ul>
            </div>
          </div>

          {/* Services et Maintenance */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Settings className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Articles 5-6. Services et Maintenance</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mb-4">Support et Maintenance</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>Support disponible de 9h00 à 18h00 (heures France Métropolitaine)</li>
                <li>Contact possible par email (support@a2display.fr) ou téléphone (09 84 31 11 94)</li>
                <li>Intervention d'un technicien au plus tard à J+1</li>
                <li>Maintenance corrective et réglementaire sur la version en cours</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Hébergement Cloud</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>Environnement disponible 24h/24h, 7j/7j</li>
                <li>Sauvegardes régulières avec redondance</li>
                <li>A2Display n'intervient pas pour les problèmes liés à l'accès au réseau Internet</li>
              </ul>
            </div>
          </div>

          {/* Protection et Confidentialité */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <ShieldCheck className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Articles 7-9. Protection et Confidentialité</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <ul className="list-disc pl-6 space-y-3">
                <li>Respect du RGPD dans le traitement des données personnelles</li>
                <li>Protection des droits de propriété intellectuelle sur les Logiciels</li>
                <li>Confidentialité des informations échangées entre les parties</li>
              </ul>
            </div>
          </div>

          {/* Conditions commerciales */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Articles 10-23. Conditions commerciales</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <ul className="list-disc pl-6 space-y-3">
                <li>Prix exprimés en Euros hors taxes</li>
                <li>Paiement à 30 jours suivant la date de facture</li>
                <li>Modalités de paiement : virement bancaire, chèque, carte bancaire</li>
                <li>Garantie couverte par contrat de maintenance pour les Logiciels</li>
                <li>Attribution de compétence au tribunal de commerce d'Angers</li>
              </ul>
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