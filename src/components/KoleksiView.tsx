import { useState, useMemo } from 'react';
import { Product, PageType } from '../types';
import { COMPREHENSIVE_PRODUCTS } from '../data';
import { Search, Filter, Leaf, ArrowRight, Check, Sparkles, Sprout, Heart, Info, RotateCcw, MessageSquare } from 'lucide-react';

interface KoleksiViewProps {
  setSelectedProduct: (product: Product) => void;
  currentLanguage: 'ID' | 'EN';
}

export default function KoleksiView({ setSelectedProduct, currentLanguage }: KoleksiViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = useMemo(() => {
    return ['Semua', 'Sutra', 'Syal', 'Pashmina', 'Bahan Katun', 'Busana', 'Aksesoris'];
  }, []);

  const filteredProducts = useMemo(() => {
    return COMPREHENSIVE_PRODUCTS.filter((product) => {
      // Filter by Category
      const matchesCategory = activeCategory === 'Semua' || product.category === activeCategory;
      
      // Filter by Search (Name, description, or leaf types)
      const query = searchTerm.toLowerCase();
      const matchesSearch = 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.leavesUsed.some(leaf => leaf.toLowerCase().includes(query)) ||
        product.material.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setActiveCategory('Semua');
  };

  return (
    <div className="animate-fade-in" id="koleksi-view-container">
      
      {/* 1. HERO SEKSION PILIHAN */}
      <section className="relative px-6 py-16 sm:px-8 bg-beige-100 overflow-hidden">
        {/* Background leaf texture */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80")' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-beige-100/90 to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 rounded-full bg-forest-100 px-3 py-1 text-xs font-bold text-forest-800">
              <Leaf className="h-4 w-4 text-forest-700" />
              <span>{currentLanguage === 'ID' ? 'Katalog Resmi Sanggar' : 'Official Collection Catalogue'}</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-forest-950">
              {currentLanguage === 'ID' ? 'Produk EcoPrint Ramah Lingkungan' : 'Sustainable EcoPrint Craft'}
            </h1>
            
            <p className="font-sans text-base text-forest-800/80 max-w-xl leading-relaxed">
              {currentLanguage === 'ID'
                ? 'Seni rupa botani murni di atas serat sutra premium, linen organik, dan katun terbaik. Dirancang saksama untuk kenyamanan berbusana dengan balutan kelembutan alam.'
                : 'Fine botanical textile detailing applied on pure silks, organic linen weights, and mercerized cotton threads. Concocted with high-fidelity detail to protect skin and nature.'}
            </p>
          </div>

          {/* Hero Right Visual: Syal di atas tikar */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-beige-300 shadow-xl aspect-[16/9] lg:aspect-[4/3] bg-beige-50">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                alt="Syal EcoPrint di atas Tikar Alami"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-forest-950/90 text-white border border-forest-850/30 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest font-sans">
                {currentLanguage === 'ID' ? '"Autumn Scarf"' : 'Featured Release'}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SEKSION FITUR (Grid card serupa dengan Beranda) */}
      <section className="px-6 py-12 sm:px-8 bg-beige-50">
        <div className="mx-auto max-w-7xl border-b border-beige-200 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Fitur 1 */}
            <div className="bg-white border border-beige-200 p-6 rounded-2xl text-left hover:border-forest-500 transition-all shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-100 text-forest-800 mb-4">
                <Check className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-forest-950">
                {currentLanguage === 'ID' ? 'Pewarna Daun Asli' : 'Authentic Leaf Dyes'}
              </h4>
              <p className="font-sans text-xs text-forest-800/70 mt-2 leading-relaxed">
                {currentLanguage === 'ID'
                  ? 'Pigmen murni dari jati, lanang, kenari, dahan pinus, dan pakis tanpa pewarna sintetik tawas berlebih.'
                  : 'Pure leaf extraction featuring Jati, Lanang, and tropical fern filaments with zero added petrochemicals.'}
              </p>
            </div>

            {/* Fitur 2 */}
            <div className="bg-white border border-beige-200 p-6 rounded-2xl text-left hover:border-forest-500 transition-all shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-100 text-forest-800 mb-4">
                <Sprout className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-forest-950">
                {currentLanguage === 'ID' ? 'Karya Serat Alam' : 'Natural Fibers Only'}
              </h4>
              <p className="font-sans text-xs text-forest-800/70 mt-2 leading-relaxed">
                {currentLanguage === 'ID'
                  ? 'Diproses di atas sutra Habutai lembut berkilau, linen premium, dan katun terbaik bernapas sejuk.'
                  : 'Processed on lightweight Habutai Silks, premium linens, and high-absorption woven textiles.'}
              </p>
            </div>

            {/* Fitur 3 */}
            <div className="bg-white border border-beige-200 p-6 rounded-2xl text-left hover:border-forest-500 transition-all shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-100 text-forest-800 mb-4">
                <Heart className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-forest-950">
                {currentLanguage === 'ID' ? 'Karya Pengrajin Lokal' : 'Empathetic Craft'}
              </h4>
              <p className="font-sans text-xs text-forest-800/70 mt-2 leading-relaxed">
                {currentLanguage === 'ID'
                  ? 'Setiap lembar dibuat manual di Sleman membangkitkan keahlian tradisional komunitas artisan wanita.'
                  : 'Fully hand-steamed in central Java, safeguarding heritage craft and bolstering local family earnings.'}
              </p>
            </div>

            {/* Fitur 4 */}
            <div className="bg-white border border-beige-200 p-6 rounded-2xl text-left hover:border-forest-500 transition-all shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-100 text-forest-800 mb-4">
                <Info className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-forest-950">
                {currentLanguage === 'ID' ? 'Limbah Organik Kompos' : 'Circular Bio-Waste'}
              </h4>
              <p className="font-sans text-xs text-forest-800/70 mt-2 leading-relaxed">
                {currentLanguage === 'ID'
                  ? 'Sisa daun kukusan didekomposisi kembali menjadi pupuk kompos organik di perkebunan sanggar.'
                  : 'Post-steam foliage byproduct is systematically composted to nurture the sanggar custom garden.'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEKSION INTERACTIVE FILTER DAN GRID UTAMA */}
      <section className="px-6 py-12 sm:px-8 bg-beige-50">
        <div className="mx-auto max-w-7xl space-y-10">
          
          {/* SEARCH AND FILTER BUTTONS PANEL */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-beige-200 pb-8">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2.5" id="category-filter-bar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide border cursor-pointer transition-all ${
                      isActive
                        ? 'bg-forest-800 text-beige-100 border-forest-800 shadow-md shadow-forest-900/10'
                        : 'bg-white text-forest-800/80 border-beige-200 hover:bg-beige-100 hover:text-forest-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-forest-600/60" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={currentLanguage === 'ID' ? 'Cari produk atau jenis daun...' : 'Search designs, leaves...'}
                className="w-full rounded-full border border-beige-200 bg-white py-3 pl-11 pr-4 text-sm text-forest-900 focus:border-forest-600 focus:outline-none focus:ring-1 focus:ring-forest-600 font-sans shadow-inner"
              />
            </div>
          </div>

          {/* DYNAMIC RESULTS STATUS */}
          <div className="flex items-center justify-between font-sans text-xs text-forest-600">
            <span>
              {currentLanguage === 'ID' 
                ? `Menampilkan ${filteredProducts.length} produk dari total ${COMPREHENSIVE_PRODUCTS.length} koleksi` 
                : `Showing ${filteredProducts.length} of ${COMPREHENSIVE_PRODUCTS.length} ecoprint masterpieces`}
            </span>
            {(searchTerm || activeCategory !== 'Semua') && (
              <button
                onClick={handleResetFilters}
                className="flex items-center space-x-1 font-bold text-mustard-600 hover:text-mustard-700 cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" />
                <span>{currentLanguage === 'ID' ? 'Atur Ulang Filter' : 'Reset Filters'}</span>
              </button>
            )}
          </div>

          {/* MAIN GRID */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="collections-main-grid">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  id={`product-card-${product.id}`}
                  className="group cursor-pointer rounded-3xl border border-beige-200/80 bg-white p-4 transition-all duration-300 hover:border-forest-600 hover:shadow-xl shadow-forest-950/2 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Visual Container */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-beige-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Leaf badge count */}
                      <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-forest-900 border border-beige-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {product.category}
                      </span>

                      {/* Material tag overlay */}
                      <span className="absolute bottom-3 right-3 bg-forest-950/80 text-beige-100 text-[9px] font-bold px-2.5 py-1 rounded-md tracking-wider">
                        🌿 {product.material.split('(')[0].trim()}
                      </span>
                    </div>

                    {/* Metadata Content */}
                    <div className="space-y-2 text-left">
                      {/* Tags of leaves */}
                      <div className="flex flex-wrap gap-1">
                        {product.leavesUsed.map((leaf, idx) => (
                          <span key={idx} className="text-[9px] bg-forest-50 border border-forest-100 text-forest-850 px-2 py-0.5 rounded">
                            🍁 {leaf}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-serif text-lg font-bold text-forest-950 line-clamp-1 group-hover:text-forest-700 transition-colors">
                        {product.name}
                      </h3>

                      <p className="font-sans text-xs text-forest-800/70 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Foot block card with buy link / detail */}
                  <div className="mt-4 pt-3 border-t border-beige-100 flex flex-wrap gap-2 items-center justify-between">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="inline-flex items-center justify-center space-x-1 px-3 py-2 text-xs font-semibold text-forest-800 hover:text-forest-950 hover:bg-beige-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <Info className="h-4 w-4 text-[#D4A017]" />
                      <span>{currentLanguage === 'ID' ? 'Info Detail' : 'Info Details'}</span>
                    </button>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const message = currentLanguage === 'ID'
                          ? `Halo Ibu Dyah, saya tertarik memesan produk "${product.name}". Mohon info ketersediaannya.`
                          : `Hello Dyah, I am interested in ordering "${product.name}". Please provide availability details.`;
                        const encoded = encodeURIComponent(message);
                        window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank', 'noopener,noreferrer');
                      }}
                      className="inline-flex items-center justify-center space-x-1.5 rounded-xl bg-forest-900 hover:bg-forest-950 text-beige-50 px-4 py-2.5 text-xs font-bold transition-all cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-mustard-500" />
                      <span>{currentLanguage === 'ID' ? 'Pesan via WA' : 'Order via WA'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-beige-200 rounded-3xl p-16 text-center max-w-md mx-auto space-y-4 shadow-sm">
              <div className="text-4xl">🍂</div>
              <h3 className="font-serif text-lg font-bold text-forest-950">
                {currentLanguage === 'ID' ? 'Koleksi Tidak Ditemukan' : 'No Botanical Matches'}
              </h3>
              <p className="text-xs text-forest-800/70 font-sans">
                {currentLanguage === 'ID'
                  ? 'Kami belum memproses kain dengan kata kunci tersebut. Coba cari daun populer lainnya seperti "Jati", "Lanang", atau "Pakis".'
                  : 'Our botanists haven\'t steamed those leaves yet. Try searching popular tags like "Jati", "Lanang" or "Pakis".'}
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-2 inline-flex items-center space-x-1 text-xs font-bold text-mustard-600 hover:text-mustard-750 cursor-pointer"
              >
                <span>Sebutkan Ulang Semua Produk</span>
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
