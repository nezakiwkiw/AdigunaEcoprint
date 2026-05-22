import { PageType } from '../types';
import { Mail, Phone, MapPin, Leaf, ArrowUp, Instagram, Store, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  currentLanguage: 'ID' | 'EN';
}

export default function Footer({ setCurrentPage, currentLanguage }: FooterProps) {
  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-forest-950 text-beige-100 overflow-hidden pt-16 pb-12" id="universal-footer">
      
      {/* Decorative leaf watermarks */}
      <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-forest-900/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-forest-900/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* TOP SECTION: BRAND AND ECO INITIATIVES */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 border-b border-forest-900 pb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-900 transition-transform duration-300 shadow-sm border border-white/20">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-tight text-white leading-none">
                  Adiguna EcoPrint
                </h3>
                <span className="font-sans text-[10px] font-semibold tracking-wider text-mustard-500 uppercase mt-1 block">
                  Sanggar Seni Wastra Alami
                </span>
              </div>
            </div>
            
            <p className="text-sm text-beige-100/70 font-sans leading-relaxed">
              {currentLanguage === 'ID' 
                ? 'Kami menghidupkan kembali kerajinan tekstil ramah lingkungan dengan memindahkan pigmen asli dedaunan nusantara secara presisi ke serat katun dan sutra alami.'
                : 'We revive environmentally friendly textile crafts by transferring original pigments of Indonesian leaves precisely onto natural cotton and silk fibers.'}
            </p>

            <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-forest-900/40 border border-forest-900 text-xs text-mustard-100/90 font-sans">
              <ShieldCheck className="h-4 w-4 text-mustard-500 shrink-0" />
              <span>
                {currentLanguage === 'ID'
                  ? 'Setiap karya memiliki sertifikasi pewarna alami 100% organik.'
                  : 'Each masterpiece values a certified 100% organic dye process.'}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">
              {currentLanguage === 'ID' ? 'Koleksi' : 'Collection'}
            </h4>
            <ul className="text-sm space-y-2.5 font-sans">
              <li>
                <button onClick={() => { handleNavClick('koleksi'); }} className="text-beige-100/60 hover:text-white transition-colors cursor-pointer block">
                  {currentLanguage === 'ID' ? 'Kain Sutra' : 'Silk Scarves'}
                </button>
              </li>
              <li>
                <button onClick={() => { handleNavClick('koleksi'); }} className="text-beige-100/60 hover:text-white transition-colors cursor-pointer block">
                  {currentLanguage === 'ID' ? 'Pashmina Premium' : 'Premium Pashmina'}
                </button>
              </li>
              <li>
                <button onClick={() => { handleNavClick('koleksi'); }} className="text-beige-100/60 hover:text-white transition-colors cursor-pointer block">
                  {currentLanguage === 'ID' ? 'Bahan Katun Primisima' : 'Primisima Cotton Fabric'}
                </button>
              </li>
              <li>
                <button onClick={() => { handleNavClick('koleksi'); }} className="text-beige-100/60 hover:text-white transition-colors cursor-pointer block">
                  {currentLanguage === 'ID' ? 'Modern Ready-to-Wear' : 'Modern Apparel'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Layanan Kami */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">
              {currentLanguage === 'ID' ? 'Layanan Sanggar' : 'Services'}
            </h4>
            <ul className="text-sm space-y-2.5 font-sans text-beige-100/60">
              <li className="hover:text-white transition-colors cursor-pointer">
                {currentLanguage === 'ID' ? 'Workshop Privat EcoPrint' : 'Private EcoPrint Workshops'}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                {currentLanguage === 'ID' ? 'Kustomisasi Motif Seragam' : 'Custom Corporate Uniforms'}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                {currentLanguage === 'ID' ? 'Konsultasi Mordan Alami' : 'Natural Dye Consulting'}
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                {currentLanguage === 'ID' ? 'Peluang Reseller & Agen' : 'Affiliate Partnership'}
              </li>
            </ul>
          </div>

          {/* Column 4: Contact and Address Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">
              {currentLanguage === 'ID' ? 'Sanggar Adiguna' : 'Contact Sanggar'}
            </h4>
            <ul className="space-y-3 text-sm font-sans text-beige-100/75 p-4 rounded-2xl bg-forest-900/30 border border-forest-900">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4.5 w-4.5 text-mustard-500 shrink-0 mt-0.5" />
                <span>
                  Dukuwaluh, Purwokerto, Banyumas, Jawa Tengah, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4.5 w-4.5 text-mustard-500 shrink-0" />
                <span>+62 821-7871-4080</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4.5 w-4.5 text-mustard-500 shrink-0" />
                <span>dyah.orbarini@adigunaecoprint.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM REVOLVING FOOTER: LOGO GROUP, SOCIALS AND RIGHTS */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6 text-xs text-beige-100/40 font-sans">
          
          {/* Market Title and Rights */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <span className="font-semibold text-white/80">EcoPrintMarket Nusantara</span>
            <span>&copy; {currentYear} Adiguna EcoPrint. All Rights Reserved.</span>
          </div>

          {/* Connected Social channels */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://shopee.co.id/adigunaecoprint" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-forest-900/60 hover:bg-forest-900 text-beige-100 hover:text-mustard-500 transition-all border border-forest-900"
            >
              <Store className="h-3.5 w-3.5 text-orange-500" />
              <span>Shopee</span>
            </a>
            <a 
              href="https://instagram.com/adiguna_ecoprint" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-forest-900/60 hover:bg-forest-900 text-beige-100 hover:text-mustard-500 transition-all border border-forest-900"
            >
              <Instagram className="h-3.5 w-3.5 text-pink-500" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Quick Back to Top */}
          <button 
            onClick={handleScrollToTop}
            title="Kembali ke Atas"
            className="flex items-center justify-center h-8 w-8 rounded-full bg-forest-800 text-beige-200 hover:text-white hover:bg-mustard-500 transition-all cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
