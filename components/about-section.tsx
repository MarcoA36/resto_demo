export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary/10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/restaurant-interior-cozy-dining.jpg"
              alt="Restaurante La Casa del Sabor"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Sobre Nosotros</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Con más de 15 años de experiencia, La Casa del Sabor se ha convertido en el lugar favorito de cientos de
              familias. Nuestro compromiso es ofrecerte comida casera de calidad, preparada al momento con ingredientes
              frescos y seleccionados.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Cada receta es una tradición familiar pasada de generación en generación. Creemos que la buena comida es
              sinónimo de amor, dedicación y atención a los detalles. Por eso, en cada plato que servimos, ponemos todo
              nuestro corazón.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro ambiente es cálido y familiar, perfecto para compartir momentos especiales con los tuyos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
