import { MessageCircle, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">La Casa del Sabor</h3>
            <p className="text-background/80">Comida casera hecha con amor y ingredientes frescos</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="space-y-2">
              <a href="tel:+541123456789" className="flex items-center gap-2 hover:text-background/80 transition">
                <Phone className="w-4 h-4" />
                +54 11 2345-6789
              </a>
              <a
                href="https://maps.google.com/?q=Av+Córdoba+2500"
                className="flex items-center gap-2 hover:text-background/80 transition"
              >
                <MapPin className="w-4 h-4" />
                Av. Córdoba 2500, CABA
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://wa.me/5491234567890" className="hover:text-background/80 transition">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-background/80 transition">
                Instagram
              </a>
              <a href="https://facebook.com" className="hover:text-background/80 transition">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; 2025 La Casa del Sabor. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
