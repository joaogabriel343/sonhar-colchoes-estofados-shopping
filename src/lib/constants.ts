import { MapPinIcon, PhoneIcon, ClockIcon } from "lucide-react";

export const WHATSAPP_NUMBER = "5535999759936";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os produtos da Sonhar Colchões e Estofados.";

export const STORE_INFO = {
  address: "Via Café Shopping Center / R. Humberto Pizo, 999 - Jardim Petropolis, Varginha - MG",
  phone: "(35) 99975-9936",
  hours: {
    weekdays: "10:00 - 22:00",
    saturday: "10:00 - 22:00",
    sunday: "13:00 - 19:00"
  },
  mapLocation: {
    lat: -22.4109,
    lng: -45.9327,
    zoom: 15
  }
};
export const STORE_CONTACT_ITEMS = [
  {
    icon: MapPinIcon,
    title: "Endereço",
    info: STORE_INFO.address
  },
  {
    icon: PhoneIcon,
    title: "Telefone",
    info: STORE_INFO.phone
  },
  {
    icon: ClockIcon,
    title: "Horário de Funcionamento",
    info: `Segunda à Sexta: ${STORE_INFO.hours.weekdays} | Sábado: ${STORE_INFO.hours.saturday} | Domingo: ${STORE_INFO.hours.sunday}`
  }
];

export const MISSION_VISION_VALUES = {
  mission: "Proporcionar noites de sono perfeitas e ambientes confortáveis através de produtos de alta qualidade que promovam bem-estar e melhorem a qualidade de vida de nossos clientes.",
  vision: "Ser reconhecida como a marca de referência em colchões e estofados no Brasil, oferecendo produtos inovadores e sustentáveis que transformam o descanso e o conforto das pessoas.",
  values: [
    "Qualidade e durabilidade",
    "Inovação constante",
    "Atendimento personalizado",
    "Responsabilidade socioambiental",
    "Compromisso com o bem-estar"
  ]
};

const generateAdditionalImages = (id, baseImage, category) => [
  baseImage,
  `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600&t=${id}1`,
  `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600&t=${id}2`,
  `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600&t=${id}3`
];

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Estafodos Siena",
    description: "Estofado bege, macio sofisticado oferencendo conforto.",
    image: "https://i.postimg.cc/5tchBqXy/Imagem-do-Whats-App-de-2025-03-15-s-13-09-48-7ab453f3.jpg",
    additionalImages: [
      "https://i.postimg.cc/cJwN2kpf/Imagem-do-Whats-App-de-2025-03-15-s-13-09-43-33b9a5b8.jpg",
      "https://i.postimg.cc/8C61Dz6J/Imagem-do-Whats-App-de-2025-03-15-s-13-09-42-a08efdc5.jpg",
      "https://i.postimg.cc/rm2qp21h/Imagem-do-Whats-App-de-2025-03-15-s-13-09-41-0100d55d.jpg",
      "https://i.postimg.cc/8C61Dz6J/Imagem-do-Whats-App-de-2025-03-15-s-13-09-42-a08efdc5.jpg",
      "https://i.postimg.cc/4yNkKfm1/Imagem-do-Whats-App-de-2025-03-15-s-13-09-41-e4d4bc9d.jpg",
    ],
    fullDescription: "Este estofado apresenta uma tonalidade bege clara, com costuras que formam padrões geométricos, como quadrados e losangos. Ele possui almofadas grandes e macias, além de apoios cilíndricos. O tecido veludo, oferecendo um ar de conforto e sofisticação",
    specifications: {
      "Nível de Conforto": "Toque macio",
      "Largura": "2,90m",
      "Antiácaro": "Sim"
    },
    isNew: true,
    discount: 10
  },
  {
    id: 2,
    name: "Colchão Pró Hard",
    description: "Conjunto elegante composto por cabeceira Delare, colchão Pró Hard, base box e recamier Reneia, todos com medidas de 158x198 cm, projetados para conforto e estilo.",
    image: "https://i.postimg.cc/dVhGByhT/Imagem-do-Whats-App-de-2025-03-15-s-13-10-30-13c16f5b.jpg",
    additionalImages: [
      "https://i.postimg.cc/Fzn7dTgC/Imagem-do-Whats-App-de-2025-03-15-s-13-10-27-1a05ed92.jpg",
      "https://i.postimg.cc/FR4cNCDj/Imagem-do-Whats-App-de-2025-03-15-s-13-10-26-f1f41f59.jpg",
      "https://i.postimg.cc/7YW2fZKP/Imagem-do-Whats-App-de-2025-03-15-s-13-10-24-3949dfad.jpg",
      "https://i.postimg.cc/3x0DpQqX/Imagem-do-Whats-App-de-2025-03-15-s-13-10-27-e523f397.jpg",
      "https://i.postimg.cc/SK0Yft0w/Imagem-do-Whats-App-de-2025-03-15-s-13-10-22-1fcaced3.jpg"
    ],
    fullDescription: "Este conjunto completo de cama é composto por quatro elementos principais. A Cabeceira Delare (158x198 cm) apresenta um design contemporâneo, com acabamento estofado que combina sofisticação e conforto. O Colchão Pró Hard (158x198 cm), conhecido pela sua alta resistência e firmeza, proporciona um suporte ideal para uma noite de sono revigorante. A Base Box (158x198 cm) oferece uma estrutura sólida, revestida com material de alta qualidade, garantindo durabilidade e estabilidade. Complementando o conjunto, o Recamier Reneia (158 cm de largura) traz um toque extra de elegância e funcionalidade, sendo perfeito tanto para decoração quanto para apoio no quarto. Este conjunto é ideal para quem busca unir conforto, estilo e praticidade em um único produto.",
    specifications: {
      "Lugares": "2",
      "Largura": "158cm",
      "Altura": "198cm"
    },
    isNew: false,
    discount: 0
  },
  {
    id: 3,
    name: "Colchão Premium",
    description: "Cama Roma com colchão Premium e recamier Paris, combinando conforto e elegância..",
    image: "https://i.postimg.cc/1XMYpqfj/Imagem-do-Whats-App-de-2025-03-15-s-14-32-00-2fecb7e7.jpg",
    additionalImages: [
      "https://i.postimg.cc/1R6mp5R5/Imagem-do-Whats-App-de-2025-03-15-s-14-27-50-1b0aac32.jpg",
      "https://i.postimg.cc/Gm6gJrmd/Imagem-do-Whats-App-de-2025-03-15-s-14-32-00-ee8dea05.jpg",
      "https://i.postimg.cc/pL5qd7Y7/Imagem-do-Whats-App-de-2025-03-15-s-14-32-01-1cbda755.jpg",
      "https://i.postimg.cc/Twf9CPMM/Imagem-do-Whats-App-de-2025-03-15-s-14-31-59-2965370a.jpg",
      "https://i.postimg.cc/rsYNVCdM/Imagem-do-Whats-App-de-2025-03-15-s-14-32-00-6a4f5a24.jpg"
    ],
    fullDescription: "Este conjunto inclui a sofisticada Cama Roma (193x203 cm), projetada para proporcionar estabilidade e estilo, e o Colchão Premium (193x203 cm), reconhecido pelo conforto superior e excelente suporte para uma noite de sono tranquila. Para completar, o Recamier Paris (158 cm de largura) adiciona um toque decorativo e funcional, ideal para organizar itens ou trazer mais charme ao ambiente. Um conjunto perfeito para quem valoriza design e qualidade.",
    specifications: {
      "Largura": "193cm",
      "Altura": "203cm"
    },
    isNew: true,
    discount: 5
  }
];

export const ALL_PRODUCTS = [
  ...FEATURED_PRODUCTS,
  {
    id: 4,
    name: "Colchão Espuma Viscoelástica",
    description: "Colchão de espuma viscoelástica que se adapta ao seu corpo para um sono profundo e reparador.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(4, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "memory+foam"),
    fullDescription: "O Colchão Espuma Viscoelástica é projetado para oferecer um suporte personalizado ao seu corpo. A espuma viscoelástica sensível à temperatura se molda perfeitamente aos contornos do corpo, aliviando os pontos de pressão e proporcionando uma sensação de flutuação. Ideal para quem sofre de dores nas costas, ombros ou quadris, este colchão ajuda a manter a coluna alinhada durante toda a noite.",
    specifications: {
      "Material": "Espuma viscoelástica com base de alta densidade",
      "Altura": "25cm",
      "Densidade": "50kg/m³",
      "Nível de firmeza": "Médio",
      "Antiácaro": "Sim",
      "Antialérgico": "Sim"
    },
    isNew: false,
    discount: 0
  },
  {
    id: 5,
    name: "Colchão Casal Premium",
    description: "Colchão casal com sistema de molas e camada extra de conforto para casais.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(5, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "mattress"),
    isNew: false,
    discount: 15
  },
  {
    id: 6,
    name: "Sofá Cama Versátil",
    description: "Sofá que se transforma em cama com facilidade, ideal para visitas ou espaços pequenos.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(6, "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800&h=600", "sofa+bed"),
    isNew: true,
    discount: 0
  },
  {
    id: 7,
    name: "Poltrona do Papai",
    description: "Poltrona reclinável com apoio para os pés, tecido resistente e estofamento extra-macio.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(7, "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800&h=600", "recliner"),
    isNew: false,
    discount: 0
  },
  {
    id: 8,
    name: "Cabeceira Estofada Luxo",
        description: "Cabeceira estofada com detalhes em capitonê, trazendo elegância para seu quarto.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(8, "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=600", "headboard"),
    isNew: false,
    discount: 0
  },
  {
    id: 9,
    name: "Puff Decorativo",
        description: "Puff multifuncional que serve como assento extra e item decorativo para sua sala.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(9, "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600", "pouf"),
    isNew: false,
    discount: 0
  },
  {
    id: 10,
    name: "Colchão Solteiro Premium",
        description: "Colchão solteiro premium com tecnologia anti-pressão e tecido hipoalergênico.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(10, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "single+mattress"),
    isNew: false,
    discount: 0
  },
  {
    id: 11,
    name: "Conjunto Box Casal",
    
    description: "Conjunto box casal com base e colchão de molas ensacadas para durabilidade e conforto.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(11, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "box+spring"),
    isNew: true,
    discount: 10
  },
  {
    id: 12,
    name: "Sofá de Canto Modular",
    
    description: "Sofá de canto modular que pode ser reorganizado conforme sua necessidade e espaço.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(12, "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800&h=600", "sectional+sofa"),
    isNew: false,
    discount: 0
  },
  {
    id: 13,
    name: "Recamier Elegance",
        description: "Recamier elegante para compor o quarto ou sala, com tecido premium e detalhes sofisticados.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(13, "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600", "chaise+lounge"),
    isNew: false,
    discount: 0
  },
  {
    id: 14,
    name: "Banqueta Alta Estofada",
        description: "Banqueta alta estofada para bancada ou balcão, com estrutura resistente e conforto garantido.",
    image: "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(14, "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?auto=format&fit=crop&q=80&w=800&h=600", "bar+stool"),
    isNew: false,
    discount: 0
  },
  {
    id: 15,
    name: "Travesseiro Anatômico",
        description: "Travesseiro anatômico com espuma viscoelástica que se adapta ao formato do pescoço.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(15, "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800&h=600", "pillow"),
    isNew: false,
    discount: 0
  },
  {
    id: 16,
    name: "Colchão King Size",
    
    description: "Colchão king size com molas ensacadas individuais e pillow top para máximo conforto.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(16, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "king+mattress"),
    isNew: true,
    discount: 5
  },
  {
    id: 17,
    name: "Jogo de Almofadas Decorativas",
        description: "Conjunto com 4 almofadas decorativas com cores e texturas complementares.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(17, "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800&h=600", "cushions"),
    isNew: false,
    discount: 0
  },
  {
    id: 18,
    name: "Protetor de Colchão Impermeável",
        description: "Protetor de colchão impermeável e respirável que mantém seu colchão protegido.",
    image: "https://http2.mlstatic.com/D_Q_NP_796210-MLU78708527634_092024-O.webp",
    additionalImages: generateAdditionalImages(18, "https://cdn.sistemawbuy.com.br/arquivos/dc7db93e78bf0dd8806d89ead6f85ac6/produtos/659bee840bab3/protetor-de-colchao-impermeavel-com-matelado-ultrassonico-rl-capas-king-size-branco-5d5293623a05f-large-659bee857ff69.jpeg", "mattress+protector"),
    isNew: false,
    discount: 0
  },
  {
    id: 19,
    name: "Bicama Solteiro Prática",
    
    description: "Bicama solteiro com cama auxiliar para visitas ou quartos compartilhados.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(19, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "trundle+bed"),
    isNew: false,
    discount: 0
  },
  {
    id: 20,
    name: "Sofá 2 Lugares Compact",
    
    description: "Sofá 2 lugares ideal para espaços pequenos, sem abrir mão do conforto e estilo.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(20, "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600", "loveseat"),
    isNew: false,
    discount: 0
  },
  {
    id: 21,
    name: "Cama Box Baú Solteiro",
    
    description: "Cama box com baú para armazenamento, otimizando o espaço do seu quarto.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(21, "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=600", "storage+bed"),
    isNew: true,
    discount: 8
  },
  {
    id: 22,
    name: "Cadeira de Jantar Estofada",
        description: "Cadeira de jantar com assento e encosto estofados para conforto durante as refeições.",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(22, "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=800&h=600", "dining+chair"),
    isNew: false,
    discount: 0
  },
  {
    id: 23,
    name: "Colchão Baby Safe",
        description: "Colchão infantil com materiais hipoalergênicos e certificação de segurança.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(23, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "crib+mattress"),
    isNew: false,
    discount: 0
  },
  {
    id: 24,
    name: "Sofá-Cama Individual",
    
    description: "Sofá que se transforma em cama de solteiro, perfeito para quartos de hóspedes.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(24, "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600", "sofa+bed+single"),
    isNew: false,
    discount: 0
  },
  {
    id: 25,
    name: "Mesa de Cabeceira Estofada",
        description: "Mesa de cabeceira com detalhes estofados, combinando funcionalidade e decoração.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(25, "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=600", "nightstand"),
    isNew: false,
    discount: 0
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Wilson e Andrea",
    position: "Proprietários",
    image: "https://img.freepik.com/fotos-gratis/casal-adoravel-tem-um-abraco-caloroso_273609-44073.jpg",
    contact: WHATSAPP_NUMBER,
    message: "Olá! Gostaria de falar com os proprietários da Sonhar Colchões e Estofados."
  },
  {
    id: 2,
    name: "Eliane De Jesus",
    position: "Consultora de Vendas",
    image: "https://i.postimg.cc/xTvz1kjD/Imagem-do-Whats-App-de-2025-03-15-s-18-20-51-e30e11fb.jpg",
    contact: WHATSAPP_NUMBER,
    message: "Olá! Gostaria de falar com a gerente da Sonhar Colchões e Estofados."
  },
  {
    id: 3,
    name: "Natália",
    position: "Consultora de Vendas",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
    contact: WHATSAPP_NUMBER,
    message: "Olá! Gostaria de falar com a Juliana da Sonhar Colchões e Estofados."
  },
  {
    id: 4,
    name: "Vanessa",
    position: "Consultora de Vendas",
    image: "https://i.postimg.cc/FHhJd91f/Imagem-do-Whats-App-de-2025-03-15-s-18-20-53-de2f9675.jpg",
    contact: WHATSAPP_NUMBER,
    message: "Olá! Gostaria de falar com a Roberta da Sonhar Colchões e Estofados."
  }
];
