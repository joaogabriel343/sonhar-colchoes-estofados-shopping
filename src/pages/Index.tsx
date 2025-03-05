import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MissionVision from '@/components/MissionVision';
import FeaturedProducts from '@/components/FeaturedProducts';
import Team from '@/components/Team';
import StoreInfo from '@/components/StoreInfo';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useEffect } from 'react';

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MissionVision />
      <FeaturedProducts />
      <Team />
      <StoreInfo />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
