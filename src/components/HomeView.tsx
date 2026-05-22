import { Product, PageType } from '../types';
import { COMPREHENSIVE_PRODUCTS, BOTANICAL_LEAVES_GLOSSARY } from '../data';
import { ArrowRight, Leaf, Shield, Heart, Sparkles, Check, Flame, Award, BookOpen } from 'lucide-react';

interface HomeViewProps {
  setCurrentPage: (page: PageType) => void;
  setSelectedProduct: (product: Product) => void;
  currentLanguage: 'ID' | 'EN';
}

export default function HomeView({ setCurrentPage, setSelectedProduct, currentLanguage }: HomeViewProps) {
  const featuredProducts = COMPREHENSIVE_PRODUCTS.filter(p => p.isFeatured);

  const handleNavToCollection = () => {
    setCurrentPage('koleksi');
    window.location.hash = '#koleksi';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavToAbout = () => {
    setCurrentPage('tentang');
    window.location.hash = '#tentang';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in" id="home-view-container">
      
      {/* 1. SEKSION HERO */}
      <section className="relative px-6 py-12 md:py-24 sm:px-8 overflow-hidden bg-beige-100">
        <div className="absolute inset-0 bg-radial-gradient from-forest-50/40 to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="md:col-span-7 space-y-6 text-left relative z-10">
            <div className="inline-flex items-center space-x-2 rounded-full bg-forest-100 px-3.5 py-1.5 text-xs font-semibold text-forest-800 font-sans tracking-wide">
              <Sparkles className="h-3 w-3 text-mustard-600 animate-spin" />
              <span>
                {currentLanguage === 'ID' 
                  ? 'Karya Seni Wastra Organik Nusantara' 
                  : 'Artisanal Organic Indonesian Wastra'}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-forest-950 leading-[1.10]">
              {currentLanguage === 'ID' ? (
                <>
                  Menghidupkan Seni <br />
                  <span className="text-forest-700 italic font-medium">yang Bernapas</span>
                </>
              ) : (
                <>
                  Breathing Life <br />
                  <span className="text-forest-700 italic font-medium">Into Living Art</span>
                </>
              )}
            </h1>

            <p className="font-sans text-base sm:text-lg text-forest-800/80 max-w-xl leading-relaxed">
              {currentLanguage === 'ID'
                ? 'Sentuhan tangan pengrajin berpadu harmonis dengan helai sutra dan zat warna alam. Setiap lembar kain Adiguna EcoPrint merupakan mahakarya tunggal yang ramah lingkungan dan tak bisa diduplikasi.'
                : 'Artisan hands meet premium silk fibers and wild botanical pigments. Each Adiguna EcoPrint fabric represents a unique masterpiece that preserves Earth and cannot be replicated.'}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleNavToCollection}
                id="hero-cta-koleksi"
                className="flex items-center space-x-2.5 rounded-full bg-forest-800 px-7 py-4 text-sm font-semibold text-white hover:bg-forest-900 shadow-md shadow-forest-900/15 transition-all text-center cursor-pointer hover:translate-x-1"
              >
                <span>{currentLanguage === 'ID' ? 'Jelajahi Koleksi' : 'Explore Collections'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={handleNavToAbout}
                id="hero-cta-tentang"
                className="flex items-center space-x-2 rounded-full border border-forest-800/20 bg-white/50 px-6 py-4 text-sm font-semibold text-forest-800 hover:bg-beige-200 transition-all text-center cursor-pointer"
              >
                <span>{currentLanguage === 'ID' ? 'Cerita Artisan' : 'Our Story'}</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-8 border-t border-beige-300 grid grid-cols-3 gap-4">
              <div>
                <dt className="text-2xl font-serif font-bold text-forest-900">100%</dt>
                <dd className="text-xs text-forest-600 font-sans tracking-wide">
                  {currentLanguage === 'ID' ? 'Pewarna Alami' : 'Natural Dyes'}
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-serif font-bold text-forest-900">450+</dt>
                <dd className="text-xs text-forest-600 font-sans tracking-wide">
                  {currentLanguage === 'ID' ? 'Wastra Terjual' : 'Pieces Sold'}
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-serif font-bold text-forest-900">Yogyakarta</dt>
                <dd className="text-xs text-forest-600 font-sans tracking-wide">
                  {currentLanguage === 'ID' ? 'Asal Sanggar' : 'Sleman Sanggar'}
                </dd>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="md:col-span-5 relative">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-mustard-500/20 to-forest-500/20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-beige-300 shadow-2xl shadow-forest-950/10">
              <img
                src="https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1000&q=80"
                alt="Studio Artisan Adiguna EcoPrint"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] md:h-[550px] object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay Label for texture */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-forest-950/80 p-5 rounded-2xl border border-white/10 text-white text-left">
                <div className="flex items-center space-x-2 text-mustard-500 text-xs font-bold font-sans tracking-widest uppercase">
                  <Leaf className="h-4 w-4" />
                  <span>Proses Pembuatan</span>
                </div>
                <p className="text-xs text-beige-100/90 font-sans mt-2.5 leading-relaxed">
                  "Daun jati yang diletakkan saksama di atas jalinan rayon, lalu digulung kencang untuk mengunci uap panas bumi."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SEKSION VISI & NILAI KAMI (Asymmetrical Grid) */}
      <section className="px-6 py-20 sm:px-8 bg-beige-50">
        <div className="mx-auto max-w-7xl">
          
          <div className="max-w-2xl text-left space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
              {currentLanguage === 'ID' ? 'Filosofi & Nilai Seni Adiguna' : 'Our Philosophy & Core Values'}
            </h2>
            <div className="w-16 h-1 bg-mustard-500" />
            <p className="text-sm sm:text-base text-forest-850/80 font-sans leading-relaxed">
              {currentLanguage === 'ID'
                ? 'Kami tidak memproduksi kain massal. Kami menyelaraskan seni murni dengan keseimbangan alam melalui tiga komitmen dasar kami.'
                : 'We do not produce mass fabrics. We harmonize fine art with ecological balance, driven by our three core slow-fashion commitments.'}
            </p>
          </div>

          {/* ASYMMETRICAL GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6" id="philosophy-asymmetric-grid">
            
            {/* Card 1: Pewarna Alami Teruji (Large width 7 cols, Beige base) */}
            <div className="md:col-span-7 bg-beige-100 border border-beige-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-12 shadow-sm relative overflow-hidden group hover:border-forest-200 transition-all">
              <div className="absolute top-0 right-0 p-8 text-forest-100 group-hover:text-forest-200/60 transition-colors pointer-events-none">
                <Leaf className="h-28 w-28 stroke-1" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-800 text-beige-100">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  {currentLanguage === 'ID' ? 'Pewarnaan Botani 100% Organik' : '100% Organic Botanical Pigments'}
                </h3>
                <p className="font-sans text-sm text-forest-800/85 leading-relaxed max-w-lg">
                  {currentLanguage === 'ID'
                    ? 'Kami hanya mengekstrak warna dari pepohonan lokal (Kayu Tegalan, Secang, Mahoni, dan Indigo) tanpa larutan kimia sintetis berbahaya yang mencemari tanah sekitar sanggar.'
                    : 'We extract colors exclusively from local woods and tropical elements like Secang, Mahogany, and Indigo, preserving local groundwater from toxic synthetic runoffs.'}
                </p>
              </div>

              <div className="border-t border-beige-300/60 pt-6">
                <span className="text-xs font-semibold text-mustard-600 uppercase tracking-widest font-sans flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-mustard-500" />
                  No Synthetic Chemical Dyes
                </span>
              </div>
            </div>

            {/* Card 2: Handcrafted Authenticity (5 cols, Forest tint base) */}
            <div className="md:col-span-5 bg-forest-50 border border-forest-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-12 shadow-sm group hover:border-forest-300 transition-all">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mustard-500 text-forest-950">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-900">
                  {currentLanguage === 'ID' ? 'Autentisitas Sidik Daun' : 'Leaf Print Authenticity'}
                </h3>
                <p className="font-sans text-sm text-forest-800/85 leading-relaxed">
                  {currentLanguage === 'ID'
                    ? 'Sidik daun bagaikan sidik jari manusia. Dua syal yang menggunakan daun jati yang sama akan tetap melahirkan corak dan urat yang berbeda, memberikan kebanggaan eksklusivitas diri.'
                    : 'Like human fingerprints, every leaf has its own code. Even using leaves from the same tree tree, no two wraps are identical, gifting a pride in absolute aesthetic uniqueness.'}
                </p>
              </div>

              <div className="border-t border-forest-200/50 pt-6">
                <span className="text-xs font-semibold text-forest-700 uppercase tracking-widest font-sans">
                  Crafted by Dyah Orbarini & Team
                </span>
              </div>
            </div>

            {/* Card 3: Support Local (5 cols, Mustard soft base) */}
            <div className="md:col-span-5 bg-mustard-50 border border-mustard-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-12 shadow-sm group hover:border-mustard-300 transition-all">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-800 text-beige-50">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  {currentLanguage === 'ID' ? 'Kebaikan Sosial Sekitar' : 'Empowering Local Communities'}
                </h3>
                <p className="font-sans text-sm text-forest-800/85 leading-relaxed">
                  {currentLanguage === 'ID'
                    ? 'Sanggar kami aktif menyelenggarakan kelas kerajinan dan membina kelompok ibu rumah tangga setempat untuk meningkatkan pendapatan keluarga melalui industri kreatif berkelanjutan.'
                    : 'We host routine eco-print workshops for mothers and youth in Sleman, promoting auxiliary incomes while keeping traditional botanical heritage alive.'}
                </p>
              </div>

              <div className="border-t border-mustard-200 pt-6">
                <span className="text-xs font-semibold text-mustard-700 uppercase tracking-widest font-sans">
                  Empowering 30+ Artisan Households
                </span>
              </div>
            </div>

            {/* Card 4: Fiber Heritage (7 cols, Beige-200 / Textured) */}
            <div className="md:col-span-7 bg-beige-200 border border-beige-300 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-12 shadow-sm relative overflow-hidden group hover:border-forest-300 transition-all">
              <div className="space-y-4 relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-900 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  {currentLanguage === 'ID' ? 'Serat Alam Pilihan Tersertifikasi' : 'Certified Natural Fibers Only'}
                </h3>
                <p className="font-sans text-sm text-forest-850/85 leading-relaxed max-w-xl">
                  {currentLanguage === 'ID'
                    ? 'Kami menolak serat polyester plastik. Seluruh syal sutra habutai, katun primisima murni, dan rayon kami murni berbahan organik selulosa tumbuhan dan protein ulat sutra yang nyaman bernapas di kulit.'
                    : 'Plastic fibers resist plant dyes. All of our luxury Habutai silks, premium linen weights, and pure primisima cotton derive from botanical cellulose or protein, assuring total breathing comfort.'}
                </p>
              </div>

              <div className="border-t border-beige-300 pt-6">
                <span className="text-xs font-semibold text-forest-850 uppercase tracking-widest font-sans">
                  Pure Habutai Silk, Rayon Viscose & Mercerized Cotton
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SEKSION BACKGROUND PRODUCT (Gelap & High-Contrast) */}
      <section className="bg-forest-950 text-beige-100 py-24 px-6 sm:px-8 relative overflow-hidden" id="dark-background-product-section">
        
        {/* Subtle dynamic leaves blur watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-forest-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LIFT COLUMN: Photo B&W & Mustard Overlapping Quote */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            
            {/* Grayscale portrait of the artisan wrapped around beautiful natural space */}
            <div className="relative w-full max-w-md md:max-w-lg aspect-square sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-forest-900">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Ibu Dyah Orbarini - Artisan Adiguna EcoPrint"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-110 saturate-50 brightness-90 xl:brightness-95 transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent opacity-80" />
            </div>

            {/* Overlapping Mustard Yellow quote container */}
            <div className="absolute bottom-6 sm:bottom-12 md:-right-8 xl:-right-12 max-w-xs md:max-w-sm bg-mustard-500 text-forest-950 p-6 md:p-8 rounded-2xl shadow-xl border border-mustard-400/30 transform hover:-translate-y-1 transition-all">
              <span className="font-serif text-5xl leading-none font-bold text-mustard-700/55 block mb-2">“</span>
              <p className="font-serif italic text-base sm:text-lg font-medium leading-relaxed tracking-wide text-forest-950">
                {currentLanguage === 'ID'
                  ? 'Setiap lembar kain adalah doa dan salam hangat dari pepohonan untuk menemani setiap detak langkah hidup Anda.'
                  : 'Every single fabric represents a warm message and prayer from the woods, accompanying you in your lifetime journey.'}
              </p>
              <div className="mt-4 border-t border-mustard-600/40 pt-3">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-forest-900">
                  - Dyah Orbarini, <span className="font-semibold text-forest-800">Founder & Artisan</span>
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Description & Bullet Checkpoints */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-mustard-500">
                {currentLanguage === 'ID' ? 'Kualitas Mutu Tanpa Kompromi' : 'Uncompromising Organic Quality'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {currentLanguage === 'ID' ? 'Mahakarya Seni Murni dari Rahim Tropis' : 'Pure Masterpieces from the Tropical Forest'}
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-beige-100/70 leading-relaxed">
              {currentLanguage === 'ID'
                ? 'Kami merendam serat kain dalam emulsi minyak zaitun dan susu murni berhari-hari (proses mordanting) membuat molekul serat siap mengunci jutaan urat helai daun secara detail tanpa perlu bahan fixative tawas kimiawi berlebih.'
                : 'Through meticulous mordanting baths using plant oils and soy emulsion over several days, we prepare each natural thread to capture high-definition leaf micro-designs without resorting to standard industrial synthetics.'}
            </p>

            {/* Core Checkpoints */}
            <div className="space-y-4 pt-2">
              
              <div className="flex items-start space-x-3.5">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mustard-500 text-forest-950">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-sans text-white">
                    {currentLanguage === 'ID' ? 'Anti Luntur Alami Yang Aman' : 'Zero Bleeding Promise'}
                  </h4>
                  <p className="text-xs text-beige-100/60 leading-relaxed mt-0.5">
                    {currentLanguage === 'ID'
                      ? 'Telah melewati penjemuran 14 hari di bawah terik matahari demi memastikan sel pigmen tetap menyatu abadi.'
                      : 'Sun-cured for over two weeks, guaranteeing color permanence that withstands routine gentle washing.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mustard-500 text-forest-950">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-sans text-white">
                    {currentLanguage === 'ID' ? 'Daun Dipetik Etis Selaras Musim' : 'Sustainable Leaf Foraging'}
                  </h4>
                  <p className="text-xs text-beige-100/60 leading-relaxed mt-0.5">
                    {currentLanguage === 'ID'
                      ? 'Kami tidak menebang ranting. Hanya memetik dedaunan tua yang jatuh atau dipangkas secara rapi bertahap.'
                      : 'We never fell wood branches. We forage mature leaves seasonally or prune carefully to aid photosynthesis.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mustard-500 text-forest-950">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-sans text-white">
                    {currentLanguage === 'ID' ? 'Sertifikasi Keaslian Seni Handcrafted' : 'Certificates of Authenticity'}
                  </h4>
                  <p className="text-xs text-beige-100/60 leading-relaxed mt-0.5">
                    {currentLanguage === 'ID'
                      ? 'Setiap pembelian disertai tag rincian jenis daun dan tanggal steam rilis yang ditandatangani artisan.'
                      : 'Each product contains a handwritten card indexing the botanical leaves used, dyer log, and dates.'}
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <button
                onClick={handleNavToCollection}
                id="cta-explore-dark-section"
                className="inline-flex items-center space-x-2.5 rounded-full bg-mustard-500 text-forest-950 px-8 py-4 text-sm font-bold hover:bg-mustard-600 transition-all font-sans cursor-pointer hover:shadow-lg hover:shadow-mustard-600/10"
              >
                <span>{currentLanguage === 'ID' ? 'Jelajahi Koleksi' : 'Explore Collections'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SEKSION SHOWCASE PILIHAN (Featured Masterpieces) */}
      <section className="px-6 py-24 sm:px-8 bg-beige-100">
        <div className="mx-auto max-w-7xl text-center space-y-12">
          
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-mustard-600">
              {currentLanguage === 'ID' ? 'Kurasi Terbaik Bulan Ini' : 'This Month Curated Highlights'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
              {currentLanguage === 'ID' ? 'Karya Pilihan Sanggar' : 'Featured Masterpieces'}
            </h2>
            <p className="text-sm text-forest-800/80 font-sans max-w-md mx-auto">
              {currentLanguage === 'ID'
                ? 'Beberapa karya andalan dengan motif paling tajam dan pigmen warna terindah yang baru saja dikeluarkan dari tungku kukus.'
                : 'Outstanding picks displaying stunning color saturation, freshly processed out of our wood steam boilers.'}
            </p>
          </div>

          {/* Grid Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                id={`featured-${product.id}`}
                className="group cursor-pointer rounded-2xl border border-beige-300 bg-white p-4 transition-all duration-300 hover:border-forest-600 hover:shadow-xl shadow-forest-950/2"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-beige-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-forest-900 border border-beige-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {product.leavesUsed.slice(0, 2).map((leaf, index) => (
                      <span key={index} className="text-[10px] bg-forest-50 text-forest-700/90 font-medium px-2 py-0.5 rounded-md">
                        🍃 {leaf}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-forest-950 line-clamp-1 group-hover:text-forest-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="font-sans text-xs text-forest-800/70 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-beige-100">
                    <span className="font-sans text-xs font-semibold text-forest-700 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mr-1.5 inline-block"></span>
                      {currentLanguage === 'ID' ? '100% Organik' : '100% Organic'}
                    </span>
                    <button className="flex items-center space-x-1 text-xs font-bold text-mustard-600 group-hover:text-mustard-700 transition-colors">
                      <span>{currentLanguage === 'ID' ? 'Lihat Detail' : 'View Detail'}</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={handleNavToCollection}
              className="inline-flex items-center space-x-2 font-sans text-sm font-bold text-forest-800 hover:text-forest-950 group cursor-pointer"
            >
              <span>{currentLanguage === 'ID' ? 'Lihat Seluruh Koleksi Adiguna' : 'Browse All Creations'}</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. NEW INTERACTIVE: BOTANICAL GLOSSARY SLIDER (Educating the customer) */}
      <section className="px-6 py-20 sm:px-8 bg-beige-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 max-w-xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 rounded-full bg-mustard-100 px-3 py-1 text-xs font-bold text-mustard-700">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Glosarium Dedaunan Alami</span>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-forest-950">
              {currentLanguage === 'ID' ? 'Rahasia Pigmen Warna Kami' : 'Flora as Our Organic Alchemy'}
            </h2>
            <p className="text-sm text-forest-800/80 font-sans">
              {currentLanguage === 'ID'
                ? 'Setiap jenis daun tropis memiliki karakter zat tanin unik yang menentukan warna akhir rilis kriya.'
                : 'Every tropical leaf carries specific tannin signatures that dictate final shades and outlines.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOTANICAL_LEAVES_GLOSSARY.map((leaf, index) => (
              <div 
                key={index} 
                className="bg-white border border-beige-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-forest-500 transition-all text-left group"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">{leaf.icon}</div>
                <h4 className="font-serif text-base font-bold text-forest-950 group-hover:text-forest-700 transition-colors">
                  {leaf.name}
                </h4>
                <div className="mt-1.5 inline-block text-[10px] font-bold text-mustard-600 bg-mustard-50 border border-mustard-200 px-2.5 py-0.5 rounded-full leading-none">
                  🎨 {leaf.color}
                </div>
                <p className="text-xs text-forest-800/85 font-sans leading-relaxed mt-3 border-t border-beige-100 pt-3">
                  {leaf.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UNIVERSAL CTA */}
      <section className="bg-forest-900 text-beige-100 py-16 px-6 sm:px-8 relative overflow-hidden" id="cta-footer-home">
        <div className="absolute inset-0 bg-radial-gradient from-forest-800 to-transparent opacity-55 pointer-events-none" />
        <div className="mx-auto max-w-4xl text-center space-y-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {currentLanguage === 'ID' ? 'Siap Menjadi Bagian dari Perubahan?' : 'Ready to Join the Movement?'}
          </h2>
          <p className="text-sm sm:text-base text-beige-100/70 font-sans max-w-xl mx-auto leading-relaxed">
            {currentLanguage === 'ID'
              ? 'Miliki karya wastra tradisional yang sepenuhnya lestari, menghidupkan ekosistem lokal pengrajin Sleman, dan menjaga keharmonisan bumi.'
              : 'Acquire traditional fine wear that empowers Sleman craft artisans and preserves local forestry chains safely.'}
          </p>
          <div className="pt-2">
            <button
              onClick={handleNavToCollection}
              id="cta-join-movement"
              className="inline-flex items-center space-x-2.5 rounded-full bg-mustard-500 text-forest-950 px-8 py-4 text-sm font-bold hover:bg-mustard-600 transition-all cursor-pointer shadow-md shadow-mustard-600/10"
            >
              <span>{currentLanguage === 'ID' ? 'Lihat Katalog Koleksi' : 'Explore Collections Catalog'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
