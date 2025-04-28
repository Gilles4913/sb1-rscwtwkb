import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Coins, GraduationCap, TrendingUp, Users, FileText, 
  School, Building2, Tv, Computer, HardDrive, ArrowRight, CheckCircle2, Check
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Base64 encoded webhook URL
const encodedWebhook = "aHR0cHM6Ly9jaGF0Lmdvb2dsZWFwaXMuY29tL3YxL3NwYWNlcy9BQVFBLThyRVg1MC9tZXNzYWdlcz9rZXk9QUl6YVN5RGRJMGhDWnRFNnZ5U2pNbS1XRWZScTNDUHpxS3Fxc0hJJnRva2VuPVphbHpXM2FDV3hBaTlWbk5PYm8wdXRXZFlCTW1EMnNmYlloNThENy1oU28=";
const GOOGLE_CHAT_WEBHOOK = typeof window !== 'undefined'
  ? atob(encodedWebhook)
  : Buffer.from(encodedWebhook, 'base64').toString('utf-8');

const Partners = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    company: '',
    activityType: '',
    email: '',
    phone: '',
    geoZone: '',
    message: '',
    wantDocs: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const formattedMessage = {
      text:
        `🤝 *Nouvelle demande de partenariat*\n\n` +
        `*Nom:* ${formData.lastName}\n` +
        `*Prénom:* ${formData.firstName}\n` +
        `*Société:* ${formData.company}\n` +
        `*Type d'activité:* ${formData.activityType}\n` +
        `*Email:* ${formData.email}\n` +
        `*Téléphone:* ${formData.phone}\n` +
        `*Zone géographique:* ${formData.geoZone}\n` +
        `*Documentation demandée:* ${formData.wantDocs ? 'Oui' : 'Non'}\n` +
        `*Message:*\n${formData.message}`
    };

    try {
      const response = await fetch(GOOGLE_CHAT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedMessage)
      });
      
      if (!response.ok) throw new Error('Webhook error');
      
      setIsSubmitted(true);
      setFormData({
        lastName: '',
        firstName: '',
        company: '',
        activityType: '',
        email: '',
        phone: '',
        geoZone: '',
        message: '',
        wantDocs: false
      });
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Collaboration professionnelle"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rejoignez notre réseau de partenaires
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Développons ensemble l'affichage dynamique de demain.
            </p>
            <a
              href="#partner-form"
              className="inline-flex items-center bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Devenir partenaire
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Pourquoi devenir partenaire */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous rejoindre ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Target className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Un produit simple et efficace</h3>
              <p className="text-gray-600">
                Une solution logicielle intuitive, accessible à tous types de clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Coins className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Un modèle économique gagnant</h3>
              <p className="text-gray-600">
                Bénéficiez de marges confortables et d'un modèle de licences récurrentes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <GraduationCap className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Un accompagnement de proximité</h3>
              <p className="text-gray-600">
                Formations, supports de vente, démonstrations : on vous équipe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Un marché en pleine croissance</h3>
              <p className="text-gray-600">
                L'affichage dynamique est en plein essor dans le public comme le privé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que nous vous apportons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Des outils concrets pour réussir</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            En tant que partenaire A2Display, vous disposez d'un kit complet pour vendre, 
            installer et valoriser nos solutions :
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Accès à un espace revendeur dédié",
              "Supports commerciaux : fiches, argumentaires, vidéos démo",
              "Formations régulières (techniques et commerciales)",
              "Accompagnement avant-vente & support client français",
              "Devis co-rédigés ou assistance projet sur demande"
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profils recherchés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Profils recherchés</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Nous collaborons avec des professionnels motivés et experts de leur secteur :
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Tv, text: "Intégrateurs audiovisuels" },
              { icon: Computer, text: "Agences digitales" },
              { icon: HardDrive, text: "Installateurs de matériel" },
              { icon: Building2, text: "SSII & prestataires IT" },
              { icon: School, text: "AMO, Bureaux d'études techniques" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <item.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="partner-form" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Intéressé par un partenariat gagnant-gagnant ?
            </h2>
            <p className="text-xl text-gray-600">
              Remplissez notre formulaire et discutons ensemble de votre activité.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            {isSubmitted && (
              <div className="bg-green-50 p-6 rounded-xl mb-8 flex items-start">
                <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-green-800 font-semibold mb-1">
                    Votre demande de partenariat a été envoyée avec succès !
                  </h3>
                  <p className="text-green-700">
                    Notre équipe va étudier votre candidature et vous recontacter rapidement pour échanger sur les opportunités de collaboration.
                  </p>
                </div>
              </div>
            )}

            {submitError && (
              <div className="bg-red-50 p-6 rounded-xl mb-8">
                <p className="text-red-800">
                  Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Société *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type d'activité *
              </label>
              <select
                required
                value={formData.activityType}
                onChange={(e) => setFormData({...formData, activityType: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionnez votre activité</option>
                <option value="audiovisual">Intégrateur audiovisuel</option>
                <option value="digital">Agence digitale</option>
                <option value="installer">Installateur matériel</option>
                <option value="it">SSII / Prestataire IT</option>
                <option value="consultant">AMO / Bureau d'études</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zone géographique *
              </label>
              <input
                type="text"
                required
                value={formData.geoZone}
                onChange={(e) => setFormData({...formData, geoZone: e.target.value})}
                placeholder="Ex: Île-de-France, Grand Ouest..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Décrivez votre activité et vos attentes..."
              />
            </div>

            <div className="mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.wantDocs}
                  onChange={(e) => setFormData({...formData, wantDocs: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Je souhaite recevoir la documentation revendeur
                </span>
              </label>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex-1 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Être rappelé
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Partners;