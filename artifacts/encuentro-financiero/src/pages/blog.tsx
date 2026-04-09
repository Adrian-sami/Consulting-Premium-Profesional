import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowRight, MessageCircle } from "lucide-react";
import blogCreditImg from "@/assets/images/blog-credit.png";
import blogMistakesImg from "@/assets/images/blog-mistakes.png";
import heroImg from "@/assets/images/hero.png";

const WHATSAPP_NUMBER = "13055550123";

const ARTICULOS = [
  {
    titulo: "Cómo construir crédito en EE.UU. desde cero",
    resumen:
      "El sistema de crédito americano puede parecer intimidante al principio. En este artículo te explicamos paso a paso cómo comenzar a construir un historial crediticio sólido, incluso si acaba de llegar al país.",
    imagen: blogCreditImg,
    fecha: "15 de marzo, 2025",
    tiempo: "8 min lectura",
    categoria: "Crédito",
    tags: ["Crédito", "Educación Financiera", "Inmigrantes"],
  },
  {
    titulo: "Los 5 errores financieros más comunes de los latinos en EE.UU.",
    resumen:
      "Muchas familias latinas cometen los mismos errores financieros sin saberlo. Desde no aprovechar cuentas bancarias hasta ignorar la planificación tributaria, te mostramos cómo evitar estas trampas.",
    imagen: blogMistakesImg,
    fecha: "28 de febrero, 2025",
    tiempo: "6 min lectura",
    categoria: "Finanzas Personales",
    tags: ["Finanzas", "Errores comunes", "Latinx"],
  },
  {
    titulo: "Cómo prepararte para la temporada de taxes: Guía completa",
    resumen:
      "Los impuestos en EE.UU. tienen reglas específicas que muchos desconocen. Te explicamos qué documentos necesitas, qué deducciones puedes aplicar y cómo evitar penalidades innecesarias.",
    imagen: heroImg,
    fecha: "10 de enero, 2025",
    tiempo: "10 min lectura",
    categoria: "Impuestos",
    tags: ["Taxes", "Deducciones", "IRS"],
  },
  {
    titulo: "¿Por qué tu negocio latino necesita una estructura legal clara?",
    resumen:
      "Muchos emprendedores latinos operan sin una estructura empresarial adecuada, lo que los expone a riesgos legales y fiscales. Te explicamos las diferencias entre LLC, Corporation y otras figuras y cuál es la mejor para tu negocio.",
    imagen: blogCreditImg,
    fecha: "5 de diciembre, 2024",
    tiempo: "7 min lectura",
    categoria: "Empresas",
    tags: ["LLC", "Estructura legal", "Emprendedores"],
  },
  {
    titulo: "Inversión para latinos en EE.UU.: Dónde empezar con poco dinero",
    resumen:
      "No necesitas miles de dólares para comenzar a invertir. Te mostramos las opciones más accesibles para la comunidad latina, desde cuentas de ahorro de alto rendimiento hasta ETFs y bienes raíces.",
    imagen: blogMistakesImg,
    fecha: "20 de noviembre, 2024",
    tiempo: "9 min lectura",
    categoria: "Inversiones",
    tags: ["Inversión", "ETFs", "Ahorro"],
  },
  {
    titulo: "Protección patrimonial: Cómo asegurarte de que tu familia esté protegida",
    resumen:
      "¿Qué pasaría con tu familia si mañana no estuvieras? La planificación patrimonial es uno de los temas más importantes y menos discutidos en nuestra comunidad. Te explicamos los documentos esenciales que toda familia latina en EE.UU. debe tener.",
    imagen: heroImg,
    fecha: "8 de octubre, 2024",
    tiempo: "11 min lectura",
    categoria: "Patrimonio",
    tags: ["Patrimonio", "Familia", "Seguros"],
  },
];

const CATEGORIAS = ["Todos", "Crédito", "Finanzas Personales", "Impuestos", "Empresas", "Inversiones", "Patrimonio"];

export default function Blog() {
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
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Blog y Recursos</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Educación financiera para la comunidad latina.
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Artículos, guías y consejos prácticos escritos por nuestros expertos para ayudarte a tomar mejores decisiones financieras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIAS.map((cat, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === "Todos"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Artículo destacado */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center bg-card border border-border rounded-2xl overflow-hidden shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={ARTICULOS[0].imagen}
                alt={ARTICULOS[0].titulo}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <div className="p-8 lg:p-10">
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Artículo destacado — {ARTICULOS[0].categoria}
              </span>
              <h2 className="text-2xl font-bold text-primary mb-4">{ARTICULOS[0].titulo}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{ARTICULOS[0].resumen}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" /> {ARTICULOS[0].fecha}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {ARTICULOS[0].tiempo}
                </span>
              </div>
              <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                Leer artículo completo <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="py-8 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICULOS.slice(1).map((art, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="aspect-[16/9] overflow-hidden bg-primary/10">
                  <img
                    src={art.imagen}
                    alt={art.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-3">
                    {art.categoria}
                  </span>
                  <h3 className="text-lg font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                    {art.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{art.resumen}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" /> {art.fecha}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {art.tiempo}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl font-bold text-primary mb-3">Recibe nuestros artículos en tu correo</h3>
          <p className="text-muted-foreground mb-8">Educación financiera práctica, directamente en tu bandeja de entrada. Sin spam.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className="flex-1 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
            />
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6 py-3 rounded-lg transition-colors">
              Suscribirse
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            ¿Prefiere WhatsApp?{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Conéctese aquí
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
