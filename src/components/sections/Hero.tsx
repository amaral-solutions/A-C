import { ArrowRight } from 'lucide-react'
import { heroCarousel } from '@/content/media'
import { site } from '@/content/site'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ImageCarousel } from '@/components/ui/ImageCarousel'

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    site.contact.phone,
    site.contact.whatsappMessage,
  )

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-surface-dark"
    >
      <ImageCarousel
        slides={heroCarousel.slides}
        variant="hero"
        autoplayMs={heroCarousel.autoplayMs}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-85" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--accent-primary)_18%,transparent),transparent_55%)]" aria-hidden />

      <Container className="relative z-10 py-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-primary">
            Engenharia elétrica de ponta a ponta
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-on-dark sm:text-5xl lg:text-6xl">
            Laudos, solar, mobilidade elétrica e{' '}
            <span className="text-gradient-highlight">SPDA</span>{' '}
            com responsabilidade técnica
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted-on-dark sm:text-xl">
            {site.institutional}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento
              <ArrowRight className="size-4" />
            </Button>
            <Button href="#servicos" variant="outline">
              Ver serviços
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
