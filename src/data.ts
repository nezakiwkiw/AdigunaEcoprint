import { Product, ArtisanStat, Review } from './types';

export const COMPREHENSIVE_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Kain Sutra Habutai "Flora Tropis"',
    category: 'Sutra',
    price: 345000,
    description: 'Lembaran kain sutra habutai premium berhias ecoprint motif bunga dan daun mawar berwarna-warni alami.',
    longDescription: 'Lembaran sutra Habutai premium yang dihiasi dengan cetakan bunga mawar liar, daun jati muda, dan tanaman paku tropis. Melalui proses pengukusan (steaming) manual selama 2,5 jam di Sanggar Adiguna, serat sutra mampu melepaskan kilau alaminya sekaligus mengunci pigmen botani secara permanen dan indah.',
    image: '/src/assets/images/white_ecoprint_fabric_1779455537642.png',
    leavesUsed: ['Daun Jati Muda', 'Bunga Mawar', 'Daun Pakis', 'Ketapang'],
    material: '100% Sutra Habutai Premium (Sangat lembut dan mengkilap alami)',
    dimensions: '200 x 115 cm',
    features: ['Pigmen warna murni bunga & daun asli', 'Serat sutra premium berkilau mewah', 'Pola menyebar simetris yang elegan'],
    isFeatured: true
  },
  {
    id: 'p2',
    name: 'Sepatu Canvas & Journal "Artisan Set"',
    category: 'Aksesoris',
    price: 450000,
    description: 'Set eksklusif sepatu sneakers kanvas bermotif ecoprint serta buku jurnal bersampul serat alam.',
    longDescription: 'Satu set aksesoris gaya hidup ramah lingkungan yang sangat chic. Terdiri dari sepatu sneakers bertali berbahan kanvas tebal dengan cetakan ecoprint daun lanang yang cantik, serta buku catatan harian (journal) bersampul kertas ecoprint buatan tangan dan aksen casing smartphone kulit nabati.',
    image: '/src/assets/images/flatlay_accessories_1779455589017.png',
    leavesUsed: ['Daun Lanang', 'Daun Jati Kecil', 'Kulit Kayu Mahoni'],
    material: 'Premium Canvas, Genuine Leather, and Recycled Paper',
    dimensions: 'Sepatu: Size 37-41 | Journal: A5',
    features: ['Sepatu ber-sol karet lentur dan nyaman', 'Buku memo eksklusif dengan kertas daur ulang', 'Gaya hidup etis, unik, dan artistik'],
    isFeatured: true
  },
  {
    id: 'p3',
    name: 'Kemeja Katun Klasik "Autumn Golden"',
    category: 'Busana',
    price: 325000,
    description: 'Kemeja kancing lengan pendek dari kain katun primisima berserat halus dengan warna dasar kuning sawi alami.',
    longDescription: 'Kemeja kemeja pria lengan pendek casual beraksen saku tempel yang dikerjakan dengan penuh dedikasi. Menggunakan bahan dasar Katun Primisima Mercerized yang sangat adem, bermotif cetakan daun jati muda kemerahan serta daun lanang berpola bintang di atas latar belakang ekstrak warna buah secang & kunyit hangat.',
    image: '/src/assets/images/yellow_shirt_1779455518917.png',
    leavesUsed: ['Daun Jati', 'Daun Lanang', 'Daun Jarak Wulung'],
    material: 'Katun Primisima Mercerized Superfine',
    dimensions: 'Ukuran M, L, XL, XXL (Regular Fit)',
    features: ['Sangat menyerap keringat dan nyaman dipakai harian', 'Jahitan double-stitch rapi standar butik', 'Dilengkapi saku dada dengan list dekoratif cokelat'],
    isFeatured: true
  },
  {
    id: 'p4',
    name: 'Kain Linen Hitam "Eucalyptus Shadow"',
    category: 'Bahan Katun',
    price: 245000,
    description: 'Kain serat linen hitam tropis berhiaskan siluet daun jarak wulung dan eukaliptus kuning keemasan.',
    longDescription: 'Kain premium siap jahit yang memadukan keanggunan warna hitam gelap dengan kontras cetakan siluet daun jarak wulung dan eukaliptus kuning cerah. Teknik mordanting besi (iron mordant) khusus digunakan untuk mengeluarkan efek siluet daun bagaikan bayangan cahaya di gelap malam.',
    image: '/src/assets/images/dark_ecoprint_fabric_1779455555216.png',
    leavesUsed: ['Daun Jarak Wulung', 'Daun Eukaliptus', 'Daun Afrika'],
    material: '100% Linen Tropis Organik Berkepadatan Tinggi',
    dimensions: '220 x 115 cm',
    features: ['Tekstur linen rustic yang kokoh dan berkarakter', 'Siluet warna kontras yang sangat indah', 'Drape kain jatuh dan terlihat berkelas saat dijahit'],
    isFeatured: false
  },
  {
    id: 'p5',
    name: 'Jaket Bomber "Adiguna Forest"',
    category: 'Busana',
    price: 580000,
    description: 'Jaket zipper/bomber unisex berbahan twill premium berpola abstrak daun dan bunga hutan tropis di atas warna abu lumut.',
    longDescription: 'Salah satu mahakarya fashion unggulan dari Sanggar Adiguna. Jaket bomber kasual bersleting besi berkualitas tinggi, dibuat dari bahan katun twill yang tebal dan nyaman. Memiliki gradasi warna dasar abu-abu lumut alami dengan sebaran motif daun eukaliptus, pinus, dan pakis hutan yang tampak modern dan eksentrik.',
    image: '/src/assets/images/jacket_outer_1779455489984.png',
    leavesUsed: ['Daun Eukaliptus', 'Dahan Daun Pinus', 'Daun Pakis Tropis'],
    material: 'Katun Twill Premium & Furing Asahi',
    dimensions: 'All Size (Fit to XL, LD 112 cm, Panjang 68 cm)',
    features: ['Desain unisex, modis untuk pria maupun wanita', 'Menggunakan ritsleting logam YKK antik', 'Kerah dan lingkar lengan rib rajut elastis yang nyaman'],
    isFeatured: false
  },
  {
    id: 'p6',
    name: 'Tas Bucket Kanvas "Lavender Breeze"',
    category: 'Aksesoris',
    price: 220000,
    description: 'Tas bucket serut kanvas rajut berpola daun-daun keunguan indah, didukung rantai bahu kuningan antik.',
    longDescription: 'Tas aksesoris genggam atau bahu bergaya vintage. Dibuat dari kain kanvas katun tenun bertekstur, di-print ecoprint dengan warna dasar ungu lavender lembut yang dipadukan dengan daun lanang. Bukaan model serut (drawstring) dan pegangan melingkar kuningan kokoh berhias rantai bahu mewah menjadikannya pelengkap busana pesta formal maupun semi-formal.',
    image: '/src/assets/images/purple_bucket_bag_177945574943.png',
    leavesUsed: ['Daun Lanang', 'Daun Jati Kecil', 'Indigofera'],
    material: 'Canvas Cotton Drill, Kuningan Antik, & Velvet Lining',
    dimensions: '24 x 20 x 12 cm',
    features: ['Dilengkapi tali rantai kuningan antik panjang', 'Penutup serut yang aman dengan pengunci logam', 'Bagian dalam dilapisi beludru lembut'],
    isFeatured: false
  }
];

export const ARTISAN_STATS: ArtisanStat[] = [
  {
    value: '450+',
    label: 'Karya Terjual',
    description: 'Syal, kain, busana, dan aksesoris ramah lingkungan telah tersebar di seluruh Indonesia dan mancanegara.'
  },
  {
    value: '100%',
    label: 'Botani Alami',
    description: 'Semua pigmen warna murni diekstrak dari pepohonan, dedaunan, akar, kulit kayu, dan buah tropis lokal.'
  },
  {
    value: '12+',
    label: 'Tahun Pengalaman',
    description: 'Dyah Orbarini mendedikasikan hidupnya meneliti ketajaman motif botani tropis di atas kain serat alam.'
  },
  {
    value: '30+',
    label: 'Kelompok Binaan',
    description: 'Melatih ibu-ibu rumah tangga dan pemuda sekitar sanggar untuk turut melestarikan warisan seni nusantara.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Siti Rahmawati',
    role: 'Kolektor Wastra & Desainer Busana',
    rating: 5,
    text: 'Detail urat daun jati pada Syal Sutra Habutai sangat presisi! Saya punya banyak koleksi ecorprint, tetapi karya Ibu Dyah memiliki tingkat kerapian mordan yang luar biasa bersih. Serat sutranya sangat mewah berkilau.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
    productPurchased: 'Syal Sutra Habutai Jati Klasik'
  },
  {
    id: 'r2',
    name: 'Budi Santoso',
    role: 'Pelanggan Setia Yogyakarta',
    rating: 5,
    text: 'Sangat menyukai kain katun primisima-nya. Adem sekali dipakai untuk kemeja kondangan. Banyak rekan kerja menanyakan dari mana saya mendapatkan motif alami sekreatif ini. Nilai seni yang tinggi!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    productPurchased: 'Kain Katun Primisima Daun Pakis'
  },
  {
    id: 'r3',
    name: 'Amanda Wijaya',
    role: 'Pecinta Gaya Hidup Slow Fashion',
    rating: 5,
    text: 'Bukan sekadar membeli pakaian, tapi juga mendukung keberlanjutan bumi kita. Warnanya awet walaupun dicuci berkali-kali menggunakan lerak. Benar-benar produk masterpiece buatan tangan.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    productPurchased: 'Tunik EcoPrint Rayon Dedaunan Rimba'
  }
];

export const BOTANICAL_LEAVES_GLOSSARY = [
  {
    name: 'Daun Jati (Tectona grandis)',
    color: 'Terracotta, Merah Bata, Violet Tua',
    description: 'Pigmen alami daun jati muda mentransfer warna merah kecokelatan yang pekat dan sangat stabil saat di-steam.',
    icon: '🍂'
  },
  {
    name: 'Daun Jarak Wulung (Ricinus communis)',
    color: 'Hijau Sage Gelap, Abu-Abu Kebiruan',
    description: 'Memberikan kontur bentuk daun menjari menyerupai bintang yang dinamis dan bertekstur tegas pada serat katun.',
    icon: '🍁'
  },
  {
    name: 'Daun Lanang (Glandulosa)',
    color: 'Kuning Mustar, Emas Zaitun',
    description: 'Dikenal menghasilkan warna cerah keemasan dan kontur tepi bergerigi halus yang sangat indah sebagai pemanis sela-sela motif.',
    icon: '🌿'
  },
  {
    name: 'Eukaliptus (Eucalyptus)',
    color: 'Kuning Madu, Oranye Karat, Merah',
    description: 'Bentuk daunnya yang memanjang menciptakan aliran ritmis bergelombang dengan gradasi warna hangat berkabut.',
    icon: '🌱'
  }
];

export interface PastEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export const PAST_EVENTS: PastEvent[] = [
  {
    id: 'e1',
    title: 'Jogja Fashion Week 2023',
    date: 'Oktober 2023',
    location: 'Jogja Expo Center, D.I. Yogyakarta',
    description: 'Mempersembahkan peragaan busana (Fashion Show) berseri "Dedaunan Rimba". Paduan sutra Habutai mewah dengan pewarnaan alami eksklusif daun jati muda dan pakis hutan, menampilkan 10 karya adibusana yang elegan dan 100% ramah lingkungan.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 'e2',
    title: 'Inacraft JCC 2024',
    date: 'Maret 2024',
    location: 'Jakarta Convention Center (JCC), Jakarta',
    description: 'Pameran kerajinan tangan terbesar di Asia Tenggara. Koleksi syal sutra dan clutch canvas daun jati Adiguna menarik minat ribuan kolektor wastra nasional dan mancanegara yang mengapresiasi kebersihan detail pola serat daun.',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 'e3',
    title: 'Karya Kreatif Indonesia (KKI)',
    date: 'Juli 2024',
    location: 'Hall A, Jakarta Convention Center',
    description: 'Dipilih sebagai salah satu UMKM Wastra unggulan binaan Go-Green Bank Indonesia. Menampilkan inovasi produk ecoprint dengan mordanting ramah lingkungan dan bersertifikasi ramah ekosistem.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 'e4',
    title: 'Exhibition & Live Eco-Art Workshop ',
    date: 'November 2023',
    location: 'Galeri Nasional Indonesia, Jakarta',
    description: 'Pameran kriya wastra dan workshop interaktif langsung yang dibawakan oleh Ibu Dyah Orbarini. Mengajarkan teknik pemindahan pigmen daun ke media serat linen kepada komunitas pencinta kain tradisional.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&h=600&q=80'
  }
];

