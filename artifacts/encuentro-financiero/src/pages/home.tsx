import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Users,
  CheckCircle,
  Quote,
  Star,
  MessageCircle,
  Landmark,
  BarChart3,
  CreditCard,
} from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/images/hero.png";
import familiaImg from "@/assets/images/testimonial-family.png";
import businessImg from "@/assets/images/testimonial-business.png";

const WHATSAPP_NUMBER = "13055550123";

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Consultoría Financiera para la Comunidad Latina
            </motion.p>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Tu futuro financiero, construido con confianza y propósito.
            </h1>
            <p className="text-xl text-primary-foreground/85 mb-10 max-w-2xl leading-relaxed">
              La firma consultora líder que integra a la comunidad latina al sistema financiero de EE.UU. y potencia el crecimiento de sus negocios. Primera sesión siempre gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 py-6">
                  Agenda tu sesión gratis
                </Button>
              </a>
              <Link href="/nosotros">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6"
                >
                  Conoce nuestra misión
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[familiaImg, businessImg, familiaImg].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  />
                ))}
              </div>
              <div>
                <StarRating stars={5} />
                <p className="text-primary-foreground/70 text-sm mt-1">+500 familias y empresas asesoradas</p>
              </div>
            </div>
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
              { numero: "10+", label: "Años de experiencia" },
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

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Por qué elegir Encuentro Financiero?
            </h2>
            <p className="text-lg text-muted-foreground">
              Entendemos tu cultura, hablamos tu idioma y conocemos el sistema. Te guiamos paso a paso hacia la estabilidad y el crecimiento que mereces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                titulo: "Confianza y Transparencia",
                desc: "Asesoría ética y clara. Protegemos tu patrimonio como si fuera nuestro. Sin letras pequeñas ni sorpresas.",
              },
              {
                icon: TrendingUp,
                titulo: "Crecimiento Estratégico",
                desc: "No solo resolvemos deudas, construimos riqueza generacional. Planes concretos con resultados medibles.",
              },
              {
                icon: Users,
                titulo: "Enfoque en la Comunidad",
                desc: "Diseñado específicamente para familias y empresarios latinos. Entendemos tus necesidades mejor que nadie.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.titulo}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground">Consultoría integral para personas y empresas que buscan crecer y prosperar en EE.UU.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Personas */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Landmark className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Para Personas y Familias</h3>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Construye un futuro seguro. Te ayudamos a organizar tus finanzas, salir de deudas, crear crédito y proteger a los que más amas.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Optimización Financiera y Control de Deudas",
                  "Estrategias de Inversión y Protección Patrimonial",
                  "Integración al Sistema Financiero y Crédito",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/servicios-personas" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                Ver servicios personales <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Empresas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-10 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Para Empresas y Negocios</h3>
              </div>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Escala tu negocio con bases sólidas. Estructuración legal, flujo de caja, acceso a capital y estrategias fiscales.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Estructuración y Lanzamiento Empresarial",
                  "Estrategia y Crecimiento de Negocio",
                  "Optimización Fiscal y Acceso a Capital",
                  "Comerciales en Univision y Marketing Digital",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/servicios-empresas" className="inline-flex items-center text-secondary font-semibold hover:text-white transition-colors">
                Ver servicios empresariales <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Historias de Éxito</h2>
            <p className="text-muted-foreground">Familias y empresarios que transformaron su futuro financiero con nosotros.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                nombre: "Jorge y María Ramirez",
                ubicacion: "Miami, FL",
                tipo: "Consultoría Personal",
                img: familiaImg,
                cita: "No sabía lo importante que era tomar esta consultoría. Antes estaba desorganizado y estaba perdiendo oportunidades. Ahora mi familia y yo estamos construyendo un futuro seguro.",
              },
              {
                nombre: "Claudia Torres",
                ubicacion: "Orlando, FL",
                tipo: "Consultoría Empresarial",
                img: businessImg,
                cita: "Tenía un negocio funcionando pero sin estructura. Encuentro Financiero me ayudó a acceder al sistema financiero y hoy tengo dos sucursales.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm"
              >
                <Quote className="h-8 w-8 text-secondary/40 mb-4" />
                <p className="text-lg text-foreground italic leading-relaxed mb-6">"{t.cita}"</p>
                <StarRating stars={5} />
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={t.img}
                    alt={t.nombre}
                    className="w-12 h-12 rounded-full object-cover border-2 border-secondary/20"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div>
                    <p className="font-bold text-primary">{t.nombre}</p>
                    <p className="text-sm text-muted-foreground">{t.tipo} — {t.ubicacion}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/casos-exito">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Ver más casos de éxito <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cómo funciona</h2>
            <p className="text-muted-foreground">Un proceso simple y transparente diseñado para tu comodidad.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { paso: "01", titulo: "Sesión Gratuita", desc: "Comenzamos con una consulta de 1 hora sin costo para entender tu situación." },
              { paso: "02", titulo: "Diagnóstico", desc: "Analizamos tu situación financiera y identificamos oportunidades de mejora." },
              { paso: "03", titulo: "Plan Personalizado", desc: "Diseñamos una estrategia a medida con metas claras y pasos concretos." },
              { paso: "04", titulo: "Seguimiento", desc: "Te acompañamos en cada etapa con revisiones periódicas y ajustes cuando sea necesario." },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">{p.paso}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{p.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CreditCard className="h-12 w-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tu primera sesión es completamente gratis.
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Sin compromisos. Sin letras pequeñas. Solo una conversación honesta sobre tu futuro financiero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                <MessageCircle className="h-6 w-6" />
                Agenda por WhatsApp
              </a>
              <Link href="/servicios-personas">
                <button className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                  Ver servicios <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
