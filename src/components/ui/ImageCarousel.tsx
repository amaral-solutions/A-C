import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import type { Slide } from '@/types/content'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/cn'

type ImageCarouselProps = {
  slides: Slide[]
  variant?: 'hero' | 'section' | 'gallery'
  autoplayMs?: number
  className?: string
  showCaption?: boolean
}

export function ImageCarousel({
  slides,
  variant = 'section',
  autoplayMs,
  className,
  showCaption = false,
}: ImageCarouselProps) {
  const reducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const count = slides.length

  const go = useCallback(
    (delta: number) => {
      if (count === 0) return
      setIndex((i) => (i + delta + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (!autoplayMs || count <= 1 || reducedMotion) return
    const id = window.setInterval(() => go(1), autoplayMs)
    return () => window.clearInterval(id)
  }, [autoplayMs, count, go, reducedMotion])

  if (count === 0) {
    return (
      <div
        className={cn(
          'flex items-center justify-center overflow-hidden rounded-xl bg-surface-dark-elevated',
          variant === 'hero' ? 'absolute inset-0' : 'aspect-video w-full',
          className,
        )}
      >
        <img
          src="/images/placeholders/no-image.svg"
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
      </div>
    )
  }

  const isHero = variant === 'hero'

  return (
    <div
      className={cn(
        'group relative overflow-hidden',
        isHero && 'absolute inset-0',
        !isHero && 'aspect-video w-full rounded-xl',
        variant === 'gallery' && 'rounded-2xl',
        className,
      )}
      aria-roledescription="carousel"
      aria-label="Galeria de imagens"
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <figure key={slide.src} className="relative h-full min-w-full shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
              loading={isHero ? 'eager' : 'lazy'}
            />
            {showCaption && slide.caption && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-dark/90 to-transparent px-4 py-3 text-sm text-text-on-dark">
                {slide.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-surface-dark/60 p-2 text-text-on-dark opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus:opacity-100"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-surface-dark/60 p-2 text-text-on-dark opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus:opacity-100"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="size-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  'size-2 rounded-full transition-colors',
                  i === index ? 'bg-accent-primary' : 'bg-white/40',
                )}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
