import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Building2,
  BarChart3,
  Landmark,
  Calculator,
  Tv,
  MessageCircle,
  Tag,
} from "lucide-react";
import serviciosImg from "@/assets/images/servicios-empresas.png";

const WHATSAPP_NUMBER = "13055550123";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const PREGUNTAS = [
  "¿Tu empresa tiene claridad sobre su flujo de caja mensual?",
  "Si tus ingresos disminuyen un 30%, ¿podrías sostener la operación?",
  "Dependencia de clientes principales: baja, moderada o alta.",
  "¿Tu empresa tiene deudas activas? Tipo y monto aproximado.",
  "¿Conoces tus ganancias netas después de gastos e impuestos?",
  "¿Optimizas impuestos legalmente en EE.UU.?",
  "Acceso a líneas de crédito o financiamiento: sí, limitado o no.",
  "Aprovechamiento de productos bancarios: sí, parcialmente o no.",
  "Estrategia financiera clara para crecer: sí, parcial o no.",
  "Proyección financiera a 12 meses: crecimiento sólido, estancamiento o riesgo financiero.",
];

const SERVICIOS = [
  {
    icon: Building2,
    titulo: "Estructuración y Lanzamiento Empresarial",
    desc: "Establece bases sólidas desde el primer día.",
    puntos: [
      "Definición de estructura legal y operativa",
      "Configuración financiera inicial",
      "Bases para crecimiento escalable y sostenible",
    ],
  },
  {
    icon: BarChart3,
    titulo: "Estrategia y Crecimiento de Negocio",
    desc: "Lleva tu negocio al siguiente nivel con estrategias probadas.",
    puntos: [
      "Diagnóstico del modelo de negocio",
      "Optimización de ingresos y rentabilidad",
      "Estrategias para escalar operaciones",
      "Acompañamiento en decisiones clave",
    ],
  },
  {
    icon: Landmark,
    titulo: "Acceso al Sistema Financiero y Capital",
    desc: "Accede al financiamiento que tu empresa necesita para crecer.",
    puntos: [
      "Construcción y optimización del perfil crediticio empresarial",
      "Acceso a líneas de crédito y financiamiento",
      "Desarrollo de relaciones bancarias sólidas",
      "Organización del flujo de efectivo y educación financiera aplicada al negocio",
    ],
  },
  {
    icon: Calculator,
    titulo: "Optimización Fiscal y Estructura Financiera",
    desc: "Maximiza tu rentabilidad con una estrategia fiscal eficiente.",
    puntos: [
      "Estrategias de impuestos (Taxes)",
      "Estructuración financiera eficiente",
      "Prevención de riesgos fiscales",
      "Preparación ante auditorías",
    ],
  },
  {
    icon: Tv,
    titulo: "Llega a Miles de Clientes con Comerciales en Univision y Estrategias Digitales",
    desc: "Impulsa tu negocio con publicidad estratégica en TV y marketing digital.",
    puntos: [
      "Publicidad estratégica en TV (Univision) y marketing digital para generar clientes",
      "Diseño y optimización de páginas web enfocadas en conversión",
      "Posicionamiento en Google para captar clientes activos",
      "Estrategias de venta online",
      "Construcción de presencia digital sólida y consistente",
      "Publicidad dirigida a la comunidad latina en EE.UU.",
    ],
  },
];

const PAQUETES_EMPRESAS = [
  {
    nombre: "Primera Sesión",
    precio: "GRATIS",
    duracion: "1 hora",
    descripcion: "Sin costo. Sin compromisos.",
    puntos: [
      "Diagnóstico inicial de su empresa",
      "Identificación de oportunidades de mejora",
      "Recomendaciones de alto nivel",
    ],
    destacado: false,
    cta: "Agendar Ahora",
  },
  {
    nombre: "Paquete Básico",
    precio: "Consultar",
    duracion: "3 meses",
    descripcion: "Reunión virtual cada 2 semanas para hacer seguimiento a la estrategia durante 3 meses.",
    puntos: [
      "Seguimiento cada 2 semanas",
      "1 llamada de 1 hora por sesión",
      "Plan de acción básico",
    ],
    destacado: false,
    cta: "Consultar Precio",
  },
  {
    nombre: "Paquete Medio",
    precio: "Consultar",
    duracion: "3 meses",
    descripcion: "Reunión virtual cada semana y una reunión presencial al mes para hacer seguimiento a la estrategia durante 3 meses.",
    puntos: [
      "Seguimiento semanal virtual",
      "1 visita presencial al mes",
      "Estrategia de crecimiento personalizada",
      "Reportes mensuales de avance",
    ],
    destacado: true,
    cta: "Consultar Precio",
  },
  {
    nombre: "Paquete Completo",
    precio: "Consultar",
    duracion: "3 meses",
    descripcion: "1 Reunión virtual + 1 reunión presencial cada semana + plan de acción integral.",
    puntos: [
      "Plan de acción integral",
      "2 reuniones virtuales semanales",
      "Visita presencial semanal de 1 hora",
      "Seguimiento continuo y reportes",
    ],
    destacado: false,
    cta: "Consultar Precio",
  },
];


function PricingCard({
  p,
  showHighlight,
}: {
  p: (typeof PAQUETES_EMPRESAS)[0];
  showHighlight: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-7 flex flex-col ${
        showHighlight && p.nombre === "Paquete Medio"
          ? "bg-primary text-primary-foreground border-primary shadow-xl"
          : "bg-card border-border shadow-sm"
      }`}
    >
      {showHighlight && p.nombre === "Paquete Medio" && (
        <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">Más popular</span>
      )}
      <h3
        className={`text-lg font-bold mb-1 ${
          showHighlight && p.nombre === "Paquete Medio" ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {p.nombre}
      </h3>
      <p
        className={`text-xs mb-1 ${
          showHighlight && p.nombre === "Paquete Medio" ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}
      >
        {p.duracion}
      </p>
      <p className="text-2xl font-bold mb-2 text-secondary">{p.precio}</p>
      <p
        className={`text-xs leading-relaxed mb-5 italic ${
          showHighlight && p.nombre === "Paquete Medio" ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}
      >
        {p.descripcion}
      </p>
      <ul className="space-y-2 flex-1 mb-6">
        {p.puntos.map((punto, j) => (
          <li
            key={j}
            className={`flex items-start gap-2 text-xs ${
              showHighlight && p.nombre === "Paquete Medio" ? "text-primary-foreground/90" : ""
            }`}
          >
            <CheckCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-secondary" />
            <span>{punto}</span>
          </li>
        ))}
      </ul>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors ${
          showHighlight && p.nombre === "Paquete Medio"
            ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        {(p as any).cta || (p.precio === "GRATIS" ? "Agendar Ahora" : "Consultar Precio")}
      </a>
    </div>
  );
}

function Cuestionario() {
  const [paso, setPaso] = useState<"inicio" | "preguntas" | "contacto" | "gracias">("inicio");
  const [indexPregunta, setIndexPregunta] = useState(0);
  const [respuestas, setRespuestas] = useState<string[]>(new Array(PREGUNTAS.length).fill(""));
  const [datos, setDatos] = useState({ email: "", telefono: "" });
  const [respuestaActual, setRespuestaActual] = useState("");
  const [contacto, setContacto] = useState({ nombre: "", apellido: "", correo: "", telefono: "" });

  const handleInicio = (e: React.FormEvent) => {
    e.preventDefault();
    setPaso("preguntas");
  };

  const handleSiguiente = () => {
    const nuevas = [...respuestas];
    nuevas[indexPregunta] = respuestaActual;
    setRespuestas(nuevas);
    if (indexPregunta < PREGUNTAS.length - 1) {
      setRespuestaActual(nuevas[indexPregunta + 1] || "");
      setIndexPregunta(indexPregunta + 1);
    } else {
      setPaso("contacto");
    }
  };

  const handleAnterior = () => {
    const nuevas = [...respuestas];
    nuevas[indexPregunta] = respuestaActual;
    setRespuestas(nuevas);
    setRespuestaActual(nuevas[indexPregunta - 1] || "");
    setIndexPregunta(indexPregunta - 1);
  };

  const handleContacto = (e: React.FormEvent) => {
    e.preventDefault();
    setPaso("gracias");
  };

  if (paso === "gracias") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-2xl p-10 text-center max-w-xl mx-auto shadow-lg"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">¡Gracias por contactarnos!</h3>
        <p className="text-muted-foreground mb-8">
          Hemos recibido la información de su empresa. Un consultor especializado le contactará a la brevedad.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
        >
          <MessageCircle className="h-5 w-5" />
          Conectar a WhatsApp
        </a>
      </motion.div>
    );
  }

  if (paso === "contacto") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-card border border-border rounded-2xl p-8 max-w-xl mx-auto shadow-lg"
      >
        <h3 className="text-2xl font-bold text-primary mb-1">Déjenos sus datos</h3>
        <p className="text-secondary font-semibold mb-6">Contáctenos ya.</p>
        <form onSubmit={handleContacto} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-primary mb-1">Nombre</label>
            <input
              type="text"
              required
              value={contacto.nombre}
              onChange={(e) => setContacto({ ...contacto, nombre: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
              placeholder="María"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-1">Apellido</label>
            <input
              type="text"
              required
              value={contacto.apellido}
              onChange={(e) => setContacto({ ...contacto, apellido: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
              placeholder="Rodríguez"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-1">Correo</label>
            <input
              type="email"
              required
              value={contacto.correo}
              onChange={(e) => setContacto({ ...contacto, correo: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
              placeholder="maria@miempresa.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-1">Teléfono</label>
            <input
              type="tel"
              required
              value={contacto.telefono}
              onChange={(e) => setContacto({ ...contacto, telefono: e.target.value })}
              className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
              placeholder="+1 (786) 555-0123"
            />
          </div>
          <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-base font-bold mt-2">
            Contáctenos
          </Button>
        </form>
        <div className="mt-6 pt-6 border-t border-border text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Conectar a WhatsApp
          </a>
        </div>
      </motion.div>
    );
  }

  if (paso === "preguntas") {
    const progreso = ((indexPregunta + 1) / PREGUNTAS.length) * 100;
    return (
      <motion.div
        key={indexPregunta}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-card border border-border rounded-2xl p-8 max-w-xl mx-auto shadow-lg"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-secondary">
            Pregunta {indexPregunta + 1} de {PREGUNTAS.length}
          </span>
          <span className="text-sm text-muted-foreground">{Math.round(progreso)}% completado</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-8">
          <div className="bg-secondary h-2 rounded-full transition-all duration-500" style={{ width: `${progreso}%` }} />
        </div>
        <h3 className="text-xl font-semibold text-primary mb-6 leading-relaxed">{PREGUNTAS[indexPregunta]}</h3>
        <textarea
          value={respuestaActual}
          onChange={(e) => setRespuestaActual(e.target.value)}
          rows={4}
          className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background resize-none"
          placeholder="Escriba su respuesta aquí..."
        />
        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={handleAnterior} disabled={indexPregunta === 0} className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" /> Anterior
          </Button>
          <Button onClick={handleSiguiente} className="flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
            {indexPregunta === PREGUNTAS.length - 1 ? "Finalizar" : "Siguiente"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl p-8 max-w-xl mx-auto shadow-lg"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">Diagnóstico Empresarial</h3>
        <p className="text-muted-foreground">Ingresa tu correo y teléfono para comenzar el diagnóstico de tu empresa.</p>
      </div>
      <form onSubmit={handleInicio} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-primary mb-1">Correo electrónico</label>
          <input
            type="email"
            required
            value={datos.email}
            onChange={(e) => setDatos({ ...datos, email: e.target.value })}
            className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
            placeholder="contacto@miempresa.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary mb-1">Teléfono</label>
          <input
            type="tel"
            required
            value={datos.telefono}
            onChange={(e) => setDatos({ ...datos, telefono: e.target.value })}
            className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
            placeholder="+1 (786) 555-0123"
          />
        </div>
        <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-base font-bold">
          Iniciar Diagnóstico
        </Button>
      </form>
    </motion.div>
  );
}

export default function ServiciosEmpresas() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={serviciosImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Consultoría para Empresas</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Transforma tu negocio con estrategia, estructura y capital.
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Acompañamos a empresarios latinos en EE.UU. a estructurar, financiar y escalar sus negocios con bases sólidas y visión de largo plazo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Servicios para Empresas</h2>
            <p className="text-muted-foreground">Cinco áreas de consultoría para llevar su empresa al máximo potencial.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICIOS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <s.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{s.titulo}</h3>
                <p className="text-muted-foreground mb-5 text-sm">{s.desc}</p>
                <ul className="space-y-2">
                  {s.puntos.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COSTOS CONSULTORÍA EMPRESAS */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-3xl font-bold text-primary mb-4">Costos — Consultoría Empresas</h2>
            <p className="text-muted-foreground mb-4">Paquetes diseñados para acompañar el crecimiento de su empresa paso a paso.</p>
            {/* Descuento destacado */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 text-secondary font-bold px-6 py-3 rounded-full text-sm">
              <Tag className="h-4 w-4" />
              Descuento del 10% por pago de 3 meses
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {PAQUETES_EMPRESAS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-8 flex flex-col ${
                  p.destacado
                    ? "bg-primary text-primary-foreground border-primary shadow-xl scale-105"
                    : "bg-card border-border shadow-sm"
                }`}
              >
                {p.destacado && (
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">Más popular</span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${p.destacado ? "text-primary-foreground" : "text-primary"}`}>
                  {p.nombre}
                </h3>
                <p className={`text-sm mb-1 ${p.destacado ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.duracion}
                </p>
                <p className="text-3xl font-bold mb-3 text-secondary">{p.precio}</p>
                <p className={`text-xs leading-relaxed mb-5 italic ${p.destacado ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.descripcion}
                </p>
                <ul className="space-y-2 flex-1 mb-8">
                  {p.puntos.map((punto, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${p.destacado ? "text-primary-foreground/90" : ""}`}>
                      <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-4 rounded-lg font-semibold text-sm transition-colors ${
                    p.destacado
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {p.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-muted-foreground">Cuatro pasos simples para transformar las finanzas de su empresa con acompañamiento experto de principio a fin.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                paso: "01",
                titulo: "Sesión Gratuita de Diagnóstico",
                desc: "Analizamos su situación financiera actual, identificamos riesgos y detectamos oportunidades de crecimiento sin ningún costo.",
              },
              {
                paso: "02",
                titulo: "Plan Personalizado",
                desc: "Diseñamos una estrategia a medida para su empresa: optimización de costos, acceso a crédito, estructura fiscal y proyección a futuro.",
              },
              {
                paso: "03",
                titulo: "Implementación y Seguimiento",
                desc: "Acompañamos la ejecución del plan con reuniones periódicas, ajustes estratégicos y reportes de avance claros y medibles.",
              },
              {
                paso: "04",
                titulo: "Resultados y Crecimiento",
                desc: "Medimos los resultados reales: mayor flujo de caja, crédito optimizado, impuestos reducidos y empresa lista para escalar.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm h-full">
                  <span className="text-5xl font-black text-secondary/20 block mb-4 leading-none">{item.paso}</span>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.titulo}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-secondary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { valor: "100+", label: "Empresas asesoradas" },
              { valor: "95%", label: "Clientes satisfechos" },
              { valor: "$2M+", label: "En crédito gestionado" },
              { valor: "10+", label: "Años de experiencia" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-black text-secondary mb-1">{stat.valor}</p>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cierre */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            No dejes que problemas financieros invisibles frenen el crecimiento de tu empresa.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Agenda tu consultoría y obtén un plan personalizado para optimizar tus finanzas, proteger tus activos y acceder a nuevas oportunidades de crédito e inversión.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            <MessageCircle className="h-6 w-6" />
            Agenda tu sesión gratuita
          </a>
        </div>
      </section>

      {/* Cuestionario Pre-Consultoría Empresas */}
      <section className="py-20 bg-background" id="cuestionario">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Cuestionario Pre-Consultoría — Empresas Latinas en EE.UU.
            </h2>
            <p className="text-muted-foreground">
              Complete este diagnóstico para que nuestro equipo diseñe una estrategia completamente personalizada para su empresa.
            </p>
          </div>

          {/* Lista visible de preguntas */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h4 className="font-bold text-primary mb-6 text-lg">Preguntas del diagnóstico:</h4>
              <ol className="space-y-3">
                {PREGUNTAS.map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-6 h-6 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Formulario interactivo */}
          <Cuestionario />

          {/* Formulario de contacto y WhatsApp */}
          <div className="text-center mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-2xl transition-colors text-lg shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              Conectar a WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
