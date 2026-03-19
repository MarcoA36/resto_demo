import { Leaf, Users, Heart, Zap } from "lucide-react"

const reasons = [
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Seleccionamos los mejores ingredientes locales cada día",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Cada cliente es importante para nosotros, servicio excepcional",
  },
  {
    icon: Heart,
    title: "Ambiente Familiar",
    description: "Un lugar acogedor donde se siente como en casa",
  },
  {
    icon: Zap,
    title: "Delivery Rápido",
    description: "Tu pedido llega caliente y en tiempo récord",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Por Qué Elegirnos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
