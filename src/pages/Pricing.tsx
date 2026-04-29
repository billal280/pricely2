import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration_days: number;
  features: string[];
}

interface PricingProps {
  onNavigate: (page: string) => void;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Pricing({ onNavigate }: PricingProps) {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const { data, error } = await supabase
          .from('pricing_plans')
          .select('*')
          .order('price', { ascending: true });

        if (error) throw error;
        setPlans(data || []);
      } catch (error) {
        console.error('Error fetching plans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nos tarifs</h1>
        <p className="text-purple-300 text-lg mb-16">Choisissez le plan qui vous convient</p>

        <div className="mb-12">
          <p className="text-white text-sm font-semibold mb-6">AJOUTE LES ADS DANS LA PAGE</p>
        </div>

        {loading ? (
          <div className="text-center text-gray-300">Chargement...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-purple-800 bg-opacity-50 backdrop-blur-sm border border-purple-600 border-opacity-50 rounded-lg p-8 hover:border-opacity-100 transition-all hover:shadow-lg hover:shadow-purple-600/20"
              >
                <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300 ml-2">€ par mois</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={20} className="text-green-400 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-purple-600/50">
                  Inscrivez vous !
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="bg-gradient-to-r from-purple-700 to-purple-800 bg-opacity-60 backdrop-blur-sm border border-purple-600 border-opacity-30 rounded-lg p-8 md:p-12">
          <p className="text-gray-200 text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
      </div>
    </div>
  );
}
