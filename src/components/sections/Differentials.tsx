import { differentials } from '@/content/services'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Differentials() {
  return (
    <section id="sobre" className="bg-surface-dark py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Sobre"
          title="Por que a A&C"
          subtitle="Engenharia com foco em normas, segurança e execução técnica de qualidade."
          dark
          align="center"
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <Card key={item.title} glass gradientBorder className="h-full">
              <h3 className="font-display text-lg font-bold text-text-on-dark">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted-on-dark">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
