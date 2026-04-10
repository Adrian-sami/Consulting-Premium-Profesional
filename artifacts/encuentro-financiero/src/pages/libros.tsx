import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BookOpen, Star, MessageCircle, PenTool, Printer, Users, CheckCircle, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "13055550123";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const LIBROS_FUNDADOR = [
  {
    titulo: "Finanzas para la Comunidad Latina en EE.UU.",
    subtitulo: "Guía práctica para dominar el sistema financiero americano",
    descripcion:
      "El libro que miles de familias latinas en EE.UU. han usado para entender el sistema financiero, construir crédito, salir de deudas y comenzar a construir patrimonio. Escrito desde la experiencia real de trabajar con cientos de familias hispanas.",
    color: "from-[#05143f] to-[#0a2272]",
    letra: "F",
    disponible: true,
  },
  {
    titulo: "El Empresario Latino Imparable",
    subtitulo: "Estrategias para crecer tu negocio en el mercado americano",
    descripcion:
      "Una hoja de ruta para emprendedores latinos que quieren estructurar, financiar y escalar sus negocios en EE.UU. con bases sólidas, acceso a capital y una visión clara de largo plazo.",
    color: "from-[#f25601] to-[#c44001]",
    letra: "E",
    disponible: true,
  },
  {
    titulo: "Crédito y Libertad",
    subtitulo: "Cómo el crédito en EE.UU. puede transformar tu vida",
    descripcion:
      "El crédito es la llave que abre las puertas del sistema financiero americano. Este libro enseña paso a paso cómo construirlo, protegerlo y usarlo estratégicamente para acceder a vivienda, capital y oportunidades.",
    color: "from-[#29b855] to-[#1a8a3d]",
    letra: "C",
    disponible: false,
  },
];

const LIBROS_RECOMENDADOS = [
  {
    titulo: "Padre Rico, Padre Pobre",
    autor: "Robert T. Kiyosaki",
    descripcion: "El libro de finanzas personales más vendido de todos los tiempos. Lecciones esenciales sobre la diferencia entre activos y pasivos, y cómo pensar como los ricos.",
    categoria: "Finanzas Personales",
    nivel: "Principiante",
    estrellas: 5,
    color: "from-amber-400 to-orange-500",
    letra: "P",
  },
  {
    titulo: "El Hombre Más Rico de Babilonia",
    autor: "George S. Clason",
    descripcion: "A través de parábolas, este clásico transmite principios financieros atemporales sobre el ahorro, la inversión y la prosperidad. Lectura obligatoria.",
    categoria: "Ahorro e Inversión",
    nivel: "Principiante",
    estrellas: 5,
    color: "from-yellow-500 to-amber-600",
    letra: "H",
  },
  {
    titulo: "Los Secretos de la Mente Millonaria",
    autor: "T. Harv Eker",
    descripcion: "Eker revela cómo nuestras creencias sobre el dinero determinan nuestro éxito financiero. Aprende a reprogramar tu mente para el éxito económico.",
    categoria: "Mentalidad Financiera",
    nivel: "Principiante",
    estrellas: 4,
    color: "from-emerald-400 to-teal-600",
    letra: "S",
  },
  {
    titulo: "Cómo Ganar Amigos e Influir sobre las Personas",
    autor: "Dale Carnegie",
    descripcion: "Fundamental para todo empresario. Las habilidades de comunicación que enseña son esenciales para negociar, vender y hacer crecer tu red de contactos.",
    categoria: "Liderazgo Empresarial",
    nivel: "Todos los niveles",
    estrellas: 5,
    color: "from-blue-500 to-indigo-600",
    letra: "C",
  },
  {
    titulo: "Negocios Exitosos para Latinos",
    autor: "Gustavo Bamberger",
    descripcion: "Una guía práctica diseñada para emprendedores latinos en EE.UU. Desde estructuración legal hasta acceso a financiamiento y construcción de marca.",
    categoria: "Emprendimiento Latino",
    nivel: "Principiante",
    estrellas: 5,
    color: "from-red-500 to-rose-600",
    letra: "N",
  },
];

const NIVELES: Record<string, string> = {
  Principiante: "bg-green-100 text-green-700",
  Intermedio: "bg-blue-100 text-blue-700",
  "Todos los niveles": "bg-purple-100 text-purple-700",
};

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
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Publicaciones & Ghostwriting</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Conocimiento que transforma vidas — escrito, publicado y compartido.
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Libros del fundador, lecturas recomendadas para nuestros clientes, y el servicio de ghostwriting y publicación para quienes tienen una historia valiosa que contar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Libros del Fundador */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Publicaciones del Fundador</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Libros escritos desde la experiencia real</h2>
            <p className="text-muted-foreground">
              Cada libro nació de años de trabajo directo con familias y empresarios latinos en EE.UU. — experiencias reales convertidas en conocimiento práctico y accesible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {LIBROS_FUNDADOR.map((libro, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className={`h-52 bg-gradient-to-br ${libro.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-24 h-24 border-2 border-white/30 rounded-full" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full" />
                  </div>
                  <span className="text-8xl font-bold text-white/80 font-serif z-10">{libro.letra}</span>
                  {!libro.disponible && (
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      Próximamente
                    </div>
                  )}
                  {libro.disponible && (
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Disponible
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-secondary transition-colors leading-snug">
                    {libro.titulo}
                  </h3>
                  <p className="text-secondary text-xs font-semibold mb-3 uppercase tracking-wide">{libro.subtitulo}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{libro.descripcion}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {libro.disponible ? "Consultar disponibilidad" : "Notificarme cuando salga"}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ghostwriting & Publishing Service */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Servicio de Ghostwriting y Publicación</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
              ¿Tienes una historia que vale la pena contar? La escribimos y publicamos por ti.
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              El fundador de Encuentro Financiero no solo ha publicado sus propios libros — también ha ayudado a otros empresarios y profesionales latinos a convertir su experiencia y conocimiento en libros publicados.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto mb-16">
            {/* Who We Work With */}
            <div>
              <h3 className="text-xl font-bold text-secondary mb-6 uppercase tracking-wide">¿Con quién trabajamos?</h3>
              <div className="space-y-4">
                {[
                  { titulo: "Empresarios con experiencia valiosa", desc: "Dueños de negocios que han aprendido lecciones únicas construyendo sus empresas y quieren compartirlas para inspirar a otros." },
                  { titulo: "Consultores y coaches", desc: "Profesionales que tienen un método o sistema probado y quieren convertirlo en un libro que posicione su autoridad y genere nuevos clientes." },
                  { titulo: "Líderes comunitarios", desc: "Personas que han tenido un impacto en su comunidad y quieren documentar su historia para inspirar a la siguiente generación." },
                  { titulo: "Profesionales con una historia que compartir", desc: "Cualquier persona que tiene conocimiento, experiencia o una historia poderosa que puede transformar la vida de otros al ser publicada." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{item.titulo}</h4>
                      <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ghostwriting Process */}
            <div>
              <h3 className="text-xl font-bold text-secondary mb-6 uppercase tracking-wide">Proceso de Ghostwriting</h3>
              <div className="space-y-4">
                {[
                  { paso: "01", titulo: "Sesión de descubrimiento", desc: "Exploramos juntos tu historia, tu mensaje central, tu audiencia objetivo y los objetivos que quieres lograr con el libro." },
                  { paso: "02", titulo: "Estructura y outline", desc: "Diseñamos el esquema completo del libro — capítulos, flujo narrativo y los puntos clave que marcarán la diferencia para tus lectores." },
                  { paso: "03", titulo: "Escritura y revisión", desc: "Escribimos el manuscrito en tu voz y con tu perspectiva. Incluye múltiples rondas de revisión hasta que quedes completamente satisfecho." },
                  { paso: "04", titulo: "Edición y diseño", desc: "Edición profesional, corrección de estilo, diseño de portada e interior del libro para que luzca a la altura de tu historia." },
                  { paso: "05", titulo: "Publicación y distribución", desc: "Te conectamos con las mejores opciones de publicación — desde Amazon KDP hasta editoriales — y te guiamos en todo el proceso hasta que tu libro llegue al mundo." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl font-black text-secondary/40 w-8 shrink-0 leading-tight">{item.paso}</span>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex-1">
                      <h4 className="font-semibold text-white text-sm mb-1">{item.titulo}</h4>
                      <p className="text-primary-foreground/60 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Publishing Options */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-secondary mb-8 uppercase tracking-wide text-center">Opciones de Publicación</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icono: Printer,
                  titulo: "Autopublicación (KDP)",
                  desc: "Publica tu libro en Amazon Kindle Direct Publishing y llega a millones de lectores en todo el mundo. Control total sobre tu obra y mayores márgenes de ganancia.",
                  detalles: ["Amazon Kindle + impresión bajo demanda", "Distribución global inmediata", "Hasta 70% de regalías", "Control total del precio"],
                },
                {
                  icono: BookOpen,
                  titulo: "Editorial Independiente",
                  desc: "Te conectamos con editoriales independientes especializadas en literatura latina y de negocios para una publicación con respaldo editorial profesional.",
                  detalles: ["Proceso editorial estructurado", "Distribución en librerías", "ISBN y código de barras incluidos", "Apoyo en relaciones públicas"],
                },
                {
                  icono: Users,
                  titulo: "Publicación Empresarial",
                  desc: "Para consultores y empresarios que quieren usar su libro como herramienta de marketing, posicionamiento de marca y generación de nuevos clientes.",
                  detalles: ["Libro como herramienta de ventas", "Edición para clientes y socios", "Distribución dirigida a tu audiencia", "Estrategia de lanzamiento incluida"],
                },
              ].map((opcion, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/15 rounded-2xl p-7"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-5">
                    <opcion.icono className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-3">{opcion.titulo}</h4>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5">{opcion.desc}</p>
                  <ul className="space-y-2">
                    {opcion.detalles.map((d, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-primary-foreground/70">
                        <ChevronRight className="h-3 w-3 text-secondary shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center bg-secondary/10 border border-secondary/30 rounded-2xl p-10">
              <PenTool className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">¿Listo para convertir tu historia en un libro?</h3>
              <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
                Solicita una consulta de publicación gratuita. Evaluamos tu idea, tu audiencia y el mejor camino para llevar tu libro al mundo.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar consulta de publicación
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lecturas Recomendadas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Biblioteca Recomendada</p>
            <h2 className="text-3xl font-bold text-primary mb-4">Libros que recomendamos a nuestros clientes</h2>
            <p className="text-muted-foreground">
              Lecturas esenciales seleccionadas por nuestros consultores para complementar el proceso de transformación financiera.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {LIBROS_RECOMENDADOS.map((libro, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className={`h-44 bg-gradient-to-br ${libro.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-full" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full" />
                  </div>
                  <span className="text-7xl font-bold text-white/90 font-serif z-10">{libro.letra}</span>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent p-4">
                    <span className="text-white/80 text-xs font-medium uppercase tracking-wider">{libro.categoria}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary leading-snug group-hover:text-secondary transition-colors mb-1">
                    {libro.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 font-medium">{libro.autor}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <StarRating stars={libro.estrellas} />
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${NIVELES[libro.nivel]}`}>
                      {libro.nivel}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{libro.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
