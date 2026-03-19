"use client"

import MenuItemCard from "@/components/menu-item"
import PromotionsBanner from "@/components/promotions-banner"
import Footer from "@/components/footer"

interface MenuItem {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Pasta Carbonara",
    price: 18.5,
    description:
      "Deliciosa pasta fresca con salsa cremosa de huevo, queso parmesano y tocino crujiente. Un clásico italiano que no puede faltar.",
    image: "/pasta-carbonara.jpg",
    category: "Pastas",
  },
  {
    id: "2",
    name: "Pechuga a la Parmesana",
    price: 19.99,
    description:
      "Pechuga de pollo tierna rellena de queso y jamón, cubierta con salsa de tomate y gratinada en el horno. Acompañada con papas.",
    image: "/pechuga-parmesana.jpg",
    category: "Carnes",
  },
  {
    id: "3",
    name: "Bife de Chorizo",
    price: 24.99,
    description:
      "Jugoso corte de res a la parrilla, sazonado con nuestras especias secretas. Servido con papas al horno y ensalada fresca.",
    image: "/bife-chorizo.jpg",
    category: "Carnes",
  },
  {
    id: "4",
    name: "Salmón a la Mantequilla",
    price: 22.5,
    description:
      "Filete de salmón fresco cocinado a la mantequilla con limón y hierbas aromáticas. Acompañado de verduras al vapor.",
    image: "/salmon-mantequilla.jpg",
    category: "Pescados",
  },
  {
    id: "5",
    name: "Tagliatelle Bolognese",
    price: 17.99,
    description:
      "Pasta casera cubierta con nuestra tradicional salsa boloñesa cocinada a fuego lento durante horas. Terminada con queso parmesano.",
    image: "/tagliatelle-bolognese.jpg",
    category: "Pastas",
  },
  {
    id: "6",
    name: "Milanesa Napolitana",
    price: 16.99,
    description:
      "Milanesa de ternera cubierta con salsa de tomate, queso de bola y jamón. Una combinación irresistible y satisfactoria.",
    image: "/milanesa-napolitana.jpg",
    category: "Carnes",
  },
  {
    id: "7",
    name: "Camarones al Ajillo",
    price: 21.5,
    description:
      "Camarones frescos salteados con ajo, perejil y aceite de oliva extra virgen. Servidos con pan tostado para acompañar.",
    image: "/camarones-ajillo.jpg",
    category: "Pescados",
  },
  {
    id: "8",
    name: "Ravioles de Queso",
    price: 16.5,
    description:
      "Ravioles caseros rellenos de queso de cabra y ricota, con salsa de tomate fresco y albahaca. Una explosión de sabores.",
    image: "/ravioles-queso.jpg",
    category: "Pastas",
  },
  {
    id: "9",
    name: "Costillas BBQ",
    price: 23.99,
    description:
      "Costillas tiernas marinadas en nuestra salsa BBQ casera, cocinadas lentamente hasta que se deshacen. Acompañadas con puré.",
    image: "/costillas-bbq.jpg",
    category: "Carnes",
  },
]

export default function MenuPage() {
  const categories = Array.from(new Set(menuItems.map((item) => item.category)))

  return (
    <div className="w-full">
      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Menú</h1>
            <p className="text-primary-foreground/90 text-lg">Descubre nuestras deliciosas opciones</p>
          </div>
        </div>

        <PromotionsBanner />

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary">{category}</h2>
              <div className="space-y-3">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-muted py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para ordenar?</h2>
            <a
              href="https://wa.me/?text=Hola%20La%20Casa%20del%20Sabor%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Ordenar por WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
