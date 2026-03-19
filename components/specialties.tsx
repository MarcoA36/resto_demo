import { Card } from "@/components/ui/card"

const specialties = [
  {
    name: "Asado Casero",
    description: "Carne premium marinada con especias tradicionales, acompañada de ensaladas frescas",
    price: "$850",
    image: "/grilled-meat-asado-restaurant.jpg",
  },
  {
    name: "Pasta Artesanal",
    description: "Fideos frescos hechos a diario con salsas caseras y queso parmesano rallado",
    price: "$420",
    image: "/fresh-pasta-plate-restaurant.jpg",
  },
  {
    name: "Cazuela de Mariscos",
    description: "Camarones, mejillones y pez espada en salsa blanca con vino blanco",
    price: "$950",
    image: "/seafood-paella-restaurant.jpg",
  },
  {
    name: "Milanesa a Caballo",
    description: "Filete empanado cubierto con queso fundido y jamón de calidad",
    price: "$680",
    image: "/breaded-cutlet-cheese-restaurant.jpg",
  },
  {
    name: "Salmón a la Mantequilla",
    description: "Filete de salmón fresco con salsa de limón y hierbas aromáticas",
    price: "$920",
    image: "/grilled-salmon-butter-restaurant.jpg",
  },
  {
    name: "Postre de la Casa",
    description: "Tiramisú casero hecho con ingredientes importados y café espresso",
    price: "$180",
    image: "/tiramisu-dessert-restaurant.jpg",
  },
]

export default function Specialties() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Especialidades de la Casa</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Nuestros platos más solicitados, preparados con amor y ingredientes frescos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((dish) => (
            <Card key={dish.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={dish.image || "/placeholder.svg"} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{dish.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{dish.description}</p>
                <p className="text-2xl font-bold text-primary">{dish.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
