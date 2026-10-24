import type { CarouselConfig, ServiceMediaMap, Slide } from '@/types/content'

const mobilidadeSlides: Slide[] = [
  {
    src: '/images/services/mobilidade-eletrica/ev-sistema-completo.jpg',
    alt: 'Instalação completa Intelbras com Clamper Mobi Box e organização de cabo',
  },
  {
    src: '/images/services/mobilidade-eletrica/ev-wallbox.jpg',
    alt: 'Wallbox Intelbras com proteção Clamper e cabo Type 2',
  },
  {
    src: '/images/services/mobilidade-eletrica/ev-wallbox-completo.jpg',
    alt: 'Carregador veicular em fachada com eletroduto e acabamento',
  },
  {
    src: '/images/services/mobilidade-eletrica/ev-clamper-mobi-box.jpg',
    alt: 'Caixa de proteção Clamper Mobi Box para recarga de VE',
  },
  {
    src: '/images/services/mobilidade-eletrica/ev-intelbras-led-verde.jpg',
    alt: 'Wallbox Intelbras em operação com indicador LED',
  },
  {
    src: '/images/services/mobilidade-eletrica/ev-intelbras-cinza.jpg',
    alt: 'Carregador Intelbras instalado em parede texturizada',
  },
  {
    src: '/images/services/mobilidade-eletrica/ev-intelbras-bege.jpg',
    alt: 'Estação de recarga Intelbras residencial',
  },
  {
    src: '/images/services/mobilidade-eletrica/ev-cabo-organizado.jpg',
    alt: 'Suporte de parede com cabo de recarga organizado',
  },
  {
    src: '/images/services/mobilidade-eletrica/ev-carregador-detalhe.jpg',
    alt: 'Detalhe de instalação de carregador para veículo elétrico',
  },
]

const solarSlides: Slide[] = [
  {
    src: '/images/services/solar/solar-04-pares-telhado.jpg',
    alt: 'Dois pares de painéis fotovoltaicos em telhado colonial',
  },
  {
    src: '/images/services/solar/solar-06-placas-telhado.jpg',
    alt: 'Placas solares instaladas em telha cerâmica',
  },
  {
    src: '/images/services/solar/solar-05-instalacao.jpg',
    alt: 'Montagem de módulos fotovoltaicos em telhado',
  },
  {
    src: '/images/services/solar/solar-07-montagem.jpg',
    alt: 'Instalação fotovoltaica com ferramentas e fixação em telha',
  },
  {
    src: '/images/services/solar/solar-1.jpg',
    alt: 'Arranjo fotovoltaico residencial',
  },
  {
    src: '/images/services/solar/solar-2.jpg',
    alt: 'Sistema solar em telhado com fiação visível',
  },
  {
    src: '/images/services/solar/solar-3.jpg',
    alt: 'Painéis solares em obra',
  },
]

const manutencaoSlides: Slide[] = [
  {
    src: '/images/services/manutencao/quadro-disjuntores-organizado.jpg',
    alt: 'Quadro de distribuição industrial com disjuntores e barramentos organizados',
  },
  {
    src: '/images/services/manutencao/quadro-automacao-laranja.jpg',
    alt: 'Painel de automação com relés, disjuntores e eletrocalhas',
  },
  {
    src: '/images/services/manutencao/sala-quadros-industrial.jpg',
    alt: 'Sala com quadros elétricos, rack e eletrocalhas metálicas',
  },
  {
    src: '/images/services/manutencao/industrial-quadros.jpg',
    alt: 'Infraestrutura elétrica industrial com painéis de comando',
  },
  {
    src: '/images/services/manutencao/eletrocalhas-industrial.jpg',
    alt: 'Infraestrutura de eletrocalhas em ambiente industrial',
  },
  {
    src: '/images/services/manutencao/infra-conduletes.jpg',
    alt: 'Instalação de conduletes metálicos em parede',
  },
  {
    src: '/images/services/manutencao/infra-tubulacao-externa.jpg',
    alt: 'Tubulação e infraestrutura elétrica em área externa',
  },
]

const laudosSlides: Slide[] = [
  {
    src: '/images/services/laudos/medicao-fluke-quadro.jpg',
    alt: 'Medição elétrica com multímetro Fluke em painel Siemens',
  },
  {
    src: '/images/services/laudos/teste-hipot.jpg',
    alt: 'Ensaio de rigidez dielétrica (hipot) em equipamento industrial',
  },
]

const aterramentoSlides: Slide[] = [
  {
    src: '/images/services/aterramento-spda/quadro-dps-organizado.jpg',
    alt: 'Quadro de distribuição com DPS, barramentos e aterramento organizados',
  },
]

export const heroCarousel: CarouselConfig = {
  autoplayMs: 6000,
  slides: [
    solarSlides[0]!,
    mobilidadeSlides[0]!,
    manutencaoSlides[0]!,
    solarSlides[2]!,
    {
      src: '/images/hero/03-industrial.jpg',
      alt: 'Quadros elétricos e infraestrutura industrial',
    },
    mobilidadeSlides[4]!,
  ],
}

const galleryItems: Slide[] = [
  ...solarSlides.map((s) => ({ ...s, caption: 'Energia solar fotovoltaica' })),
  ...mobilidadeSlides.map((s) => ({ ...s, caption: 'Mobilidade elétrica' })),
  ...manutencaoSlides.map((s) => ({
    ...s,
    caption: 'Manutenção e instalações',
  })),
  ...laudosSlides.map((s) => ({ ...s, caption: 'Laudos e inspeção técnica' })),
  ...aterramentoSlides.map((s) => ({
    ...s,
    caption: 'Aterramento e proteção (SPDA/DPS)',
  })),
]

export const galleryCarousel: CarouselConfig = {
  slides: galleryItems,
}

export const serviceMedia: ServiceMediaMap = {
  laudos: laudosSlides,
  mobilidade: mobilidadeSlides,
  manutencao: manutencaoSlides,
  aterramento: aterramentoSlides,
  solar: solarSlides,
}
