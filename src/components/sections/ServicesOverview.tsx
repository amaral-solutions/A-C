import { ArrowUpRight } from 'lucide-react'
import { servicePillars } from '@/content/services'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/cn'

const bentoLayout = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-1',
]

export function ServicesOverview() {
  return (
    <section id="servicos" className="bg-surface-light py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções completas em engenharia elétrica"
          subtitle="Do laudo técnico à instalação em campo — residencial, comercial e industrial."
          className="mb-12"
        />

        <div className="grid auto-rows-fr gap-4 md:grid-cols-3 md:grid-rows-2">
          {servicePillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <a
                key={pillar.id}
                href={`#${pillar.anchor}`}
                className={cn(
                  'gradient-border group relative overflow-hidden rounded-2xl bg-surface-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow',
                  bentoLayout[i],
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className={cn('size-8', pillar.accentClass)} />
                  <ArrowUpRight className="size-5 text-text-muted transition group-hover:text-accent-primary" />
                </div>
                <p className="mt-4 text-xs font-semibold text-text-muted">
                  {pillar.number}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-text-muted">
                  {pillar.intro}
                </p>
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
