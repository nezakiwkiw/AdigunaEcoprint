import { Product, CartItem } from '../types';
import { X, Check, ShoppingBag, MessageSquare, Info, Hammer, Leaf, Sparkles } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  currentLanguage: 'ID' | 'EN';
}

export default function ProductDetailModal({
  product,
  onClose,
  currentLanguage
}: ProductDetailModalProps) {
  if (!product) return null;

  const handleBuyDirect = () => {
    // Generate preconstructed WhatsApp query
    const message = currentLanguage === 'ID'
      ? `Halo Ibu Dyah, saya tertarik memesan produk "${product.name}". Mohon info ketersediaannya.`
      : `Hello Dyah, I am interested in ordering the "${product.name}". Please provide availability details.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6282178714080?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-sm animate-fade-in" id="product-detail-modal">
      
      {/* Absolute click-outside handler */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-beige-50 rounded-3xl shadow-2xl border border-beige-300 grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8 animate-fade-in z-10 text-left">
        
        {/* Close Button top-right */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-beige-200 text-forest-850 hover:bg-beige-100 transition-colors cursor-pointer z-20"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Column Left: High-Res Image Column */}
        <div className="md:col-span-6 relative">
          <div className="sticky top-0 rounded-2xl overflow-hidden aspect-[4/5] bg-beige-100 border border-beige-250">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            
            {/* Category Pill */}
            <span className="absolute top-4 left-4 bg-forest-950 text-beige-100 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest font-sans">
              {product.category}
            </span>
          </div>
        </div>

        {/* Column Right: Informative details */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            
            {/* Title & Category */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4A017] bg-forest-50 px-2.5 py-1 rounded">
                Koleksi {product.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 leading-tight pt-1">
                {product.name}
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-2 border-t border-b border-beige-200/80 py-4 font-sans">
              <p className="text-xs sm:text-sm text-forest-900 leading-relaxed font-semibold">
                {product.description}
              </p>
              <p className="text-xs text-forest-800/70 leading-relaxed mt-1">
                {product.longDescription}
              </p>
            </div>

            {/* Botanical Leaves list section (Unique details) */}
            <div className="space-y-2 text-xs">
              <h4 className="font-sans font-bold uppercase tracking-wider text-forest-900 flex items-center gap-1.5">
                <Leaf className="h-3.5 w-3.5 text-mustard-500" />
                <span>Daun Botanical Yang Digunakan</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.leavesUsed.map((leaf, index) => (
                  <span key={index} className="bg-forest-100 border border-forest-200 text-forest-800 font-medium px-2.5 py-1 rounded-lg">
                    🍁 {leaf}
                  </span>
                ))}
              </div>
            </div>

            {/* Grid Specifications */}
            <div className="grid grid-cols-2 gap-4 text-xs font-sans p-4 rounded-2xl bg-white border border-beige-200/80">
              <div>
                <dt className="text-forest-650/70 font-semibold uppercase tracking-wider text-[9px]">Bahan Serat (Material)</dt>
                <dd className="font-bold text-forest-950 mt-0.5">{product.material}</dd>
              </div>
              <div>
                <dt className="text-forest-650/70 font-semibold uppercase tracking-wider text-[9px]">Dimensi Kain (Size)</dt>
                <dd className="font-bold text-forest-950 mt-0.5">{product.dimensions}</dd>
              </div>
            </div>

            {/* Key product features (Bullet lines) */}
            <div className="space-y-2 text-xs">
              <h4 className="font-sans font-bold uppercase tracking-wider text-forest-900 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-mustard-500" />
                <span>Karakteristik & Kelebihan Karya</span>
              </h4>
              <ul className="space-y-1.5 text-forest-800/85">
                {product.features.map((feat, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Action Button: WhatsApp query */}
          <div className="pt-4 border-t border-beige-200/60">
            <button
              onClick={handleBuyDirect}
              className="w-full inline-flex items-center justify-center space-x-2.5 rounded-xl bg-forest-900 text-beige-50 hover:bg-forest-950 p-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 transform hover:scale-[1.01] cursor-pointer shadow-md shadow-forest-900/10"
            >
              <MessageSquare className="h-5 w-5 text-mustard-500" />
              <span>
                {currentLanguage === 'ID' ? 'Hubungi & Pesan via WhatsApp' : 'Contact & Order via WhatsApp'}
              </span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
