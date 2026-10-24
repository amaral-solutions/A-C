import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import {
  Contact,
  Differentials,
  Gallery,
  Hero,
  ServiceDetailSection,
  ServicesOverview,
  TrustBar,
} from '@/components/sections'
import { servicePillars } from '@/content/services'

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesOverview />
        {servicePillars.map((pillar, i) => (
          <ServiceDetailSection
            key={pillar.id}
            pillar={pillar}
            reversed={i % 2 === 1}
          />
        ))}
        <Gallery />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
