import type { CarouselConfig, ServiceMediaMap, Slide } from '@/types/content'

/** Fotos de capa (profissionais / marca A&C) */
const capa = {
  solarInstalacao: {
    src: '/images/hero/capa-solar-instalacao.jpg',
    alt: 'Engenheiro A&C instalando painéis solares em telhado ao pôr do sol',
  },
  mobilidadeResidencial: {
    src: '/images/hero/capa-mobilidade-residencial.jpg',
    alt: 'Wallbox A&C Engenharia em residência com veículo elétrico carregando',
  },
  mobilidadeCondominio: {
    src: '/images/hero/capa-mobilidade-condominio.jpg',
    alt: 'Carregadores em condomínio com botoeira de emergência conforme IT 30',
  },
  laudosHipot: {
    src: '/images/hero/capa-laudos-hipot.jpg',
    alt: 'Ensaio hipot em painel QGBT com equipamento Megger — A&C Engenharia',
  },
  laudosAterramento: {
    src: '/images/hero/capa-laudos-aterramento.jpg',
    alt: 'Laudo técnico de medição de resistência de aterramento com Fluke',
  },
  solarInversor: {
    src: '/images/hero/capa-solar-inversor.jpg',
    alt: 'Inspeção de inversor Growatt e quadro fotovoltaico residencial',
  },
  solarQuadroFv: {
    src: '/images/hero/capa-solar-quadro-fv.jpg',
    alt: 'Quadro fotovoltaico com proteções CC/CA e string box — A&C Engenharia',
  },
  projetosArt: {
    src: '/images/hero/capa-projetos-art.jpg',
    alt: 'Projeto elétrico e emissão de ART com plantas e modelagem BIM',
  },
  manutencaoQuadro: {
    src: '/images/hero/capa-manutencao-quadro.jpg',
    alt: 'Manutenção em quadro elétrico industrial — A&C Engenharia',
  },
  laudosIsolamento: {
    src: '/images/hero/capa-laudos-isolamento.jpg',
    alt: 'Teste de isolamento com Fluke em painel elétrico',
  },
} as const satisfies Record<string, Slide>

const mobilidadeFieldSlides: Slide[] = [
  {
    src: '/images/services/mobilidade-eletrica/ev-sistema-completo.jpg',
    alt: 'Instalação completa Intelbras com Clamper Mobi Box e organização de cabo',
  },
  {
    src: '/images/services/mobilidade-eletrica/ev-wallbox.jpg',
    alt: 'Wallbox Intelbras com proteção Clamper e cabo Type 2',
  },
  {
    src: '/images/services/mobilidade-eletrica/ev-clamper-mobi-box.jpg',
    alt: 'Caixa de proteção Clamper Mobi Box para recarga de VE',
  },
]

const solarFieldSlides: Slide[] = [
  {
    src: '/images/services/solar/solar-04-pares-telhado.jpg',
    alt: 'Dois pares de painéis fotovoltaicos em telhado colonial',
  },
  {
    src: '/images/services/solar/solar-06-placas-telhado.jpg',
    alt: 'Placas solares instaladas em telha cerâmica',
  },
  {
    src: '/images/services/solar/solar-07-montagem.jpg',
    alt: 'Instalação fotovoltaica com ferramentas e fixação em telha',
  },
]

const manutencaoFieldSlides: Slide[] = [
  {
    src: '/images/services/manutencao/quadro-disjuntores-organizado.jpg',
    alt: 'Quadro de distribuição industrial com disjuntores organizados',
  },
  {
    src: '/images/services/manutencao/sala-quadros-industrial.jpg',
    alt: 'Sala com quadros elétricos e eletrocalhas metálicas',
  },
  {
    src: '/images/services/manutencao/industrial-quadros.jpg',
    alt: 'Infraestrutura elétrica industrial com painéis de comando',
  },
]

const laudosFieldSlides: Slide[] = [
  {
    src: '/images/services/laudos/medicao-fluke-quadro.jpg',
    alt: 'Medição elétrica com multímetro Fluke em painel Siemens',
  },
  {
    src: '/images/services/laudos/teste-hipot.jpg',
    alt: 'Ensaio de rigidez dielétrica em campo',
  },
]

const aterramentoFieldSlides: Slide[] = [
  {
    src: '/images/services/aterramento-spda/quadro-dps-organizado.jpg',
    alt: 'Quadro com DPS, barramentos e aterramento organizados',
  },
]

export const heroCarousel: CarouselConfig = {
  autoplayMs: 7000,
  slides: [
    capa.solarInstalacao,
    capa.mobilidadeResidencial,
    capa.mobilidadeCondominio,
    capa.projetosArt,
    capa.solarQuadroFv,
    capa.laudosAterramento,
    capa.manutencaoQuadro,
    capa.laudosHipot,
  ],
}

const mobilidadeSlides: Slide[] = [
  capa.mobilidadeResidencial,
  capa.mobilidadeCondominio,
  ...mobilidadeFieldSlides,
]

const solarSlides: Slide[] = [
  capa.solarInstalacao,
  capa.solarInversor,
  capa.solarQuadroFv,
  ...solarFieldSlides,
]

const manutencaoSlides: Slide[] = [
  capa.manutencaoQuadro,
  ...manutencaoFieldSlides,
]

const laudosSlides: Slide[] = [
  capa.projetosArt,
  capa.laudosHipot,
  capa.laudosAterramento,
  capa.laudosIsolamento,
  ...laudosFieldSlides,
]

const aterramentoSlides: Slide[] = [
  capa.laudosAterramento,
  ...aterramentoFieldSlides,
]

const capaGallerySlides: Slide[] = [
  { ...capa.solarInstalacao, caption: 'Energia solar fotovoltaica' },
  { ...capa.mobilidadeResidencial, caption: 'Mobilidade elétrica' },
  { ...capa.mobilidadeCondominio, caption: 'Condomínios e IT 30' },
  { ...capa.projetosArt, caption: 'Projetos elétricos e ART' },
  { ...capa.solarQuadroFv, caption: 'Quadros fotovoltaicos' },
  { ...capa.laudosHipot, caption: 'Laudos e ensaios' },
  { ...capa.laudosAterramento, caption: 'Aterramento e laudos' },
  { ...capa.manutencaoQuadro, caption: 'Manutenção industrial' },
  { ...capa.solarInversor, caption: 'Inspeção e manutenção solar' },
  { ...capa.laudosIsolamento, caption: 'Inspeção técnica' },
]

const galleryFieldItems: Slide[] = [
  ...solarFieldSlides.map((s) => ({ ...s, caption: 'Obras em campo — solar' })),
  ...mobilidadeFieldSlides.map((s) => ({
    ...s,
    caption: 'Obras em campo — mobilidade',
  })),
  ...manutencaoFieldSlides.slice(1).map((s) => ({
    ...s,
    caption: 'Obras em campo — manutenção',
  })),
]

export const galleryCarousel: CarouselConfig = {
  slides: [...capaGallerySlides, ...galleryFieldItems],
}

export const serviceMedia: ServiceMediaMap = {
  laudos: laudosSlides,
  mobilidade: mobilidadeSlides,
  manutencao: manutencaoSlides,
  aterramento: aterramentoSlides,
  solar: solarSlides,
}
