import { useState, useEffect } from 'react';
import { ALL_PRODUCTS } from '@/lib/constants';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(ALL_PRODUCTS);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(ALL_PRODUCTS);
    } else {
      const term = searchTerm.toLowerCase().trim();
      const filtered = ALL_PRODUCTS.filter(
        product => 
          product.name.toLowerCase().includes(term) || 
          product.description.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen pt-20">
      <Header />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Link 
                to="/" 
                className="inline-flex items-center text-sonhar-red gap-1 mb-4"
              >
                <ArrowLeft size={16} />
                <span className="products-card text-sonhar-red">Voltar para a Página Inicial</span>
              </Link>
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                Todos os Produtos
              </h1>
            </div>
            
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sonhar-red"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="appear" style={{ animationDelay: `${(product.id % 8) * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Nenhum produto encontrado para "{searchTerm}"</p>
              <button 
                className="mt-4 text-sonhar-red hover:underline"
                onClick={() => setSearchTerm('')}
              >
                Limpar pesquisa
              </button>
            </div>
          )}
        </div>
      </section>
      
      <FloatingWhatsApp />
    </div>
  );
};

export default AllProducts;
