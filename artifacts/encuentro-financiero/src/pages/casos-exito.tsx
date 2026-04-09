import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Quote, Star, MessageCircle } from "lucide-react";
import familiaImg from "@/assets/images/testimonial-family.png";
import businessImg from "@/assets/images/testimonial-business.png";

const WHATSAPP_NUMBER = "13055550123";

const TESTIMONIOS = [
  {
    nombre: "Jorge y María Ramirez",
    tipo: "Familia",
    ubicacion: "Miami, FL",
    img: familiaImg,
    estrellas: 5,
    categoria: "Consultoría Personal",
    cita: "No sabía lo importante que era tomar esta consultoría. Antes estaba desorganizado y estaba perdiendo oportunidades. Ahora, con este programa, mi familia y yo estamos garantizando y construyendo un futuro seguro.",
    historia:
      "Cuando llegamos a Encuentro Financiero, teníamos deudas acumuladas en tres tarjetas de crédito y no teníamos plan para el futuro. La pregunta que más nos quitaba el sueño era: ¿Qué les pasaría a nuestros hijos si yo no estoy? Gracias al programa de consultoría personal, hoy tenemos un presupuesto claro, hemos reducido nuestras deudas en un 60%, y por primera vez tenemos un fondo de emergencia y un plan de inversión. Nuestros hijos están protegidos.",
    resultado: "60% reducción de deudas en 6 meses",
  },
  {
    nombre: "Claudia Esperanza Torres",
    tipo: "Empresaria",
    ubicacion: "Orlando, FL",
    img: businessImg,
    estrellas: 5,
    categoria: "Consultoría Empresarial",
    cita: "Tenía un negocio funcionando pero sin estructura. Encuentro Financiero me enseñó a ver mi empresa como un profesional y me abrió las puertas al sistema financiero.",
    historia:
      "Mi restaurante llevaba 3 años operando pero vivíamos al día, sin crédito empresarial y sin saber si realmente ganábamos dinero. El equipo de Encuentro Financiero analizó mi flujo de caja, me ayudó a estructurar legalmente el negocio, y en 4 meses calificamos para una línea de crédito empresarial. Hoy tengo dos sucursales y un plan claro para los próximos 3 años.",
    resultado: "Línea de crédito empresarial aprobada + 2 sucursales",
  },
  {
    nombre: "Roberto y Ana González",
    tipo: "Familia",
    ubicacion: "Houston, TX",
    img: familiaImg,
    estrellas: 5,
    categoria: "Crédito y Patrimonio",
    cita: "Llegamos a EE.UU. sin crédito y sin saber cómo funciona el sistema. Hoy tenemos casa propia, crédito sólido y nuestros hijos tienen college savings.",
    historia:
      "Como inmigrantes, el sistema financiero americano nos parecía imposible de entender. No teníamos historial crediticio, no sabíamos cómo funcionaban los impuestos, y teníamos miedo de cometer errores costosos. Encuentro Financiero nos guió paso a paso. Dos años después, compramos nuestra primera casa en Texas y ya empezamos a invertir para la educación de nuestros hijos.",
    resultado: "Primer hogar propio + credit score 780",
  },
  {
    nombre: "Luis Alberto Fuentes",
    tipo: "Empresario",
    ubicacion: "Los Angeles, CA",
    img: businessImg,
    estrellas: 5,
    categoria: "Estrategia Empresarial",
    cita: "Gracias a la consultoría, pasé de pagar más impuestos de los necesarios a optimizar mi estructura fiscal y reinvertir ese dinero en mi negocio.",
    historia:
      "Tenía una empresa de construcción con buenos ingresos pero pagaba impuestos sin estrategia. El equipo de Encuentro Financiero me ayudó a reestructurar mi empresa, implementar deducciones legales y optimizar mi carga fiscal. Ese dinero ahorrado lo reinvertí en equipo y en contratar personal. Mi negocio creció un 40% en el primer año.",
    resultado: "40% crecimiento + optimización fiscal completa",
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
      ))}
    </div>
  );
}

export default function CasosExito() {
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
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Casos de Éxito</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Historias reales. Cambios que duran para siempre.
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Estas son las historias de familias y empresarios latinos que transformaron su vida financiera con el acompañamiento de Encuentro Financiero.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/10 border-b border-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { numero: "500+", label: "Familias asesoradas" },
              { numero: "200+", label: "Empresas estructuradas" },
              { numero: "95%", label: "Clientes satisfechos" },
              { numero: "$2M+", label: "En deudas eliminadas" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.numero}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {TESTIMONIOS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-primary/10 shadow-lg">
                    <img
                      src={t.img}
                      alt={t.nombre}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>

                <div className={`${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    {t.categoria}
                  </span>
                  <StarRating stars={t.estrellas} />
                  <blockquote className="mt-4 mb-6">
                    <Quote className="h-8 w-8 text-secondary/40 mb-3" />
                    <p className="text-xl font-medium text-primary italic leading-relaxed">"{t.cita}"</p>
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed mb-6">{t.historia}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-primary">{t.nombre}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.tipo} — {t.ubicacion}
                      </p>
                    </div>
                    <div className="bg-secondary/10 rounded-lg px-4 py-2 text-right">
                      <p className="text-xs text-muted-foreground uppercase font-medium">Resultado</p>
                      <p className="text-sm font-bold text-secondary">{t.resultado}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Tu historia de éxito comienza hoy.</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Únete a las cientos de familias y empresarios latinos que ya transformaron su futuro financiero con Encuentro Financiero.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            <MessageCircle className="h-6 w-6" />
            Agenda tu primera sesión gratuita
          </a>
        </div>
      </section>
    </Layout>
  );
}
