import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, serviceNavLinks } from '@/config/navigation'
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
  const { contact } = site
  const whatsappUrl = buildWhatsAppUrl(
    contact.phone,
    contact.whatsappMessage,
  )
  const telHref = `tel:+${contact.phone.replace(/\D/g, '')}`

  const closeMenu = () => setMenuOpen(false)

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

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'header-blur border-b border-white/10 backdrop-blur-xl'
            : 'bg-transparent',
          menuOpen && 'md:bg-transparent',
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
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </Container>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-[60] flex flex-col bg-surface-dark md:hidden"
        >
          <Container className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-white/10">
            <a href="#inicio" onClick={closeMenu} aria-label="Ir para início">
              <BrandLogo variant="header" />
            </a>
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-lg p-2 text-text-on-dark"
              aria-label="Fechar menu"
            >
              <X className="size-6" />
            </button>
          </Container>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
            <Container className="flex flex-1 flex-col py-6">
              <nav aria-label="Mobile" className="space-y-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">
                  Navegação
                </p>
                {navItems.map((item) => {
                  const id = item.href.replace('#', '')
                  const active = activeId === id
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        'flex items-center rounded-xl px-4 py-3.5 text-base font-medium transition-colors',
                        active
                          ? 'bg-accent-primary/15 text-accent-primary'
                          : 'text-text-on-dark hover:bg-white/5',
                      )}
                    >
                      {item.label}
                    </a>
                  )
                })}
              </nav>

              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">
                  Serviços
                </p>
                <ul className="space-y-1">
                  {serviceNavLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="block rounded-lg px-4 py-2.5 text-sm text-text-muted-on-dark transition hover:bg-white/5 hover:text-text-on-dark"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-4 pt-10">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted-on-dark">
                    Contato rápido
                  </p>
                  <a
                    href={telHref}
                    className="mt-2 flex items-center gap-2 font-display text-lg font-semibold text-text-on-dark"
                  >
                    <Phone className="size-5 text-accent-primary" />
                    {contact.phoneDisplay}
                  </a>
                </div>
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 text-base"
                  onClick={closeMenu}
                >
                  Solicitar orçamento
                </Button>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  )
}
