import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-purple-900/60" />

      <div className="relative z-10 px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Bienvenue</h1>

        <div className="mb-8">
          <div className="inline-block mb-4">
            <div className="border-b-2 border-purple-400 pb-2">
              <p className="text-purple-300 text-sm tracking-widest uppercase">Découvrez nos solutions</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('pricing')}
          className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-purple-600/50 flex items-center gap-2 group"
        >
          Inscrivez vous !
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '📊', title: 'Logiciel', desc: 'Une solution complète' },
            { icon: '🎯', title: 'Rapidité', desc: 'Performance optimale' },
            { icon: '🔒', title: 'Objectif', desc: 'Résultats garantis' },
          ].map((item, i) => (
            <div key={i} className="bg-purple-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg border border-purple-600 border-opacity-30 hover:border-opacity-60 transition-all">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
