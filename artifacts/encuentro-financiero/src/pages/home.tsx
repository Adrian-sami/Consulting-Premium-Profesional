import { Layout } from "@/components/layout/Layout";
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
  PhoneCall,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import heroImg from "@/assets/images/hero.png";
import familiaImg from "@/assets/images/testimonial-family.png";
import businessImg from "@/assets/images/testimonial-business.png";
import serviciosPersonasImg from "@/assets/images/servicios-personas.png";
import serviciosEmpresasImg from "@/assets/images/servicios-empresas.png";

const WHATSAPP_NUMBER = "13055550123";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
      ))}
    </div>
  );
}

function HeroForm() {
  const [form, setForm] = useState({ nombre: "", telefono: "", servicio: "" });
  const [enviado, setEnviado] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };
  return (
    <div className="bg-primary border-l-4 border-secondary p-8 shadow-2xl">
      <h3 className="text-xl font-bold text-primary-foreground mb-1">Primera Sesión Gratis</h3>
      <p className="text-primary-foreground/60 text-sm mb-6">Sin compromisos. Agenda ahora.</p>
      {enviado ? (
        <div className="text-center py-6">
          <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-3" />
          <p className="text-primary-foreground font-semibold mb-4">¡Recibimos tu solicitud!</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold px-5 py-3 text-sm"
          >
            <MessageCircle className="h-4 w-4" /> Conectar por WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1">Nombre completo</label>
            <input
              type="text"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 text-sm focus:outline-none focus:border-secondary"
              placeholder="Juan García"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1">Teléfono</label>
            <input
              type="tel"
              required
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              className="w-full bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 px-4 py-3 text-sm focus:outline-none focus:border-secondary"
              placeholder="+1 (305) 555-0123"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1">Tipo de consultoría</label>
            <select
              required
              value={form.servicio}
              onChange={(e) => setForm({ ...form, servicio: e.target.value })}
              className="w-full bg-white/10 border border-white/20 text-primary-foreground px-4 py-3 text-sm focus:outline-none focus:border-secondary"
            >
              <option value="" className="text-foreground">Seleccionar...</option>
              <option value="personas" className="text-foreground">Para mí / mi familia</option>
              <option value="empresas" className="text-foreground">Para mi negocio</option>
              <option value="educacion" className="text-foreground">Educación Financiera para Empleados</option>
              <option value="publicaciones" className="text-foreground">Publicaciones / Ghostwriting</option>
              <option value="ambos" className="text-foreground">Ambos / Varios servicios</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-secondary-foreground font-bold py-4 text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors mt-2"
          >
            Solicitar Sesión Gratuita
          </button>
          <p className="text-center text-xs text-primary-foreground/40 pt-1">Respuesta en menos de 24 horas</p>
        </form>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* ═══════════════════════════════════
          HERO — Split: text left, form right
      ═══════════════════════════════════ */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-secondary" />
                <span className="text-secondary font-semibold text-xs uppercase tracking-widest">
                  Consultoría Financiera para la Comunidad Latina
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6">
                Tu futuro financiero,{" "}
                <span className="text-secondary">construido</span>{" "}
                con confianza y propósito.
              </h1>
              <p className="text-lg text-primary-foreground/75 mb-10 leading-relaxed max-w-lg">
                La firma consultora líder que integra a la comunidad latina al sistema financiero de EE.UU. y potencia el crecimiento de sus negocios. Primera sesión siempre gratuita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold px-8 py-4 text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agenda por WhatsApp
                </a>
                <Link href="/nosotros">
                  <button className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground font-bold px-8 py-4 text-sm uppercase tracking-wider hover:border-secondary hover:text-secondary transition-colors">
                    Conoce nuestra misión <ChevronRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
              {/* Social proof */}
              <div className="flex items-center gap-4 mt-10 pt-10 border-t border-white/10">
                <div className="flex -space-x-2">
                  {[familiaImg, businessImg, familiaImg].map((img, i) => (
                    <img key={i} src={img} alt="" className="w-10 h-10 border-2 border-primary object-cover" />
                  ))}
                </div>
                <div>
                  <StarRating stars={5} />
                  <p className="text-primary-foreground/60 text-sm mt-0.5">+500 familias y empresas asesoradas</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HeroForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS BAR — Dark, full width
      ═══════════════════════════════════ */}
      <section className="bg-secondary/10 border-y border-secondary/20 py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-secondary/20">
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
                className="text-center py-8 px-6"
              >
                <p className="text-4xl font-black text-primary">{stat.numero}</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          VALUE PROP — 3 feature cards, left-border style
      ═══════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 bg-secondary" />
                <span className="text-secondary font-semibold text-xs uppercase tracking-widest">Por qué elegirnos</span>
              </div>
              <h2 className="text-4xl font-black text-primary leading-tight">
                ¿Por qué elegir Encuentro Financiero?
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Entendemos tu cultura, hablamos tu idioma y conocemos el sistema. Te guiamos paso a paso hacia la estabilidad y el crecimiento que mereces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                numero: "01",
                titulo: "Confianza y Transparencia",
                desc: "Asesoría ética y clara. Protegemos tu patrimonio como si fuera nuestro. Sin letras pequeñas ni sorpresas.",
              },
              {
                icon: TrendingUp,
                numero: "02",
                titulo: "Crecimiento Estratégico",
                desc: "No solo resolvemos deudas, construimos riqueza generacional. Planes concretos con resultados medibles.",
              },
              {
                icon: Users,
                numero: "03",
                titulo: "Enfoque en la Comunidad",
                desc: "Diseñado específicamente para familias y empresarios latinos. Entendemos tus necesidades mejor que nadie.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group border border-border bg-card p-8 hover:border-secondary transition-colors"
              >
                <span className="text-5xl font-black text-secondary/15 block mb-6 leading-none group-hover:text-secondary/25 transition-colors">{feature.numero}</span>
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center mb-5">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.titulo}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.desc}</p>
                <div className="mt-6 w-8 h-0.5 bg-secondary" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SERVICIOS — Alternating image + text
      ═══════════════════════════════════ */}
      <section className="bg-primary/4 border-y border-border">
        {/* Personas */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch py-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <img
                src={serviciosPersonasImg}
                alt="Consultoría para personas"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-primary/30" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                  Para Personas y Familias
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background p-12 lg:p-16 flex flex-col justify-center border-l border-border"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-0.5 bg-secondary" />
                <span className="text-secondary font-semibold text-xs uppercase tracking-widest">Consultoría Personal</span>
              </div>
              <h2 className="text-3xl font-black text-primary mb-4 leading-tight">
                Para Personas y Familias
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Construye un futuro seguro. Te ayudamos a organizar tus finanzas, salir de deudas, crear crédito y proteger a los que más amas.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Optimización Financiera y Control de Deudas",
                  "Estrategias de Inversión y Protección Patrimonial",
                  "Integración al Sistema Financiero y Crédito",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/servicios-personas"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:text-secondary transition-colors group"
              >
                Ver servicios personales
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Empresas */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch py-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-0.5 bg-secondary" />
                <span className="text-secondary font-semibold text-xs uppercase tracking-widest">Consultoría Empresarial</span>
              </div>
              <h2 className="text-3xl font-black text-primary-foreground mb-4 leading-tight">
                Para Empresas y Negocios
              </h2>
              <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                Escala tu negocio con bases sólidas. Estructuración legal, flujo de caja, acceso a capital y estrategias fiscales.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Estructuración y Lanzamiento Empresarial",
                  "Estrategia y Crecimiento de Negocio",
                  "Optimización Fiscal y Acceso a Capital",
                  "Comerciales en Univision y Marketing Digital",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/servicios-empresas"
                className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-wider hover:text-white transition-colors group"
              >
                Ver servicios empresariales
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden order-1 lg:order-2"
            >
              <img
                src={serviciosEmpresasImg}
                alt="Consultoría para empresas"
                className="w-full h-full object-cover min-h-[400px] opacity-50"
              />
              <div className="absolute bottom-6 right-6">
                <span className="bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                  Para Empresas y Negocios
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PROCESO — Steps horizontal
      ═══════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-0.5 bg-secondary" />
              <span className="text-secondary font-semibold text-xs uppercase tracking-widest">Cómo Funciona</span>
              <div className="w-6 h-0.5 bg-secondary" />
            </div>
            <h2 className="text-4xl font-black text-primary">Un proceso simple y transparente</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-0">
            {[
              { paso: "01", titulo: "Sesión Gratuita", desc: "Comenzamos con una consulta de 1 hora sin costo para entender tu situación." },
              { paso: "02", titulo: "Diagnóstico", desc: "Analizamos tu situación e identificamos oportunidades de mejora inmediata." },
              { paso: "03", titulo: "Plan Personalizado", desc: "Diseñamos una estrategia a medida con metas claras y pasos concretos." },
              { paso: "04", titulo: "Seguimiento", desc: "Te acompañamos en cada etapa con revisiones periódicas y ajustes continuos." },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`p-8 border border-border relative ${i % 2 === 0 ? "bg-background" : "bg-primary/4"}`}
              >
                <span className="text-6xl font-black text-secondary/20 block mb-5 leading-none">{p.paso}</span>
                <h3 className="text-lg font-bold text-primary mb-3">{p.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 bg-secondary w-6 h-6 items-center justify-center">
                    <ChevronRight className="h-3 w-3 text-secondary-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TESTIMONIOS
      ═══════════════════════════════════ */}
      <section className="py-24 bg-primary/4 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 bg-secondary" />
                <span className="text-secondary font-semibold text-xs uppercase tracking-widest">Testimonios</span>
              </div>
              <h2 className="text-4xl font-black text-primary leading-tight">
                Historias de Éxito
              </h2>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Familias y empresarios que transformaron su futuro financiero con nosotros.
              </p>
              <Link href="/casos-exito">
                <button className="shrink-0 inline-flex items-center gap-2 border border-primary text-primary font-bold text-xs uppercase tracking-wider px-5 py-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                  Ver más <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                className="bg-card border border-border p-8 border-t-4 border-t-secondary hover:shadow-lg transition-shadow"
              >
                <Quote className="h-10 w-10 text-secondary/30 mb-5" />
                <p className="text-lg text-foreground italic leading-relaxed mb-6">"{t.cita}"</p>
                <StarRating stars={5} />
                <div className="flex items-center gap-4 mt-5 pt-5 border-t border-border">
                  <img
                    src={t.img}
                    alt={t.nombre}
                    className="w-14 h-14 object-cover border-2 border-secondary/30"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div>
                    <p className="font-bold text-primary">{t.nombre}</p>
                    <p className="text-sm text-secondary font-medium">{t.tipo}</p>
                    <p className="text-xs text-muted-foreground">{t.ubicacion}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA FINAL — Dark, centered
      ═══════════════════════════════════ */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-secondary" />
              <span className="text-secondary font-semibold text-xs uppercase tracking-widest">Sin compromisos</span>
              <div className="w-8 h-0.5 bg-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Tu primera sesión es completamente <span className="text-secondary">gratis.</span>
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-12 leading-relaxed">
              Sin letras pequeñas. Solo una conversación honesta sobre tu futuro financiero y el de tu familia o negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold px-10 py-5 text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Agenda por WhatsApp
              </a>
              <Link href="/servicios-personas">
                <button className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground font-bold px-10 py-5 text-sm uppercase tracking-wider hover:border-secondary hover:text-secondary transition-colors">
                  Ver servicios <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
