import { MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/constants';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  isNew?: boolean;
  discount?: number;
};

const ProductCard = ({ id, name, price, description, image, isNew = false, discount = 0 }: ProductCardProps) => {
  const discountedPrice = price - (price * (discount / 100));
  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(discountedPrice);
  const formattedOriginalPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de saber mais sobre o produto: ${name}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-product card-hover">
      <div className="relative w-full aspect-[4/3]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {isNew && <span className="badge">Novo</span>}
        {discount > 0 && <span className="badge bg-orange-500 left-2 right-auto">{discount}% OFF</span>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2 truncate">{name}</h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold text-sonhar-red">{formattedPrice}</span>
          {discount > 0 && (
            <span className="text-sm text-gray-500 line-through">{formattedOriginalPrice}</span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <button 
          onClick={handleWhatsAppClick}
          className="w-full py-3 bg-sonhar-black text-white rounded-md flex items-center justify-center gap-2 transition-all hover:bg-opacity-90"
        >
          <MessageSquare size={18} />
          <span>Tenho Interesse</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
