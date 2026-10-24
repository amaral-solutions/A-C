import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' && 'text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-bold tracking-tight sm:text-4xl',
          dark ? 'text-text-on-dark' : 'text-text-primary',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 max-w-2xl text-base leading-relaxed',
            align === 'center' && 'mx-auto',
            dark ? 'text-text-muted-on-dark' : 'text-text-muted',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
