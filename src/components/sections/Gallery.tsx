import { galleryCarousel } from '@/content/media'
import { Container } from '@/components/ui/Container'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Gallery() {
  return (
    <section id="galeria" className="bg-surface-light py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Trabalhos em campo"
          subtitle="Instalações reais em mobilidade elétrica, energia solar e infraestrutura industrial."
          className="mb-12"
        />

        <div className="md:hidden">
          <ImageCarousel
            slides={galleryCarousel.slides}
            variant="gallery"
            showCaption
          />
        </div>

        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryCarousel.slides.map((slide) => (
            <figure
              key={slide.src}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {slide.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-dark/90 to-transparent px-4 py-4 text-sm font-medium text-text-on-dark">
                  {slide.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
