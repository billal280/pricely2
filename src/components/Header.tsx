import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav className="px-6 py-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-white text-2xl font-bold">Pricely</div>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => onNavigate('product')}
            className={`transition-colors ${
              currentPage === 'product' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Produit
          </button>
          <button
            onClick={() => onNavigate('faq')}
            className={`transition-colors ${
              currentPage === 'faq' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            F.A.Q
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`transition-colors ${
              currentPage === 'about' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            A propos
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`transition-colors ${
              currentPage === 'contact' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Contact
          </button>
          <button className="text-white hover:text-gray-300 transition-colors">
            <Search size={20} />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-purple-800 bg-opacity-95 px-6 py-4 flex flex-col gap-4">
          <button
            onClick={() => {
              onNavigate('product');
              setMobileMenuOpen(false);
            }}
            className="text-white text-left"
          >
            Produit
          </button>
          <button
            onClick={() => {
              onNavigate('faq');
              setMobileMenuOpen(false);
            }}
            className="text-white text-left"
          >
            F.A.Q
          </button>
          <button
            onClick={() => {
              onNavigate('about');
              setMobileMenuOpen(false);
            }}
            className="text-white text-left"
          >
            A propos
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
              setMobileMenuOpen(false);
            }}
            className="text-white text-left"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
