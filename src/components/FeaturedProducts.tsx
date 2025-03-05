import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { FEATURED_PRODUCTS } from '@/lib/constants';

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Nossos <span className="text-sonhar-red">Produtos</span>
          </h2>
          <div className="w-20 h-1 bg-sonhar-red mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Descubra nossa seleção de colchões e estofados de alta qualidade, projetados para 
            proporcionar o máximo conforto e durabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} className="appear" style={{ animationDelay: `${product.id * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/produtos" className="inline-flex items-center btn-primary gap-2 group">
            <span>Ver Todos os Produtos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
