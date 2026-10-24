import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '@/config/navigation'
import { site } from '@/content/site'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'

const spyIds = navItems.map((item) => item.href.replace('#', ''))

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(spyIds)
  const whatsappUrl = buildWhatsAppUrl(
    site.contact.phone,
    site.contact.whatsappMessage,
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'header-blur border-b border-white/10 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="Ir para início">
          <BrandLogo variant="header" />
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const active = activeId === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'text-accent-primary'
                    : 'text-text-on-dark/80 hover:text-text-on-dark',
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Solicitar orçamento
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-text-on-dark md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {menuOpen && (
        <div className="fixed inset-0 top-[4.5rem] z-40 bg-surface-dark md:hidden">
          <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-medium text-text-on-dark hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full"
            >
              Solicitar orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
