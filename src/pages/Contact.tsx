import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Contact() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('contacts').insert([formData]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({ prenom: '', nom: '', email: '', telephone: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error:', error);
      alert('Erreur lors de l\'envoi du formulaire');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nous contacter</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white text-sm font-semibold mb-2 block">Prénom</label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="w-full bg-purple-800 bg-opacity-50 border border-purple-600 border-opacity-50 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-400 focus:border-opacity-100 transition-colors"
                  placeholder="Votre prénom"
                />
              </div>

              <div>
                <label className="text-white text-sm font-semibold mb-2 block">Nom</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full bg-purple-800 bg-opacity-50 border border-purple-600 border-opacity-50 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-400 focus:border-opacity-100 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="text-white text-sm font-semibold mb-2 block">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-purple-800 bg-opacity-50 border border-purple-600 border-opacity-50 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-400 focus:border-opacity-100 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="text-white text-sm font-semibold mb-2 block">Téléphone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full bg-purple-800 bg-opacity-50 border border-purple-600 border-opacity-50 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-400 focus:border-opacity-100 transition-colors"
                  placeholder="Votre numéro"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-500 disabled:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all mt-8"
              >
                {loading ? 'Envoi en cours...' : 'Envoyer'}
              </button>

              {submitted && (
                <div className="bg-green-900 bg-opacity-50 border border-green-500 text-green-200 px-4 py-3 rounded-lg">
                  Message envoyé avec succès!
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg border border-purple-600 border-opacity-30">
              <div className="flex items-start gap-4 mb-6">
                <Phone className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold">(tel)</p>
                  <p className="text-gray-300">Numéro de contact</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Mail className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold">@gmail.com</p>
                  <p className="text-gray-300">Email principal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold">(adresse)</p>
                  <p className="text-gray-300">Localisation</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-700 to-purple-800 p-8 rounded-lg border border-purple-600 border-opacity-30">
              <p className="text-gray-200 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
