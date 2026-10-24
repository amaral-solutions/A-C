import type { LucideIcon } from 'lucide-react'

export type Slide = {
  src: string
  alt: string
  caption?: string
}

export type CarouselConfig = {
  slides: Slide[]
  autoplayMs?: number
}

export type ServiceGroup = {
  title?: string
  items: string[]
}

export type ServicePillar = {
  id: string
  anchor: string
  number: string
  title: string
  intro: string
  icon: LucideIcon
  accentClass: string
  groups: ServiceGroup[]
  mediaKey?: keyof ServiceMediaMap
}

export type ServiceMediaMap = {
  laudos: Slide[]
  mobilidade: Slide[]
  manutencao: Slide[]
  aterramento: Slide[]
  solar: Slide[]
}

export type NavLink = {
  href: string
  label: string
}

export type SiteContact = {
  phone: string
  phoneDisplay: string
  email: string
  whatsappMessage: string
  serviceArea: string
  companyName: string
  crea: string
}

export type SiteSocial = {
  instagram?: string
  linkedin?: string
}

export type SiteConfig = {
  contact: SiteContact
  social: SiteSocial
  meta: {
    title: string
    description: string
  }
  institutional: string
  footerOfferings: string
}

export type PartnerLogo = {
  src: string
  alt: string
}

export type BrandingConfig = {
  logo: {
    header: string
    headerOnLight: string
    footer: string
    icon: string
    alt: string
    showWordmark: boolean
    wordmark: string
    tagline: string
  }
  partners: PartnerLogo[]
}
