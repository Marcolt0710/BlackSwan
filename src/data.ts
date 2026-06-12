import { TimelineStep } from "./types";

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: "01",
    title: "Inspiração",
    description: "Pesquisa em arte, natureza e cultura. O processo começa antes das mãos.",
    details: "Busca de conexões entre raízes primitivas, texturas ancestrais e o design contemporâneo de alto nível."
  },
  {
    number: "02",
    title: "Curadoria",
    description: "Seleção dos materiais. Cada textura escolhida tem razão de existir.",
    details: "Parcerias apenas com fontes responsáveis, priorizando fibras puras e orgânicas rústicas de toque incomparável."
  },
  {
    number: "03",
    title: "Criação",
    description: "O fazer artesanal. A peça nasce única, carregando o processo em si.",
    details: "Modelagens esculpidas por mãos devotas ao ofício de costura, zelando pelo caimento poético."
  },
  {
    number: "04",
    title: "Intenção",
    description: "Série limitada. Cada peça existe uma vez. Nunca será repetida.",
    details: "O luxo autoral não produz excedentes. Criamos número restrito de relíquias eternas."
  }
];

export const MOODBOARD_IMAGES = [
  {
    id: "mb-1",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80",
    title: "Poética do Cisne Negro",
    tag: "A Origem"
  },
  {
    id: "mb-2",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop&q=80",
    title: "Eco de Notas Clássicas",
    tag: "Curadoria"
  },
  {
    id: "mb-3",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=300&h=300&fit=crop&q=80",
    title: "Movimento e Sutileza",
    tag: "Bailarinas"
  },
  {
    id: "mb-4",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=300&fit=crop&q=80",
    title: "Silêncio Mineral",
    tag: "Texturas"
  },
  {
    id: "mb-5",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&q=80",
    title: "A Alma Singular",
    tag: "Expressão"
  },
  {
    id: "mb-6",
    image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=300&h=300&fit=crop&q=80",
    title: "Atmosfera e Névoa",
    tag: "Preservação"
  },
  {
    id: "mb-7",
    image: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=300&h=300&fit=crop&q=80",
    title: "Escultura Primitiva",
    tag: "Processo"
  },
  {
    id: "mb-8",
    image: "https://images.unsplash.com/photo-1536336095259-c3b6b5e4df86?w=300&h=300&fit=crop&q=80",
    title: "Pureza Original",
    tag: "Luz"
  },
  {
    id: "mb-9",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&q=80",
    title: "Detalhe de Matéria",
    tag: "Design"
  }
];

export interface BrandInfo {
  email: string;
  instagram: string;
  instagramUrl: string;
  creatorName: string;
}

// Configurações Globais da Marca Black Swan
// Altere estes valores para conectar os canais reais de atendimento e redes sociais!
export const BRAND_INFO: BrandInfo = {
  email: "contato@blackswan.com.br",                   // E-mail de atendimento real
  instagram: "@blackswanbymc",                         // Nome de usuário do Instagram
  instagramUrl: "https://instagram.com/blackswanbymc", // Link para o Instagram
  creatorName: "Maria Cecilia Latapiat"                // Nome da fundadora/criadora
};

