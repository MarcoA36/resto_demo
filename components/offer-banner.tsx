import { Button } from "@/components/ui/button"

export default function OfferBanner() {
  return (
    <section className="w-full bg-accent text-accent-foreground py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left flex-1">
          <p className="text-2xl md:text-3xl font-bold">🔥 Promo del Día</p>
          <p className="text-lg md:text-xl mt-2 font-light">20% OFF en pastas de lunes a jueves</p>
        </div>
        <a href="https://wa.me/5491234567890?text=Me%20interesa%20la%20promo%20de%20pastas">
          <Button size="lg" variant="secondary" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Aprovechar Oferta
          </Button>
        </a>
      </div>
    </section>
  )
}
