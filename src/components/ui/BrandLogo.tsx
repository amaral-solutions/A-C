import { useState } from 'react'
import { branding } from '@/config/branding'
import { cn } from '@/lib/cn'

type BrandLogoProps = {
  variant: 'header' | 'footer' | 'icon'
  onLight?: boolean
  className?: string
}

export function BrandLogo({ variant, onLight = false, className }: BrandLogoProps) {
  const [imgError, setImgError] = useState(false)
  const { logo } = branding

  const src =
    variant === 'footer'
      ? logo.footer
      : variant === 'icon'
        ? logo.icon
        : onLight
          ? logo.headerOnLight
          : logo.header

  const showWordmark = logo.showWordmark && imgError

  if (showWordmark && variant !== 'icon') {
    return (
      <div className={cn('flex flex-col leading-none', className)}>
        <span
          className={cn(
            'font-display text-xl font-bold tracking-tight',
            onLight ? 'text-text-primary' : 'text-text-on-dark',
          )}
        >
          {logo.wordmark}
        </span>
        <span className="text-xs font-medium text-accent-primary">{logo.tagline}</span>
      </div>
    )
  }

  if (showWordmark && variant === 'icon') {
    return (
      <span
        className={cn(
          'flex size-10 items-center justify-center rounded-lg bg-gradient-cta font-display text-sm font-bold text-surface-dark',
          className,
        )}
      >
        {logo.wordmark}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={logo.alt}
      onError={() => setImgError(true)}
      className={cn(
        variant === 'icon'
          ? 'size-10 object-contain'
          : 'h-11 w-auto max-w-[180px] object-contain sm:h-12 sm:max-w-[200px]',
        className,
      )}
    />
  )
}
