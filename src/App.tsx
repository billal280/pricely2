import { useState } from 'react';
import Header from './components/Header';
import Hero from './pages/Hero';
import Concept from './pages/Concept';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'product':
        return <Concept onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'pricing':
        return <Pricing onNavigate={setCurrentPage} />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
