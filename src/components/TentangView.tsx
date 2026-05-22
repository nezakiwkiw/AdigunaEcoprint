import React, { useState } from 'react';
import { Product, Review } from '../types';
import { COMPREHENSIVE_PRODUCTS, ARTISAN_STATS, REVIEWS, PAST_EVENTS } from '../data';
import { Check, Mail, Phone, MapPin, Instagram, Store, MessageSquare, Heart, Clock, Calendar, Users, Send, Quote } from 'lucide-react';

interface TentangViewProps {
  setSelectedProduct: (product: Product) => void;
  currentLanguage: 'ID' | 'EN';
}

type ActiveTabType = 'produk' | 'sanggar' | 'ulasan' | 'kegiatan';

export default function TentangView({ setSelectedProduct, currentLanguage }: TentangViewProps) {
  const [activeTab, setActiveTab] = useState<ActiveTabType>('sanggar');
  
  // Contact Form States
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const featuredProducts = COMPREHENSIVE_PRODUCTS.filter(p => p.isFeatured);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMessage) return;
    
    // Create WhatsApp text query for standard checkout/information queries
    const textQuery = `Halo Ibu Dyah Orbarini, saya ${formName}. ${formMessage}. Kontak saya di ${formPhone} / ${formEmail}`;
    const encodedText = encodeURIComponent(textQuery);
    const waLink = `https://wa.me/6282178714080?text=${encodedText}`;
    
    // Simulate form submission success
    setFormSubmitted(true);
    
    // Open WA in new tab securely
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setFormName('');
    setFormEmail('');
    setFormPhone('');
    setFormMessage('');
    setFormSubmitted(false);
  };

  return (
    <div className="animate-fade-in" id="tentang-view-container">
      
      {/* 1. HERO PROFILE & BIO SECTION */}
      <section className="relative px-6 py-20 sm:px-8 bg-beige-100 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Artisan Profile Card (Dyah Orbarini) */}
            <div className="lg:col-span-5 relative" id="artisan-profile-card">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-mustard-500/20 to-forest-500/20 blur-xl" />
              
              <div className="relative bg-white border border-beige-300 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 text-left">
                {/* Photo Portrait */}
                <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto shadow-inner bg-beige-50">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                    alt="Dyah Orbarini - Maestro EcoPrint"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-95"
                  />
                  {/* Overlapping Stamp */}
                  <span className="absolute bottom-4 left-4 bg-mustard-500 text-forest-950 font-sans text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    🎖️ Artisan Pelopor
                  </span>
                </div>

                {/* Name Card */}
                <div className="space-y-1.5 border-b border-beige-100 pb-4">
                  <h2 className="font-serif text-2xl font-bold text-forest-950">Dyah Orbarini</h2>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-mustard-600">
                    Seni Wastra Botani & Pendiri Sanggar Adiguna
                  </p>
                </div>

                {/* Brief bio text */}
                <p className="font-sans text-xs sm:text-sm text-forest-800/80 leading-relaxed italic">
                  "Menekuni keselarasan mordan tawas alami dan pigmen daun tropis sejak 2014, membimbing kemandirian ekonomi puluhan pengrajin perempuan Banyumas."
                </p>

                {/* Social media connections */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <a 
                    href="https://wa.me/6282178714080" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-100 transition-colors"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href="https://instagram.com/adiguna_ecoprint" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-800 text-xs font-semibold border border-pink-100 transition-colors"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Stats and Artisan descriptions */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-mustard-600">
                  {currentLanguage === 'ID' ? 'Temui Sang Artisan Kami' : 'Meet Our Founder'}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-950">
                  {currentLanguage === 'ID' ? 'Kisah Dedikasi Selembar Serat Alam' : 'Decades of Slow-Fashion Devotion'}
                </h1>
              </div>

              <p className="font-sans text-sm sm:text-base text-forest-800/80 leading-relaxed">
                {currentLanguage === 'ID'
                  ? 'Ibu Dyah Orbarini memulai riset mordanting kain serat selulosa sejak satu dekade lalu di halaman kecil rumahnya di Purwokerto, Banyumas. Dengan ketekunan meneliti zat tanin pada dedaunan nusantara, beliau melahirkan formula rahasia emulsi minyak zaitun-kedelai untuk mengunci uap warna tanaman yang tajam, anti luntur, dan indah dipandang mata.'
                  : 'Ibu Dyah Orbarini initiated organic mordanting research in her Purwokerto garden back in 2014. By testing hundreds of wild tropical leaf taninnates, she achieved our signature olive-soy emulsion that perfectly fixes herbal pigmentation without harsh chemical fixatives.'}
              </p>

              {/* Stats card grid beside the profile box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" id="artisan-stats-grid">
                {ARTISAN_STATS.map((stat, idx) => (
                  <div key={idx} className="bg-white border border-beige-300 p-5 rounded-2xl shadow-sm space-y-2">
                    <span className="font-serif text-2xl font-bold text-mustard-600 block leading-none">
                      {stat.value}
                    </span>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-forest-900">
                      {stat.label}
                    </h4>
                    <p className="font-sans text-[11px] text-forest-700/80 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TABBED DETAIL MULTI-MODULE SHOWCASE */}
      <section className="px-6 py-20 sm:px-8 bg-beige-50">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-xl mx-auto space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-forest-950">
              {currentLanguage === 'ID' ? 'Seluk Beluk Sanggar Adiguna' : 'Sanggar Chronicles'}
            </h2>
            <p className="text-xs sm:text-sm text-forest-800/80">
              {currentLanguage === 'ID'
                ? 'Klik tab menu di bawah ini untuk menjelajahi cerita di balik layar, ulasan, serta jadwal acara kami.'
                : 'Switch between tabs below to view our detailed organic timeline, reviews, and interactive workshops.'}
            </p>
          </div>

          {/* TAB BAR SELECTORS */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-beige-200 pb-4 max-w-2xl mx-auto" id="profile-detailed-tab-selector">
            <button
              onClick={() => setActiveTab('sanggar')}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'sanggar'
                  ? 'bg-forest-800 text-beige-50 shadow-md'
                  : 'bg-white text-forest-800/75 border border-beige-200 hover:bg-beige-100'
              }`}
            >
              ⏳ Tentang Sanggar
            </button>
            <button
              onClick={() => setActiveTab('produk')}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'produk'
                  ? 'bg-forest-800 text-beige-50 shadow-md'
                  : 'bg-white text-forest-800/75 border border-beige-200 hover:bg-beige-100'
              }`}
            >
              🌸 Produk Pilihan
            </button>
            <button
              onClick={() => setActiveTab('ulasan')}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'ulasan'
                  ? 'bg-forest-800 text-beige-50 shadow-md'
                  : 'bg-white text-forest-800/75 border border-beige-200 hover:bg-beige-100'
              }`}
            >
              💬 Ulasan Pembeli
            </button>
            <button
              onClick={() => setActiveTab('kegiatan')}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'kegiatan'
                  ? 'bg-forest-800 text-beige-50 shadow-md'
                  : 'bg-white text-forest-800/75 border border-beige-200 hover:bg-beige-100'
              }`}
            >
              🎪 Pameran & Fashion Show
            </button>
          </div>

          {/* TAB CONTENTS PANEL */}
          <div className="mt-10 max-w-4xl mx-auto" id="profile-detailed-tab-panel">
            
            {/* TAB: SANGGAR STORY / TIME-LINE */}
            {activeTab === 'sanggar' && (
              <div className="bg-white border border-beige-200 rounded-3xl p-6 sm:p-10 text-left space-y-8 animate-fade-in shadow-sm">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                    6 Fase Seni Mengunci Warna Bumi (Steam Method)
                  </h3>
                  <p className="text-xs text-forest-800/70">
                    Proses tradisional lambat (slow-fashion) yang kami terapkan untuk menjaga keaslian visual dedaunan:
                  </p>
                </div>

                <div className="relative border-l border-beige-300 pl-6 ml-2 space-y-6">
                  
                  <div className="relative">
                    <span className="absolute -left-10 top-0.5 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-forest-800 text-white font-serif font-bold text-xs ring-4 ring-white">1</span>
                    <h4 className="text-sm font-bold text-forest-950">Pemetikan Etis & Pengeringan Parsial (Foraging)</h4>
                    <p className="text-xs text-forest-700/80 leading-relaxed mt-1">Kami memilah daun Jati muda, Lanang, dan Jarak wulung ber-klorofil stabil sehabis embun fajar mengering.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-10 top-0.5 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-forest-800 text-white font-serif font-bold text-xs ring-4 ring-white">2</span>
                    <h4 className="text-sm font-bold text-forest-950">Scouring (Pembersihan Serat Kain)</h4>
                    <p className="text-xs text-forest-700/80 leading-relaxed mt-1">Serat kain direbus berjam-jam menggunakan air kelapa tua dan lerak alami untuk membersihkan sisa lilin pabrik.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-10 top-0.5 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-forest-800 text-white font-serif font-bold text-xs ring-4 ring-white">3</span>
                    <h4 className="text-sm font-bold text-forest-950">Mordanting (Emulsi Minyak Zaitun)</h4>
                    <p className="text-xs text-forest-700/80 leading-relaxed mt-1">Sutra atau katun direndam minyak zaitun dan susu soya selama 3 hari berturut-turut agar serat siap mengikat asam tanin daun.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-10 top-0.5 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-forest-800 text-white font-serif font-bold text-xs ring-4 ring-white">4</span>
                    <h4 className="text-sm font-bold text-forest-950">Penyusunan Desain (Arrangement & Blanketing)</h4>
                    <p className="text-xs text-forest-700/80 leading-relaxed mt-1">Daun diratakan di atas bentangan wastra basah, kemudian ditutup dengan kain selimut (blanket) berpori halus.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-10 top-0.5 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-forest-800 text-white font-serif font-bold text-xs ring-4 ring-white">5</span>
                    <h4 className="text-sm font-bold text-forest-950">Pengukusan Kedap Udara (Steam - 2 Jam)</h4>
                    <p className="text-xs text-forest-700/80 leading-relaxed mt-1">Kain digulung kencang membalut bilah bambu, diikat tali rami erat-erat, kemudian di-steam di dalam tong panas selama 120 menit.</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-10 top-0.5 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-forest-800 text-white font-serif font-bold text-xs ring-4 ring-white">6</span>
                    <h4 className="text-sm font-bold text-forest-950">Pengangin-anginan Kompleks (Aging - 14 Hari)</h4>
                    <p className="text-xs text-forest-700/80 leading-relaxed mt-1">Kain perlahan dibuka ikatannya dan diangin-anginkan di area teduh selama 2 minggu penuh tanpa terik langsung agar serat terkunci kuat.</p>
                  </div>

                </div>
              </div>
            )}

            {/* TAB: FEATURED PRODUCTS */}
            {activeTab === 'produk' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
                {featuredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="group cursor-pointer rounded-2xl border border-beige-200 bg-white p-4 text-left transition-all hover:border-forest-500 shadow-sm hover:shadow-md"
                  >
                    <div className="relative rounded-xl overflow-hidden aspect-square bg-beige-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="mt-3.5 space-y-1 flex items-center justify-between">
                      <h4 className="font-serif text-sm font-bold text-forest-950 line-clamp-1 flex-1 mr-2">{product.name}</h4>
                      <span className="text-[9px] bg-beige-200/80 text-forest-800/80 font-bold px-2 py-0.5 rounded uppercase shrink-0">
                        {product.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB: REVIEWS TESTIMONIALS */}
            {activeTab === 'ulasan' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                {REVIEWS.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white border border-beige-200 p-6 rounded-2xl text-left shadow-sm space-y-4 relative flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex text-amber-500">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      
                      <q className="font-sans text-xs text-forest-800/80 leading-relaxed block italic">
                        {review.text}
                      </q>
                    </div>

                    <div className="flex items-center space-x-3 border-t border-beige-50 pt-3 mt-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        referrerPolicy="no-referrer"
                        className="h-9 w-9 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-forest-950 leading-none">{review.name}</h4>
                        <span className="text-[10px] text-forest-600/70 block mt-0.5">{review.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}



            {/* TAB: EXHIBITIONS AND FASHION SHOW DOCUMENTS */}
            {activeTab === 'kegiatan' && (
              <div className="space-y-8 animate-fade-in" id="kegiatan-gallery-panel">
                <div className="bg-white border border-beige-200 rounded-3xl p-6 sm:p-10 text-left space-y-4 shadow-sm">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                    Dokumentasi Pameran & Fashion Show
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-forest-800/80 leading-relaxed">
                    Adiguna EcoPrint aktif berpartisipasi dalam peragaan busana bergengsi dan pameran kerajinan tingkat nasional untuk mengenalkan serta mengedukasi masyarakat luas mengenai wastra ecoprint yang bernilai seni tinggi, etis, dan berkelanjutan. Berikut adalah rekam jejak kegiatan yang telah kami laksanakan:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {PAST_EVENTS.map((event) => (
                    <div 
                      key={event.id}
                      className="group bg-white border border-beige-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col text-left"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-beige-50 shrink-0">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-mustard-500 text-forest-950 font-sans text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                          {event.date}
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="font-sans text-xs font-semibold text-forest-600 flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-mustard-600" />
                            <span>{event.location}</span>
                          </div>
                          <h4 className="font-serif text-lg font-bold text-forest-950 group-hover:text-forest-700 transition-colors leading-snug">
                            {event.title}
                          </h4>
                          <p className="font-sans text-xs text-forest-800/75 leading-relaxed">
                            {event.description}
                          </p>
                        </div>

                        <div className="border-t border-beige-100 pt-4 flex items-center justify-between">
                          <span className="font-sans text-[10px] font-bold uppercase text-forest-600/60 tracking-wider">
                            Adiguna EcoPrint Resmi
                          </span>
                          <span className="text-[10px] font-bold text-mustard-600 group-hover:text-mustard-700 transition-colors flex items-center gap-1">
                            {currentLanguage === 'ID' ? 'Dokumentasi Kegiatan' : 'Event Documentation'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 3. SEKSION HUBUNGI KAMI */}
      <section className="px-6 py-20 sm:px-8 bg-beige-100" id="contact-us-interactive-form">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Contact Details & Map coordinates */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-mustard-600">
                  {currentLanguage === 'ID' ? 'Mari Berbincang' : 'Get In Touch'}
                </span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-forest-950">
                  {currentLanguage === 'ID' ? 'Kunjungi atau Hubungi Sanggar Kami' : 'Connect with the Artisan Studio'}
                </h2>
              </div>

              <p className="font-sans text-xs sm:text-sm text-forest-800/85 leading-relaxed">
                {currentLanguage === 'ID'
                  ? 'Pintu sanggar kami terbuka bagi kolektor, desainer, maupun siswa yang ingin mengenal rahasia wastra botani kami di Purwokerto, Banyumas. Silakan layangkan pesan digital di samping ini atau ketuk kanal sosial kami.'
                  : 'We welcome curators, garment designers, and botanical students at our physical garden in Purwokerto, Banyumas. Fire off an digital dispatch or reach us directly via WA, Shopee, or Insta.'}
              </p>

              {/* Contacts info bullets */}
              <div className="space-y-4 font-sans text-sm">
                
                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-white border border-beige-200">
                  <MapPin className="h-5 w-5 text-mustard-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-forest-950">Lokasi Google Map Sanggar</h4>
                    <span className="text-xs text-forest-800/75 block mt-0.5">
                      Dukuwaluh, Purwokerto, Banyumas, Jawa Tengah, Indonesia
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-white border border-beige-200">
                  <Phone className="h-5 w-5 text-mustard-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-forest-950">Telepon & WhatsApp Resmi</h4>
                    <span className="text-xs text-forest-800/75 block mt-0.5">+62 821-7871-4080</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-white border border-beige-200">
                  <Mail className="h-5 w-5 text-mustard-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-forest-950">Email Konsultasi</h4>
                    <span className="text-xs text-forest-800/75 block mt-0.5">dyah.orbarini@adigunaecoprint.com</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Col: Fully Interactive WhatsApp proxy form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-beige-300 p-6 sm:p-10 rounded-3xl shadow-lg">
                
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in" id="contact-form-success">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-forest-950">
                      Pesan Terkirim Melalui WhatsApp!
                    </h3>
                    <p className="text-xs text-forest-800/70 max-w-sm mx-auto leading-relaxed">
                      Sistem sedang mengarahkan Anda ke aplikasi WhatsApp Ibu Dyah Orbarini. Anda juga dapat mengirim ulang atau mengisi ulang ulasan lainnya.
                    </p>
                    <button
                      onClick={handleResetForm}
                      className="mt-4 rounded-full border border-forest-800/20 px-5 py-2 text-xs font-bold text-forest-800 hover:bg-beige-100 transition-colors"
                    >
                      Kirim Pesan Baru
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6 text-left" id="contact-form-instance">
                    <h3 className="font-serif text-lg font-bold text-forest-950 border-b border-beige-100 pb-3">
                      Layangkan Pesan Langsung ke Ibu Dyah
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-forest-900 font-sans">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Contoh: Siti Rahma"
                          className="w-full rounded-xl border border-beige-200 bg-beige-50/50 p-3 text-xs text-forest-900 focus:border-forest-600 focus:outline-none"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-forest-900 font-sans">
                          Email Aktif *
                        </label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="siti@example.com"
                          className="w-full rounded-xl border border-beige-200 bg-beige-50/50 p-3 text-xs text-forest-900 focus:border-forest-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-forest-900 font-sans">
                        Nomor Handphone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="Contoh: +62 812..."
                        className="w-full rounded-xl border border-beige-200 bg-beige-50/50 p-3 text-xs text-forest-900 focus:border-forest-600 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-forest-900 font-sans">
                        Pesan Anda *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Uraikan kustomisasi motif kain yang Anda minati atau sampaikan pertanyaan umum..."
                        className="w-full rounded-xl border border-beige-200 bg-beige-50/50 p-3 text-xs text-forest-900 focus:border-forest-600 focus:outline-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center space-x-2 rounded-xl bg-forest-800 text-beige-50 p-4 text-xs font-bold hover:bg-forest-900 hover:text-white transition-all cursor-pointer"
                    >
                      <Send className="h-4 w-4 text-mustard-500" />
                      <span>Kirim dan Hubungkan ke WhatsApp</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
