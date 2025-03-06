import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ALL_PRODUCTS } from '@/lib/constants';
import Header from '@/components/Header';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ProductDetail from '@/components/ProductDetail';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Find the product by ID
    if (id) {
      const foundProduct = ALL_PRODUCTS.find(p => p.id === parseInt(id));
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-20">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Link to="/produtos" className="text-sonhar-red hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} />
            <span>Voltar para todos os produtos</span>
          </Link>
        </div>
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/produtos" 
          className="inline-flex items-center text-sonhar-red gap-1 mb-6 hover:underline"
        >
          <ArrowLeft size={16} />
          <span>Voltar para todos os produtos</span>
        </Link>
        
        <ProductDetail 
          product={product}
          isOpen={true}
          onClose={() => window.history.back()}
        />
      </div>
      <FloatingWhatsApp />
    </div>
  );
};

export default ProductDetails;
