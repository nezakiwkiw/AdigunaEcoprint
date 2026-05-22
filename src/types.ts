export type PageType = 'home' | 'koleksi' | 'tentang';

export interface Product {
  id: string;
  name: string;
  category: 'Syal' | 'Sutra' | 'Pashmina' | 'Bahan Katun' | 'Busana' | 'Aksesoris';
  price: number;
  description: string;
  longDescription: string;
  image: string; // Unsplash dynamic URL
  images?: string[]; // optional additional images
  leavesUsed: string[]; // e.g. ["Daun Jati", "Daun Jarak", "Daun Lanang"]
  material: string; // e.g. "Sutra Habutai", "Katun Primisima"
  dimensions: string; // e.g. "200 x 55 cm"
  features: string[]; // unique qualities
  isFeatured: boolean;
}

export interface ArtisanStat {
  value: string;
  label: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
  productPurchased: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface InteractiveMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
  selectedProduct?: string;
}
