"use client"

import { ChevronRight } from "lucide-react"

interface Promotion {
  id: string
  title: string
  description: string
  price: number
  image: string
}

const promotions: Promotion[] = [
  {
    id: "1",
    title: "Milanesa Napolitana + Papas Fritas",
    description:
      "Milanesa de ternera crujiente con salsa de tomate, queso derretido y jamón, acompañada con papas fritas recién hechas",
    price: 14.99,
    image: "/milanesa-napolitana.jpg",
  },
  {
    id: "2",
    title: "Fideos a la Crema de Champiñones",
    description: "Fideos caseros en una deliciosa salsa cremosa con champiñones frescos, ajo y un toque de perejil",
    price: 13.99,
    image: "/tagliatelle-bolognese.jpg",
  },
  {
    id: "3",
    title: "Vino Especial de la Casa",
    description:
      "Nuestro vino tinto exclusivo, cuidadosamente seleccionado para acompañar cualquier comida. Copa 250ml",
    price: 6.99,
    image: "/vino-especial.jpg",
  },
]

export default function PromotionsBanner() {
  return (
    <section className="bg-gradient-to-r from-accent/10 to-primary/10 py-8 px-4 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-6">Promociones Especiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              {/* Image */}
              <div className="relative w-full h-32 bg-muted overflow-hidden">
                <img
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2 line-clamp-2">{promo.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{promo.description}</p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">${promo.price.toFixed(2)}</span>
                  <a
                  
                    className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-2 rounded text-sm font-semibold hover:bg-accent transition-colors group-hover:gap-2"
                  >
                    Pedir
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
