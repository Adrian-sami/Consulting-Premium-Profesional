import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BookOpen, Star, MessageCircle, ExternalLink } from "lucide-react";

const WHATSAPP_NUMBER = "13055550123";

const LIBROS = [
  {
    titulo: "Padre Rico, Padre Pobre",
    autor: "Robert T. Kiyosaki",
    descripcion:
      "El libro de finanzas personales más vendido de todos los tiempos. Kiyosaki comparte las lecciones que aprendió de dos figuras paternas con filosofías financieras opuestas, y cómo esas lecciones moldean la diferencia entre los ricos y los pobres.",
    categoria: "Finanzas Personales",
    nivel: "Principiante",
    estrellas: 5,
    color: "from-amber-400 to-orange-500",
    letra: "P",
  },
  {
    titulo: "El Hombre Más Rico de Babilonia",
    autor: "George S. Clason",
    descripcion:
      "A través de parábolas ambientadas en la antigua Babilonia, este clásico transmite principios financieros atemporales sobre el ahorro, la inversión y la prosperidad. Lectura obligatoria para cualquier persona que desee mejorar sus finanzas.",
    categoria: "Ahorro e Inversión",
    nivel: "Principiante",
    estrellas: 5,
    color: "from-yellow-500 to-amber-600",
    letra: "H",
  },
  {
    titulo: "Los Secretos de la Mente Millonaria",
    autor: "T. Harv Eker",
    descripcion:
      "Eker revela cómo nuestros pensamientos y creencias sobre el dinero, formados en la infancia, determinan nuestro éxito financiero en la vida adulta. Aprende a reprogramar tu mente para el éxito económico.",
    categoria: "Mentalidad Financiera",
    nivel: "Principiante",
    estrellas: 4,
    color: "from-emerald-400 to-teal-600",
    letra: "S",
  },
  {
    titulo: "Cómo Ganar Amigos e Influir sobre las Personas",
    autor: "Dale Carnegie",
    descripcion:
      "Aunque no es un libro exclusivamente de finanzas, este clásico es fundamental para todo empresario. Las habilidades de comunicación y relación que enseña son esenciales para negociar, vender y hacer crecer tu red de contactos profesionales.",
    categoria: "Liderazgo Empresarial",
    nivel: "Todos los niveles",
    estrellas: 5,
    color: "from-blue-500 to-indigo-600",
    letra: "C",
  },
  {
    titulo: "La Semana Laboral de 4 Horas",
    autor: "Timothy Ferriss",
    descripcion:
      "Ferriss desafía la idea convencional del trabajo y propone un nuevo modelo de vida donde la automatización y la subcontratación permiten generar ingresos con menos tiempo. Ideal para emprendedores que quieren escalar sus negocios.",
    categoria: "Emprendimiento",
    nivel: "Intermedio",
    estrellas: 4,
    color: "from-purple-500 to-violet-600",
    letra: "S",
  },
  {
    titulo: "Negocios Exitosos para Latinos",
    autor: "Gustavo Bamberger",
    descripcion:
      "Una guía práctica diseñada específicamente para emprendedores latinos en EE.UU. Cubre desde la estructuración legal del negocio hasta el acceso a financiamiento y la construcción de marca para la comunidad hispana.",
    categoria: "Emprendimiento Latino",
    nivel: "Principiante",
    estrellas: 5,
    color: "from-red-500 to-rose-600",
    letra: "N",
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < stars ? "fill-secondary text-secondary" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

const NIVELES: Record<string, string> = {
  Principiante: "bg-green-100 text-green-700",
  Intermedio: "bg-blue-100 text-blue-700",
  "Todos los niveles": "bg-purple-100 text-purple-700",
};

export default function Libros() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Biblioteca Recomendada</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Libros que transforman la mentalidad financiera.
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Nuestra selección de lecturas esenciales para personas y empresarios que quieren tomar el control de su futuro económico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-secondary/10 border-b border-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
              <BookOpen className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-primary mb-1">Nota del equipo de Encuentro Financiero</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                La educación financiera es el cimiento de toda transformación económica. Estos libros han cambiado la forma en que cientos de nuestros clientes ven el dinero, los negocios y su futuro. Te recomendamos leerlos en el orden presentado para una progresión natural del aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Libros Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LIBROS.map((libro, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                {/* Cover simulada */}
                <div className={`h-48 bg-gradient-to-br ${libro.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-full" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full" />
                  </div>
                  <div className="text-center z-10">
                    <span className="text-7xl font-bold text-white/90 font-serif">{libro.letra}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent p-4">
                    <span className="text-white/80 text-xs font-medium uppercase tracking-wider">{libro.categoria}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-primary leading-snug group-hover:text-secondary transition-colors">
                      {libro.titulo}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 font-medium">{libro.autor}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <StarRating stars={libro.estrellas} />
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${NIVELES[libro.nivel]}`}>
                      {libro.nivel}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">{libro.descripcion}</p>

                  <button className="w-full text-center py-2.5 px-4 rounded-lg border border-primary/20 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Ver en Amazon
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <BookOpen className="h-10 w-10 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-3">¿Quieres una sesión de lectura guiada?</h3>
          <p className="text-muted-foreground mb-8">
            Nuestros consultores pueden ayudarte a aplicar los conceptos de estos libros a tu situación financiera específica.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Hablar con un consultor
          </a>
        </div>
      </section>
    </Layout>
  );
}
