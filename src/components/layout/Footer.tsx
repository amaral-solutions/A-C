import { Mail, MapPin, Phone } from 'lucide-react'
import { branding } from '@/config/branding'
import { serviceNavLinks } from '@/config/navigation'
import { site } from '@/content/site'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { Container } from '@/components/ui/Container'

export function Footer() {
  const { contact, social, institutional, footerOfferings } = site
  const whatsappUrl = buildWhatsAppUrl(contact.phone, contact.whatsappMessage)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-dark text-text-on-dark">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-sm font-medium text-accent-primary">
              {branding.logo.tagline}
            </p>
            <p className="text-sm leading-relaxed text-text-muted-on-dark">
              {institutional}
            </p>
            <p className="text-sm font-medium leading-relaxed text-text-on-dark">
              {footerOfferings}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-text-on-dark">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted-on-dark transition hover:text-accent-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-text-on-dark">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted-on-dark">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent-primary"
                >
                  <Phone className="size-4 shrink-0" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 hover:text-accent-primary"
                >
                  <Mail className="size-4 shrink-0" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {contact.serviceArea}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-text-on-dark">
              Normas e confiança
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-text-muted-on-dark">
              <li>{contact.crea} — registro profissional</li>
              <li>ART — responsabilidade técnica</li>
              <li>NBR 5410, NR-10, NBR 5419</li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-text-muted-on-dark sm:flex-row">
        <p>
          © {year} {contact.companyName}. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          {social.instagram && (
            <a href={social.instagram} className="hover:text-accent-primary">
              Instagram
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} className="hover:text-accent-primary">
              LinkedIn
            </a>
          )}
        </div>
      </Container>
    </footer>
  )
}
