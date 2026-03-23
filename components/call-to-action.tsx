import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">¿Tenés Hambre?</h2>
        <p className="text-xl md:text-2xl mb-8 font-light text-balance">
          Hacé tu pedido ahora por WhatsApp o reserva tu mesa para hoy
        </p>
        <a >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 md:px-12 py-6 md:py-8 text-lg font-semibold"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Chatear por WhatsApp
          </Button>
        </a>
      </div>
    </section>
  )
}
