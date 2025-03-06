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
    name: "Colchão Ortopédico Premium",
    price: 1499.90,
    description: "Colchão ortopédico de alta densidade com molas ensacadas e tecido antiácaro, proporcionando o máximo conforto.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(1, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "mattress"),
    fullDescription: "Nosso colchão ortopédico premium é projetado para oferecer suporte excepcional para a coluna, combinando molas ensacadas individualmente com camadas de espuma de alta densidade. O tecido antiácaro e antialérgico protege contra alérgenos, enquanto o sistema de ventilação mantém o colchão fresco durante toda a noite. Ideal para quem busca qualidade de sono superior e alívio para dores nas costas.",
    specifications: {
      "Material": "Molas ensacadas e espuma de alta densidade",
      "Nível de Conforto": "Firme com toque macio",
      "Altura": "28cm",
      "Antiácaro": "Sim",
      "Garantia": "5 anos",
      "Suporte máximo": "180kg"
    },
    isNew: true,
    discount: 10
  },
  {
    id: 2,
    name: "Sofá Retrátil Confort",
    price: 2599.90,
    description: "Sofá retrátil de 3 lugares com tecido suede e estrutura em madeira maciça, perfeito para sua sala.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(2, "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600", "sofa"),
    fullDescription: "O Sofá Retrátil Confort é a combinação perfeita entre elegância e funcionalidade. Com seu mecanismo de reclinação suave, permite que você ajuste o assento para a posição ideal de relaxamento. A estrutura em madeira maciça garante durabilidade, enquanto o estofamento em espuma de alta densidade proporciona conforto duradouro. O revestimento em suede de alta qualidade é macio ao toque e resistente ao desgaste diário.",
    specifications: {
      "Material Estrutura": "Madeira maciça",
      "Revestimento": "Suede",
      "Mecanismo": "Retrátil",
      "Lugares": "3",
      "Largura (aberto)": "240cm",
      "Largura (fechado)": "210cm",
      "Profundidade": "95cm",
      "Altura": "85cm",
      "Garantia": "2 anos"
    },
    isNew: false,
    discount: 0
  },
  {
    id: 3,
    name: "Poltrona Relax",
    price: 999.90,
    description: "Poltrona reclinável com tecido macio e estrutura ergonômica para momentos de relaxamento.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(3, "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600", "armchair"),
    fullDescription: "A Poltrona Relax é projetada para proporcionar momentos de puro conforto e descanso. Com seu sistema reclinável de múltiplas posições, permite ajustar o encosto e o apoio para os pés conforme sua preferência. O estofamento generoso com espuma viscoelástica adapta-se ao corpo, aliviando pontos de pressão. Perfeita para leitura, assistir TV ou simplesmente relaxar após um longo dia.",
    specifications: {
      "Material Estrutura": "Madeira reflorestada e aço",
      "Revestimento": "Veludo soft",
      "Reclinável": "Sim, múltiplas posições",
      "Apoio para pés": "Integrado",
      "Largura": "85cm",
      "Profundidade": "90cm",
      "Altura": "105cm",
      "Garantia": "1 ano"
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
    price: 1299.90,
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
      "Antialérgico": "Sim",
      "Garantia": "3 anos"
    },
    isNew: false,
    discount: 0
  },
  {
    id: 5,
    name: "Colchão Casal Premium",
    price: 1899.90,
    description: "Colchão casal com sistema de molas e camada extra de conforto para casais.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(5, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "mattress"),
    isNew: false,
    discount: 15
  },
  {
    id: 6,
    name: "Sofá Cama Versátil",
    price: 1799.90,
    description: "Sofá que se transforma em cama com facilidade, ideal para visitas ou espaços pequenos.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(6, "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800&h=600", "sofa+bed"),
    isNew: true,
    discount: 0
  },
  {
    id: 7,
    name: "Poltrona do Papai",
    price: 1299.90,
    description: "Poltrona reclinável com apoio para os pés, tecido resistente e estofamento extra-macio.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(7, "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800&h=600", "recliner"),
    isNew: false,
    discount: 0
  },
  {
    id: 8,
    name: "Cabeceira Estofada Luxo",
    price: 799.90,
    description: "Cabeceira estofada com detalhes em capitonê, trazendo elegância para seu quarto.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(8, "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=600", "headboard"),
    isNew: false,
    discount: 0
  },
  {
    id: 9,
    name: "Puff Decorativo",
    price: 299.90,
    description: "Puff multifuncional que serve como assento extra e item decorativo para sua sala.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(9, "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600", "pouf"),
    isNew: false,
    discount: 0
  },
  {
    id: 10,
    name: "Colchão Solteiro Premium",
    price: 999.90,
    description: "Colchão solteiro premium com tecnologia anti-pressão e tecido hipoalergênico.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(10, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "single+mattress"),
    isNew: false,
    discount: 0
  },
  {
    id: 11,
    name: "Conjunto Box Casal",
    price: 2499.90,
    description: "Conjunto box casal com base e colchão de molas ensacadas para durabilidade e conforto.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(11, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "box+spring"),
    isNew: true,
    discount: 10
  },
  {
    id: 12,
    name: "Sofá de Canto Modular",
    price: 3299.90,
    description: "Sofá de canto modular que pode ser reorganizado conforme sua necessidade e espaço.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(12, "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800&h=600", "sectional+sofa"),
    isNew: false,
    discount: 0
  },
  {
    id: 13,
    name: "Recamier Elegance",
    price: 899.90,
    description: "Recamier elegante para compor o quarto ou sala, com tecido premium e detalhes sofisticados.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(13, "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=600", "chaise+lounge"),
    isNew: false,
    discount: 0
  },
  {
    id: 14,
    name: "Banqueta Alta Estofada",
    price: 249.90,
    description: "Banqueta alta estofada para bancada ou balcão, com estrutura resistente e conforto garantido.",
    image: "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(14, "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?auto=format&fit=crop&q=80&w=800&h=600", "bar+stool"),
    isNew: false,
    discount: 0
  },
  {
    id: 15,
    name: "Travesseiro Anatômico",
    price: 149.90,
    description: "Travesseiro anatômico com espuma viscoelástica que se adapta ao formato do pescoço.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(15, "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800&h=600", "pillow"),
    isNew: false,
    discount: 0
  },
  {
    id: 16,
    name: "Colchão King Size",
    price: 2999.90,
    description: "Colchão king size com molas ensacadas individuais e pillow top para máximo conforto.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(16, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "king+mattress"),
    isNew: true,
    discount: 5
  },
  {
    id: 17,
    name: "Jogo de Almofadas Decorativas",
    price: 199.90,
    description: "Conjunto com 4 almofadas decorativas com cores e texturas complementares.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(17, "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800&h=600", "cushions"),
    isNew: false,
    discount: 0
  },
  {
    id: 18,
    name: "Protetor de Colchão Impermeável",
    price: 129.90,
    description: "Protetor de colchão impermeável e respirável que mantém seu colchão protegido.",
    image: "https://http2.mlstatic.com/D_Q_NP_796210-MLU78708527634_092024-O.webp",
    additionalImages: generateAdditionalImages(18, "https://cdn.sistemawbuy.com.br/arquivos/dc7db93e78bf0dd8806d89ead6f85ac6/produtos/659bee840bab3/protetor-de-colchao-impermeavel-com-matelado-ultrassonico-rl-capas-king-size-branco-5d5293623a05f-large-659bee857ff69.jpeg", "mattress+protector"),
    isNew: false,
    discount: 0
  },
  {
    id: 19,
    name: "Bicama Solteiro Prática",
    price: 1599.90,
    description: "Bicama solteiro com cama auxiliar para visitas ou quartos compartilhados.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(19, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "trundle+bed"),
    isNew: false,
    discount: 0
  },
  {
    id: 20,
    name: "Sofá 2 Lugares Compact",
    price: 1899.90,
    description: "Sofá 2 lugares ideal para espaços pequenos, sem abrir mão do conforto e estilo.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(20, "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600", "loveseat"),
    isNew: false,
    discount: 0
  },
  {
    id: 21,
    name: "Cama Box Baú Solteiro",
    price: 1699.90,
    description: "Cama box com baú para armazenamento, otimizando o espaço do seu quarto.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(21, "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=600", "storage+bed"),
    isNew: true,
    discount: 8
  },
  {
    id: 22,
    name: "Cadeira de Jantar Estofada",
    price: 349.90,
    description: "Cadeira de jantar com assento e encosto estofados para conforto durante as refeições.",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(22, "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=800&h=600", "dining+chair"),
    isNew: false,
    discount: 0
  },
  {
    id: 23,
    name: "Colchão Baby Safe",
    price: 499.90,
    description: "Colchão infantil com materiais hipoalergênicos e certificação de segurança.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(23, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800&h=600", "crib+mattress"),
    isNew: false,
    discount: 0
  },
  {
    id: 24,
    name: "Sofá-Cama Individual",
    price: 1299.90,
    description: "Sofá que se transforma em cama de solteiro, perfeito para quartos de hóspedes.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600",
    additionalImages: generateAdditionalImages(24, "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=600", "sofa+bed+single"),
    isNew: false,
    discount: 0
  },
  {
    id: 25,
    name: "Mesa de Cabeceira Estofada",
    price: 399.90,
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
    position: "Gerente",
    image: "https://i.postimg.cc/bv9dd4V6/image.png",
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
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=300&h=300",
    contact: WHATSAPP_NUMBER,
    message: "Olá! Gostaria de falar com a Roberta da Sonhar Colchões e Estofados."
  }
];
