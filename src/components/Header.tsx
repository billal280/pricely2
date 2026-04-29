import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => currentPage === path;

  return (
    <header className="relative z-50">
      <nav className="px-6 py-4 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="text-white text-2xl font-bold">Pricely</div>
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/product"
            className={`transition-colors ${
              isActive('/product') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Produit
          </Link>
          <a
            href="#faq"
            className="text-gray-300 hover:text-white transition-colors"
          >
            F.A.Q
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            A propos
          </a>
          <Link
            to="/contact"
            className={`transition-colors ${
              isActive('/contact') ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Contact
          </Link>
          <button className="text-white hover:text-gray-300 transition-colors">
            <Search size={20} />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-purple-800 bg-opacity-95 px-6 py-4 flex flex-col gap-4">
          <Link
            to="/product"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-left"
          >
            Produit
          </Link>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-left"
          >
            F.A.Q
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-left"
          >
            A propos
          </a>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-left"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
