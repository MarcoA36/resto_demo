"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface MenuItem {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
}

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted transition-colors"
      >
        <div className="flex items-center justify-between flex-1">
          <div className="text-left">
            <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
            <p className="text-primary font-bold text-base mt-1">${item.price.toFixed(2)}</p>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-primary transition-transform ml-4 flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-border px-4 py-4 bg-muted/30 space-y-3">
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-accent transition-colors">
            Agregar a Pedido
          </button>
        </div>
      )}
    </div>
  )
}
