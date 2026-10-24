import { branding } from '@/config/branding'
import { cn } from '@/lib/cn'

type LogoStripProps = {
  title?: string
  className?: string
}

export function LogoStrip({ title = 'Parceiros e fabricantes', className }: LogoStripProps) {
  const { partners } = branding

  if (partners.length === 0) {
    return (
      <div className={cn('border-y border-white/10 py-8', className)}>
        <p className="text-center text-xs uppercase tracking-widest text-text-muted-on-dark">
          {title}
        </p>
        <p className="mt-2 text-center text-sm text-text-muted-on-dark/70">
          Adicione logos em <code className="text-accent-primary">public/branding/partners/</code>
        </p>
      </div>
    )
  }

  const doubled = [...partners, ...partners]

  return (
    <div className={cn('overflow-hidden border-y border-white/10 py-6', className)}>
      <p className="mb-4 text-center text-xs uppercase tracking-widest text-text-muted-on-dark">
        {title}
      </p>
      <div className="relative flex">
        <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
          {doubled.map((partner, i) => (
            <img
              key={`${partner.src}-${i}`}
              src={partner.src}
              alt={partner.alt}
              className="h-8 w-auto max-w-[120px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
