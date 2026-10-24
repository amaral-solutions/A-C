import { trustItems } from '@/content/services'
import { Container } from '@/components/ui/Container'

export function TrustBar() {
  return (
    <section className="border-b border-black/5 bg-surface-card py-6 shadow-sm">
      <Container>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {trustItems.map((item) => (
            <li key={item.label} className="text-center lg:text-left">
              <p className="font-display text-sm font-bold text-text-primary">
                {item.label}
              </p>
              <p className="mt-0.5 text-xs text-text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
