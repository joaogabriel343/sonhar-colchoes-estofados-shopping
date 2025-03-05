import { MISSION_VISION_VALUES } from '@/lib/constants';
import { Target, Eye, Heart } from 'lucide-react';

const MissionVision = () => {
  return (
    <section id="about" className="section-padding bg-sonhar-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Sobre a <span className="text-sonhar-red">Sonhar Colchões</span>
          </h2>
          <div className="w-20 h-1 bg-sonhar-red mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Há mais de 10 anos no mercado, a Sonhar Colchões e Estofados tem se dedicado a proporcionar 
            conforto e qualidade para lares em todo o Brasil. Nossa paixão é transformar ambientes e melhorar 
            a qualidade de vida de nossos clientes através de produtos inovadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-elegant p-8 card-hover transform">
            <div className="flex items-center justify-center w-16 h-16 bg-sonhar-red bg-opacity-10 rounded-full mb-6 mx-auto">
              <Target className="w-8 h-8 text-sonhar-red" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-center">Missão</h3>
            <p className="text-center">
              {MISSION_VISION_VALUES.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-elegant p-8 card-hover transform">
            <div className="flex items-center justify-center w-16 h-16 bg-sonhar-red bg-opacity-10 rounded-full mb-6 mx-auto">
              <Eye className="w-8 h-8 text-sonhar-red" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-center">Visão</h3>
            <p className="text-center">
              {MISSION_VISION_VALUES.vision}
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-lg shadow-elegant p-8 card-hover transform">
            <div className="flex items-center justify-center w-16 h-16 bg-sonhar-red bg-opacity-10 rounded-full mb-6 mx-auto">
              <Heart className="w-8 h-8 text-sonhar-red" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-center">Valores</h3>
            <ul className="space-y-2">
              {MISSION_VISION_VALUES.values.map((value, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-sonhar-red rounded-full mr-2"></span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
