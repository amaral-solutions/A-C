import { cn } from '@/lib/cn'

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3 py-1 text-xs font-medium text-accent-primary',
        className,
      )}
    >
      {children}
    </span>
  )
}
