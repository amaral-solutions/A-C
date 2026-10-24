import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'ghost' | 'outline'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-primary text-accent-brand font-semibold shadow-glow hover:-translate-y-0.5 hover:brightness-105',
  ghost: 'bg-transparent text-text-on-dark hover:bg-white/10',
  outline:
    'border border-accent-on-dark/50 text-text-on-dark hover:border-accent-on-dark hover:bg-white/10',
}

type SharedProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button({
  variant = 'primary',
  className,
  children,
  href,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-all duration-200',
    variants[variant],
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
