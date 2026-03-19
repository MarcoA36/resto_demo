import { MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LocationHours() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Horarios y Ubicación</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Horarios */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Nuestros Horarios</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="font-semibold text-foreground">Lunes a Viernes</span>
                <span className="text-muted-foreground">11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="font-semibold text-foreground">Sábado</span>
                <span className="text-muted-foreground">10:00 AM - 12:00 AM</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold text-foreground">Domingo</span>
                <span className="text-muted-foreground">10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <MapPin className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Nuestra Ubicación</h3>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Av. Córdoba 2500
              <br />
              Buenos Aires, Argentina
              <br />
              Barrio de Almagro
            </p>
            <a href="https://maps.google.com/?q=Av+Córdoba+2500+Buenos+Aires" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Abrir en Google Maps
              </Button>
            </a>
            <div className="mt-6 flex items-center">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <a href="tel:+541123456789" className="text-primary font-semibold hover:underline">
                +54 11 2345-6789
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
