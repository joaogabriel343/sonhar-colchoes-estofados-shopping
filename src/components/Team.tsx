import { Phone } from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/constants';

const Team = () => {
  const handleWhatsAppClick = (contact: string, message: string) => {
    const whatsappUrl = `https://wa.me/${contact}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="team" className="section-padding bg-sonhar-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Nossa <span className="text-sonhar-red">Equipe</span>
          </h2>
          <div className="w-20 h-1 bg-sonhar-red mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Conheça os profissionais que trabalham diariamente para garantir o melhor atendimento e 
            os melhores produtos para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={member.id} 
              className={`text-center ${index >= 2 ? 'lg:col-span-2' : 'lg:col-span-2'}`}
            >
              <div className="bg-white rounded-lg shadow-elegant p-6 card-hover transform">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-sonhar-red">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sonhar-red font-medium mb-4">{member.position}</p>
                <button 
                  onClick={() => handleWhatsAppClick(member.contact, member.message)}
                  className="whatsapp-btn w-full justify-center"
                >
                  <Phone size={16} />
                  <span>Contato</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
