import { Mail, MessageCircle, Phone } from 'lucide-react'
import { site } from '@/content/site'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Contact() {
  const { contact } = site
  const whatsappUrl = buildWhatsAppUrl(contact.phone, contact.whatsappMessage)

  return (
    <section id="contato" className="bg-surface-light py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Contato"
            title="Fale com nossa equipe técnica"
            subtitle="Solicite orçamento para laudos, projetos, instalações ou manutenção. Atendemos residências, condomínios, comércios e indústrias."
          />

          <Card className="gradient-border border-0 shadow-lg">
            <ul className="space-y-4 text-sm text-text-muted">
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-accent-brand" />
                <span>{contact.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-accent-brand" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-accent-brand"
                >
                  {contact.email}
                </a>
              </li>
              <li className="text-text-primary">{contact.serviceArea}</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </Button>
              <Button
                href={`mailto:${contact.email}`}
                variant="outline"
                className="flex-1 border-accent-brand/40 text-text-primary hover:bg-accent-brand/5"
              >
                E-mail
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
