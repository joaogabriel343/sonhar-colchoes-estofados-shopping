import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { WHATSAPP_NUMBER } from '@/lib/constants';

type ProductDetailProps = {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    isNew?: boolean;
    discount?: number;
    additionalImages?: string[];
    fullDescription?: string;
    specifications?: Record<string, string>;
  };
  isOpen: boolean;
  onClose: () => void;
};

const ProductDetail = ({ product, isOpen, onClose }: ProductDetailProps) => {
  const [activeImage, setActiveImage] = useState(0);
  
  const allImages = [
    product.image,
    ...(product.additionalImages || [
      // Fallback images if no additional images provided
      `https://source.unsplash.com/random/800x600?bed&t=${product.id}1`,
      `https://source.unsplash.com/random/800x600?furniture&t=${product.id}2`,
      `https://source.unsplash.com/random/800x600?mattress&t=${product.id}3`,
    ])
  ];

  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de saber mais sobre o produto: ${product.name}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const discountedPrice = product.price - (product.price * ((product.discount || 0) / 100));
  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(discountedPrice);
  const formattedOriginalPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price);

  // Default specifications if none provided
  const specs = product.specifications || {
    "Material": "Espuma de alta densidade",
    "Garantia": "1 ano",
    "Dimensões": "Variável conforme modelo",
    "Peso suportado": "Até 150kg",
    "Composição": "Tecido antialérgico e espuma"
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-full h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-start justify-between">
          <div>
            <DialogTitle className="text-2xl md:text-3xl font-display font-bold text-sonhar-black">
              {product.name}
            </DialogTitle>
            <DialogDescription className="mt-1 text-lg">
              <span className="text-xl font-bold text-sonhar-red">{formattedPrice}</span>
              {product.discount && product.discount > 0 && (
                <span className="ml-2 text-sm text-gray-500 line-through">{formattedOriginalPrice}</span>
              )}
            </DialogDescription>
          </div>
          <DialogClose className="p-2 rounded-full hover:bg-gray-100">
            <X className="h-5 w-5" />
          </DialogClose>
        </DialogHeader>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src={allImages[activeImage]} 
                alt={`${product.name} - Imagem ${activeImage + 1}`} 
                className="w-full h-full object-cover"
              />
              
              {/* Navigation arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-all"
              >
                <ChevronLeft className="h-5 w-5 text-sonhar-black" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-all"
              >
                <ChevronRight className="h-5 w-5 text-sonhar-black" />
              </button>
              
              {/* Badges */}
              {product.isNew && <span className="badge">Novo</span>}
              {product.discount && product.discount > 0 && (
                <span className="badge bg-orange-500 left-2 right-auto">{product.discount}% OFF</span>
              )}
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto py-2">
              {allImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`product-gallery-thumb w-20 h-16 flex-shrink-0 ${activeImage === idx ? 'active' : ''}`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Descrição</h3>
              <p className="text-gray-700">
                {product.fullDescription || product.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Especificações</h3>
              <dl className="space-y-2">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="flex border-b border-gray-100 py-2">
                    <dt className="w-1/3 font-medium text-gray-600">{key}:</dt>
                    <dd className="w-2/3 text-gray-800">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            
            <button 
              onClick={handleWhatsAppClick}
              className="w-full py-3 bg-sonhar-black text-white rounded-md flex items-center justify-center gap-2 transition-all hover:bg-opacity-90 mt-4"
            >
              <MessageSquare size={18} />
              <span>Tenho Interesse</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
