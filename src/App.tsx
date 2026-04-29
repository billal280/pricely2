import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './pages/Hero';
import Concept from './pages/Concept';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <Header currentPage={location.pathname} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Concept />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
