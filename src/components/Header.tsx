import { useState } from 'react';
import { PageType, CartItem } from '../types';
import { User, Globe, Menu, X, ArrowRight, Heart } from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  currentLanguage: 'ID' | 'EN';
  toggleLanguage: () => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  currentLanguage,
  toggleLanguage,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProfileTooltip, setShowProfileTooltip] = useState(false);

  const menuItems: { id: PageType; labelID: string; labelEN: string }[] = [
    { id: 'home', labelID: 'Beranda', labelEN: 'Home' },
    { id: 'koleksi', labelID: 'Koleksi', labelEN: 'Collection' },
    { id: 'tentang', labelID: 'Tentang Kami', labelEN: 'About Us' },
  ];

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = `#${page}`;
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-beige-200/60 bg-beige-50/95 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* LOGO AREA */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="group flex cursor-pointer items-center space-x-3"
          id="nav-logo"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-900 transition-transform duration-300 group-hover:scale-105 shadow-sm">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-lg font-extrabold tracking-tight uppercase text-forest-900 leading-none">
              Adiguna <span className="font-serif italic font-light lowercase text-mustard-500 first-letter:capitalize">EcoPrint</span>
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-10">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-${item.id}`}
                className={`relative py-2 font-sans text-sm font-medium transition-colors tracking-wide hover:text-forest-700 cursor-pointer ${
                  isActive ? 'text-forest-900' : 'text-forest-700/70'
                }`}
              >
                {currentLanguage === 'ID' ? item.labelID : item.labelEN}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-mustard-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* UTILITY ACTIONS */}
        <div className="flex items-center space-x-4">
          
          {/* LANGUAGE SELECTOR */}
          <button
            onClick={toggleLanguage}
            title={currentLanguage === 'ID' ? 'Ubah ke Bahasa Inggris' : 'Switch to Indonesian'}
            className="flex items-center space-x-1.5 rounded-lg border border-beige-200 bg-white/60 px-2.5 py-1.5 text-xs font-semibold text-forest-800 hover:bg-beige-100 font-sans hover:border-forest-200 transition-all cursor-pointer"
            id="lang-selector"
          >
            <Globe className="h-3.5 w-3.5 text-forest-600" />
            <span>{currentLanguage}</span>
          </button>

          {/* CONCIERGE PROFILE INFO */}
          <div className="relative">
            <button
              onClick={() => setShowProfileTooltip(!showProfileTooltip)}
              onBlur={() => setTimeout(() => setShowProfileTooltip(false), 200)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-beige-200/80 bg-white/60 text-forest-800 hover:text-forest-900 hover:bg-beige-100/90 transition-all cursor-pointer"
              id="profile-trigger-btn"
            >
              <User className="h-5 w-5" />
            </button>
            
            {showProfileTooltip && (
              <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-beige-200 bg-white p-5 shadow-xl shadow-forest-950/5 animate-fade-in z-50">
                <div className="flex items-center space-x-3 border-b border-beige-100 pb-3">
                  <div className="h-10 w-10 rounded-full bg-mustard-100 flex items-center justify-center text-mustard-600 font-serif font-bold text-sm">
                    EP
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-forest-950">Eco Enthusiast</h4>
                    <span className="text-xs text-forest-600/70 font-sans">ID: 783590d1-eco</span>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="rounded-lg bg-beige-50 p-2 text-xs text-forest-800">
                    🌿 <span className="font-medium text-forest-900">Program Penyelamat Bumi:</span> Setiap 1 helai EcoPrint terjual, Anda ikut melestarikan 1 dahan herba lokal Sanggar.
                  </div>
                  <button 
                    onClick={() => handleNavClick('tentang')}
                    className="w-full mt-1 flex items-center justify-between text-xs font-semibold text-mustard-600 hover:text-mustard-700 py-1 transition-colors"
                  >
                    <span>Pelajari Sanggar Adiguna</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl md:hidden border border-beige-200/80 bg-white/60 text-forest-800 hover:bg-beige-100 cursor-pointer"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV PANEL */}
      {isMobileMenuOpen && (
        <div className="border-t border-beige-200 bg-beige-50 px-6 py-6 md:hidden animate-fade-in shadow-inner">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-${item.id}`}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl font-sans text-base font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-forest-800 text-beige-100 shadow-md shadow-forest-900/10' 
                      : 'text-forest-800/80 hover:bg-beige-100 hover:text-forest-900'
                  }`}
                >
                  <span>{currentLanguage === 'ID' ? item.labelID : item.labelEN}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-mustard-500" />}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
