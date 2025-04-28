import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Check } from 'lucide-react';

// Base64 encoded webhook URL
const encodedWebhook = "aHR0cHM6Ly9jaGF0Lmdvb2dsZWFwaXMuY29tL3YxL3NwYWNlcy9BQVFBLThyRVg1MC9tZXNzYWdlcz9rZXk9QUl6YVN5RGRJMGhDWnRFNnZ5U2pNbS1XRWZScTNDUHpxS3Fxc0hJJnRva2VuPVphbHpXM2FDV3hBaTlWbk5PYm8wdXRXZFlCTW1EMnNmYlloNThENy1oU28=";
const GOOGLE_CHAT_WEBHOOK = typeof window !== 'undefined'
  ? atob(encodedWebhook)
  : Buffer.from(encodedWebhook, 'base64').toString('utf-8');

type RequestType = 'information' | 'demonstration' | 'quote' | 'support';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    company: '',
    email: '',
    phone: '',
    requestType: 'information' as RequestType,
    message: '',
    acceptPolicy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const formattedMessage = {
      text:
        `📬 *Nouvelle demande de contact*\n\n` +
        `*Type de demande:* ${formData.requestType}\n` +
        `*Nom:* ${formData.lastName}\n` +
        `*Prénom:* ${formData.firstName}\n` +
        `*Société:* ${formData.company}\n` +
        `*Email:* ${formData.email}\n` +
        `*Téléphone:* ${formData.phone}\n` +
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
        email: '',
        phone: '',
        requestType: 'information',
        message: '',
        acceptPolicy: false
      });
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Un projet ? Une question ? Parlons-en.
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Notre équipe est à votre écoute pour toute demande d'information, de démonstration 
              ou de devis personnalisé. Nous vous répondrons rapidement !
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                {isSubmitted && (
                  <div className="bg-green-50 p-6 rounded-xl mb-8 flex items-start">
                    <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-green-800 font-semibold mb-1">
                        Votre message a été envoyé avec succès !
                      </h3>
                      <p className="text-green-700">
                        Notre équipe vous recontactera dans les plus brefs délais.
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
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Structure / Société
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
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
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de demande
                  </label>
                  <select
                    value={formData.requestType}
                    onChange={(e) => setFormData({...formData, requestType: e.target.value as RequestType})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="information">Demande d'information</option>
                    <option value="demonstration">Demande de démonstration</option>
                    <option value="quote">Demande de devis</option>
                    <option value="support">Support client</option>
                  </select>
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
                  />
                </div>

                <div className="mt-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      required
                      checked={formData.acceptPolicy}
                      onChange={(e) => setFormData({...formData, acceptPolicy: e.target.checked})}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      J'accepte la{' '}
                      <Link to="/confidentialite" className="text-blue-600 hover:underline">
                        politique de confidentialité
                      </Link>
                    </span>
                  </label>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">Coordonnées</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">A2Display</p>
                      <p>1 rue de la Caillardière</p>
                      <p>Beaucouzé 49070</p>
                      <p>France</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                    <a href="mailto:contact@a2display.fr" className="hover:text-blue-600">
                      contact@a2display.fr
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600 mr-3" />
                    <a href="tel:+33984311194" className="hover:text-blue-600">
                      +33 (0)9 84 31 11 94
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">
                  Vous pouvez aussi...
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    <span>Nous appeler directement</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    <span>Réserver une démo en ligne</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Demander une démonstration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}