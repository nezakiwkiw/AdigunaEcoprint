import { useState, useEffect } from 'react';
import { PageType, Product } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import KoleksiView from './components/KoleksiView';
import TentangView from './components/TentangView';
import ProductDetailModal from './components/ProductDetailModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<'ID' | 'EN'>('ID');

  // Synchronize hash state on mount and on browser navigation back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      if (hash === 'home' || hash === 'koleksi' || hash === 'tentang') {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    // Parse initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleToggleLanguage = () => {
    setCurrentLanguage((prev) => (prev === 'ID' ? 'EN' : 'ID'));
  };

  return (
    <div className="min-h-screen bg-beige-50 flex flex-col justify-between" id="app-universe-mount">
      
      {/* 1. UNIVERSAL STICKY HEADER NAVBAR */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentLanguage={currentLanguage}
        toggleLanguage={handleToggleLanguage}
      />

      {/* 2. DYNAMICAL ROUTE RENDERING */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView
            setCurrentPage={setCurrentPage}
            setSelectedProduct={setSelectedProduct}
            currentLanguage={currentLanguage}
          />
        )}
        {currentPage === 'koleksi' && (
          <KoleksiView
            setSelectedProduct={setSelectedProduct}
            currentLanguage={currentLanguage}
          />
        )}
        {currentPage === 'tentang' && (
          <TentangView
            setSelectedProduct={setSelectedProduct}
            currentLanguage={currentLanguage}
          />
        )}
      </main>

      {/* 3. UNIVERSAL SANGGAR FOOTER */}
      <Footer
        setCurrentPage={setCurrentPage}
        currentLanguage={currentLanguage}
      />

      {/* 4. DETAILS POPUP MODAL (LIGHTBOX) */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        currentLanguage={currentLanguage}
      />

    </div>
  );
}
