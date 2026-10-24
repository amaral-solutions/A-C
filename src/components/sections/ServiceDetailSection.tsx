import { Check } from 'lucide-react'
import { serviceMedia } from '@/content/media'
import type { ServicePillar } from '@/types/content'
import { Container } from '@/components/ui/Container'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import { cn } from '@/lib/cn'

type ServiceDetailSectionProps = {
  pillar: ServicePillar
  reversed?: boolean
}

export function ServiceDetailSection({
  pillar,
  reversed = false,
}: ServiceDetailSectionProps) {
  const Icon = pillar.icon
  const slides =
    pillar.mediaKey && pillar.mediaKey in serviceMedia
      ? serviceMedia[pillar.mediaKey]
      : []
  const dark = !reversed

  return (
    <section
      id={pillar.anchor}
      className={cn(
        'py-16 sm:py-20',
        dark ? 'bg-surface-dark text-text-on-dark' : 'bg-surface-light',
      )}
    >
      <Container>
        <div
          className={cn(
            'grid items-center gap-10 lg:grid-cols-2 lg:gap-14',
            reversed && 'lg:[direction:rtl] lg:*:[direction:ltr]',
          )}
        >
          <div>
            <header className="mb-8 flex gap-5 sm:mb-10 sm:gap-8">
              <span
                className={cn(
                  'shrink-0 pt-1 font-display text-5xl font-bold leading-none tabular-nums sm:text-6xl',
                  dark ? 'text-accent-primary/35' : 'text-accent-brand/20',
                )}
                aria-hidden
              >
                {pillar.number}
              </span>
              <div className="min-w-0 flex-1 space-y-2 sm:space-y-2.5">
                <div className="flex items-center gap-3">
                  <Icon
                    className={cn('size-6 shrink-0 sm:size-7', pillar.accentClass)}
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">
                    Serviço {pillar.number}
                  </p>
                </div>
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  {pillar.title}
                </h2>
              </div>
            </header>
            <p
              className={cn(
                'text-base leading-relaxed',
                dark ? 'text-text-muted-on-dark' : 'text-text-muted',
              )}
            >
              {pillar.intro}
            </p>

            <div className="mt-8 space-y-6">
              {pillar.groups.map((group) => (
                <div key={group.title ?? group.items[0]?.slice(0, 24)}>
                  {group.title && (
                    <h3 className="mb-3 font-display text-sm font-semibold text-accent-primary">
                      {group.title}
                    </h3>
                  )}
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed">
                        <Check
                          className={cn('mt-0.5 size-4 shrink-0', pillar.accentClass)}
                          aria-hidden
                        />
                        <span
                          className={
                            dark ? 'text-text-muted-on-dark' : 'text-text-primary'
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <ImageCarousel slides={slides} variant="section" showCaption />
          </div>
        </div>
      </Container>
    </section>
  )
}
