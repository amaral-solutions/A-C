import {
  Car,
  FileCheck,
  Shield,
  Sun,
  Wrench,
} from 'lucide-react'
import type { ServicePillar } from '@/types/content'
import { site } from '@/content/site'

export const servicePillars: ServicePillar[] = [
  {
    id: 'laudos',
    anchor: 'laudos',
    number: '01',
    title: 'Laudos Técnicos e Engenharia',
    intro:
      'Documentação técnica especializada e emissão de ART com registro no CREA-MG para garantir conformidade legal e segurança das instalações.',
    icon: FileCheck,
    accentClass: 'text-accent-primary',
    mediaKey: 'laudos',
    groups: [
      {
        title: 'Laudos Técnicos Especializados',
        items: [
          'Laudo das Instalações Elétricas (NBR 5410 e NR-10)',
          'Laudo de SPDA / Para-raios e Aterramento (NBR 5419)',
          'Laudo de Termografia e Inspeção Preventiva',
          'Laudo para Concessionária (Aumento de Carga / Mudança de Fase / Pedidos Cemig)',
          'Laudo de Eficiência Energética e Qualidade de Energia',
          'Laudo Pericial e de Conformidade para Seguradoras, Condomínios e Empresas',
        ],
      },
      {
        title: 'Emissão de ART',
        items: [
          'Anotação de Responsabilidade Técnica registrada no CREA-MG, garantindo responsabilidade técnica e conformidade legal para instalações, reformas, laudos e projetos.',
        ],
      },
    ],
  },
  {
    id: 'mobilidade-eletrica',
    anchor: 'mobilidade-eletrica',
    number: '02',
    title: 'Mobilidade Elétrica (Eletromobilidade)',
    intro:
      'Infraestrutura para recarga de veículos elétricos conforme NBR 17019, com proteção elétrica e atendimento às exigências do Corpo de Bombeiros de MG (IT 30).',
    icon: Car,
    accentClass: 'text-accent-primary',
    mediaKey: 'mobilidade',
    groups: [
      {
        items: [
          'Instalação de Carregadores para Veículos Elétricos (Wallbox): soluções residenciais, comerciais e para condomínios.',
          'Projetos de Infraestrutura e Infraestrutura Predial: dimensionamento de quadros dedicados (QDC-EV), balanceamento de carga e gestão dinâmica (DLM/DLB).',
          'Adequação e Proteção Elétrica: adição de dispositivos de proteção (DR/IDR, DPS) e quadros específicos (Clamper, WEG, Intelbras, NeoCharge, etc.).',
          'Conformidade NBR 17019: projetos e instalações de sistemas de recarga para veículos elétricos.',
          'Sistemas de Emergência e CBMMG: atendimento à IT 30 e demais exigências do Corpo de Bombeiros, incluindo botoeiras de emergência master e locais.',
        ],
      },
    ],
  },
  {
    id: 'manutencao',
    anchor: 'manutencao',
    number: '03',
    title: 'Manutenção e Instalações Elétricas Prediais e Industriais',
    intro:
      'Operação confiável de instalações elétricas com manutenção preventiva e corretiva, quadros organizados e infraestrutura adequada.',
    icon: Wrench,
    accentClass: 'text-accent-secondary',
    mediaKey: 'manutencao',
    groups: [
      {
        items: [
          'Manutenção Preventiva e Corretiva: inspeção, diagnóstico e reparo em instalações elétricas prediais, comerciais e industriais.',
          'Quadros de Distribuição e Painéis Elétricos: montagem, organização, retrofit e adequação de quadros gerais de baixa tensão (QGBT) e painéis de comando.',
          'Infraestrutura Elétrica Geral: adequação de circuitos, distribuição de cargas, substituição de condutores e balanceamento de fases.',
        ],
      },
    ],
  },
  {
    id: 'aterramento-spda',
    anchor: 'aterramento-spda',
    number: '04',
    title: 'Aterramento Elétrico e Proteção (SPDA)',
    intro:
      'Projetos e adequação de sistemas de aterramento e proteção contra descargas atmosféricas para instalações comerciais e industriais.',
    icon: Shield,
    accentClass: 'text-accent-primary',
    mediaKey: 'aterramento',
    groups: [
      {
        items: [
          'Projetos e Adequação de Aterramento: medição de resistividade do solo, malhas de aterramento e instalação de resistores de aterramento para instalações comerciais e industriais.',
          'Proteção contra Surtos: instalação e manutenção de Sistemas de Proteção contra Descargas Atmosféricas (SPDA) e DPS para quadros de distribuição.',
        ],
      },
    ],
  },
  {
    id: 'solar',
    anchor: 'solar',
    number: '05',
    title: 'Energia Solar Fotovoltaica',
    intro:
      'Do dimensionamento à manutenção: sistemas fotovoltaicos residenciais e comerciais com especificação técnica e execução em campo.',
    icon: Sun,
    accentClass: 'text-accent-primary',
    mediaKey: 'solar',
    groups: [
      {
        items: [
          'Projetos e Dimensionamento: especificação técnica de inversores string e microinversores de acordo com a necessidade do cliente.',
          'Instalação e Manutenção: montagem de arranjos fotovoltaicos residenciais e comerciais.',
          'Remanejo de Sistemas: desmontagem, ampliação e reinstalação de sistemas fotovoltaicos.',
        ],
      },
    ],
  },
]

export const trustItems = [
  {
    label: 'CREA-MG',
    description: `Registro ${site.contact.creaRegistration}`,
  },
  { label: 'ART', description: 'Documentação oficial' },
  { label: 'NBR 17019', description: 'Carros elétricos' },
  { label: 'IT 30', description: 'Corpo de Bombeiros MG' },
  { label: 'NBR 5410', description: 'Instalações elétricas' },
  { label: 'NR-10', description: 'Segurança em eletricidade' },
  { label: 'NBR 5419', description: 'SPDA e aterramento' },
]

export const differentials = [
  {
    title: 'Conformidade normativa',
    description:
      'NBR 17019, IT 30 (CBMMG), NBR 5410, NR-10 e demais normas — incluindo exigências de concessionárias e seguradoras.',
  },
  {
    title: 'Execução em campo',
    description:
      'Equipe técnica para instalação, manutenção e adequação — do residencial ao industrial.',
  },
  {
    title: 'Soluções integradas',
    description:
      'Solar, mobilidade elétrica, SPDA e quadros elétricos em um único parceiro de engenharia.',
  },
  {
    title: 'Responsabilidade técnica',
    description:
      'ART e acompanhamento profissional em todas as etapas do serviço.',
  },
]
