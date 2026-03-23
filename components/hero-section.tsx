"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function HeroSection() {
const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000) // cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[80vh]  flex items-center justify-center overflow-hidden">

      {/* Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Overlay oscuro */}
       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          La Casa del Sabor
        </h1>

        <p className="text-xl md:text-2xl mb-8 font-light">
          Comida casera hecha al momento con ingredientes frescos
        </p>

        <a
          href="https://wa.me/5491234567890?text=Hola!%20Me%20gustaría%20hacer%20una%20reserva%20o%20pedido"
          className="inline-block"
        >
          <Button size="lg" className="px-8 py-6 text-lg font-semibold">
            <MessageCircle className="w-6 h-6 mr-2" />
            Reservar por WhatsApp
          </Button>
        </a>
      </div>
    </section>
  )
}