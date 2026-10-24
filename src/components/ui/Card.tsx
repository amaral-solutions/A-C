import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type CardProps = {
  children: ReactNode
  className?: string
  glass?: boolean
  gradientBorder?: boolean
}

export function Card({
  children,
  className,
  glass = false,
  gradientBorder = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6',
        glass && 'bg-white/5 backdrop-blur-sm',
        !glass && 'bg-surface-card shadow-sm',
        gradientBorder && 'gradient-border',
        className,
      )}
    >
      {children}
    </div>
  )
}
