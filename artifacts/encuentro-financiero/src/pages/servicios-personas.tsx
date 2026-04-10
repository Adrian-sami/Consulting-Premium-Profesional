import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  Shield,
  CreditCard,
  MessageCircle,
  Play,
  Quote,
} from "lucide-react";
import serviciosImg from "@/assets/images/servicios-personas.png";
import familiaImg from "@/assets/images/testimonial-family.png";

const WHATSAPP_NUMBER = "13055550123";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const PREGUNTAS = [
  "Si dejaras de recibir tu ingreso principal, ¿cuántos meses cubrirías tus gastos básicos?",
  "¿Cuánto pagas mensualmente en deudas (tarjetas, préstamos, hipoteca)?",
  "¿Cuánto corresponde solo a intereses?",
  "¿Se podrían mejorar esas condiciones?",
  "Si llegaras a faltar o quedar incapacitado, ¿tu familia tendría acceso inmediato a cuentas, inversiones o propiedades?",
  "¿Existe algún documento legal que respalde ese acceso?",
  "¿Conoces tu score o perfil crediticio actual?",
  "¿Cómo gestionas actualmente tus impuestos (Taxes)?",
  "¿Qué objetivos financieros deseas lograr en los próximos 3 a 5 años?",
  "¿Sientes que tu situación actual te acerca o aleja de esos objetivos?",
];

const SERVICIOS = [
  {
    icon: TrendingUp,
    titulo: "Optimización Financiera y Control de Deudas",
    desc: "Diseño de presupuestos personalizados para mejorar tu salud financiera.",
    puntos: [
      "Organización de ingresos y gastos",
      "Reducción y eliminación de deudas",
      "Establecimiento de bases sólidas para estabilidad económica",
    ],
    nota: "Los paquetes más largos incluyen revisión mensual de avances, ajuste de presupuestos y reportes de progreso.",
  },
  {
    icon: Shield,
    titulo: "Estrategias de Inversión y Protección Patrimonial",
    desc: "Asesoría integral para el crecimiento y resguardo de tu patrimonio.",
    puntos: [
      "Desarrollo de inversiones estratégicas alineadas a tus objetivos",
      "Orientación en documentación financiera",
      "Diversificación y protección de activos",
    ],
    nota: "",
  },
  {
    icon: CreditCard,
    titulo: "Integración al Sistema Financiero y Desarrollo Crediticio",
    desc: "Acompañamiento para fortalecer tu relación con el sistema financiero.",
    puntos: [
      "Construcción y reconstrucción de crédito",
      "Acceso a líneas de crédito y selección de productos bancarios",
      "Educación financiera familiar y orientación básica en temas fiscales (taxes)",
    ],
    nota: "",
  },
];

const PAQUETES = [
  {
    nombre: "Primera Sesión",
    precio: "GRATIS",
    duracion: "1 hora",
    descripcion: "Sin costo. Sin compromisos.",
    puntos: [
      "Evaluación inicial de tu situación financiera",
      "Identificación de oportunidades de mejora",
      "Recomendaciones personalizadas",
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
      "1 llamada de 1 hora cada 2 semanas",
      "Seguimiento de avances continuo",
      "Plan de acción personalizado",
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
      "1 visita presencial de 1 hora al mes",
      "3 videollamadas de seguimiento al mes",
      "Revisión mensual de presupuesto",
      "Reporte de progreso",
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
      "Plan de acción integral personalizado",
      "2 llamadas semanales de seguimiento",
      "Visita presencial semanal de 1 hora",
      "Reportes continuos de avance",
    ],
    destacado: false,
    cta: "Consultar Precio",
  },
];

function VideoTestimonial() {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary max-w-3xl mx-auto"
    >
      {/* Video thumbnail / placeholder */}
      <div className="relative aspect-video bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden">
        <img
          src={familiaImg}
          alt="Testimonio familiar"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

        {/* Play button overlay */}
        {!playing && (
          <button
            onClick={() => setPlaying(true)}
            className="relative z-10 w-20 h-20 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110"
          >
            <Play className="h-8 w-8 text-secondary-foreground ml-1" />
          </button>
        )}

        {/* Quote overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <Quote className="h-6 w-6 text-secondary mb-3" />
          <p className="text-white text-lg font-medium leading-relaxed italic">
            "No sabía lo importante que era tomar esta consultoría. Antes estaba desorganizado y estaba perdiendo oportunidades. Ahora con este programa mi familia y yo estamos garantizando y construyendo un futuro seguro."
          </p>
          <p className="text-secondary font-semibold mt-3 text-sm">— Familia Ramírez, Miami FL</p>
        </div>
      </div>

      {/* Testimonial detail bar */}
      <div className="bg-primary/95 px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
        <div>
          <p className="text-white font-semibold">Testimonio real de uno de nuestros clientes</p>
          <p className="text-primary-foreground/60 text-sm mt-0.5">Familia con hijos — Consultoría Personal</p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm shrink-0"
        >
          <MessageCircle className="h-4 w-4" />
          Quiero esto para mi familia
        </a>
      </div>
    </motion.div>
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
          Hemos recibido tus datos. Un consultor de Encuentro Financiero se pondrá en contacto contigo muy pronto para tu sesión gratuita.
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
              placeholder="Juan"
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
              placeholder="García"
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
              placeholder="juan@ejemplo.com"
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
              placeholder="+1 (305) 555-0123"
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
          <div
            className="bg-secondary h-2 rounded-full transition-all duration-500"
            style={{ width: `${progreso}%` }}
          />
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
          <Button
            variant="outline"
            onClick={handleAnterior}
            disabled={indexPregunta === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" /> Anterior
          </Button>
          <Button
            onClick={handleSiguiente}
            className="flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            {indexPregunta === PREGUNTAS.length - 1 ? "Finalizar" : "Siguiente"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    );
  }

  // inicio
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl p-8 max-w-xl mx-auto shadow-lg"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">Cuestionario Pre-Consultoría</h3>
        <p className="text-muted-foreground">
          Ingresa tu correo y teléfono para comenzar. Estas preguntas nos ayudan a preparar la mejor estrategia para ti.
        </p>
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
            placeholder="juan@ejemplo.com"
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
            placeholder="+1 (305) 555-0123"
          />
        </div>
        <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-base font-bold">
          Comenzar Cuestionario
        </Button>
      </form>
    </motion.div>
  );
}

export default function ServiciosPersonas() {
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
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Consultoría para Personas</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Construye el futuro financiero que tu familia merece.
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Programas diseñados para integrar a la comunidad latina al sistema financiero de EE.UU., salir de deudas y construir patrimonio generacional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ¿Para quién es? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">¿Para quién es esta consultoría?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Diseñada para personas como tú</h2>
            <p className="text-muted-foreground">Si alguna de estas situaciones te representa, estás en el lugar correcto.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { titulo: "Nuevos en EE.UU.", desc: "Personas que acaban de llegar a los Estados Unidos y quieren integrarse al sistema financiero americano desde cero." },
              { titulo: "Con deudas acumuladas", desc: "Familias con tarjetas de crédito, préstamos o deudas que sienten que no avanzan a pesar de trabajar duro." },
              { titulo: "Sin historial crediticio", desc: "Personas sin crédito o con crédito dañado que necesitan reconstruir su perfil para acceder a oportunidades." },
              { titulo: "Con metas de vivienda", desc: "Quienes sueñan con comprar su primera casa en EE.UU. y necesitan preparar su situación financiera para lograrlo." },
              { titulo: "Sin plan de ahorro", desc: "Personas que ganan bien pero no logran ahorrar, y quieren crear un plan claro para su futuro y el de su familia." },
              { titulo: "Buscando estabilidad", desc: "Familias que quieren proteger lo que han construido con esfuerzo y garantizar un futuro seguro para sus hijos." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-l-4 border-secondary bg-secondary/5 p-6 rounded-r-xl"
              >
                <h3 className="font-bold text-primary mb-2">{item.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas que resolvemos */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Problemas que resolvemos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">¿Te identificas con alguno de estos?</h2>
            <p className="text-primary-foreground/70">Estos son los desafíos más comunes que enfrentan nuestros clientes — y que resolvemos juntos.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              "Vivo en EE.UU. hace años pero no entiendo cómo funciona el sistema financiero aquí.",
              "Tengo deudas que siguen creciendo y no sé cómo salir de ese ciclo.",
              "Mi crédito está dañado o nunca lo he construido y no puedo acceder a préstamos o hipotecas.",
              "No tengo ahorros y no sé cómo empezar — cada mes el dinero se va sin saber a dónde.",
              "No tengo un plan para proteger a mi familia si me pasa algo.",
              "Pago demasiado en impuestos y no sé si estoy aprovechando todas las deducciones legales.",
              "Quiero invertir pero no sé por dónde empezar ni en qué confiar.",
              "Mis hijos son ciudadanos americanos pero no sé cómo planificar su futuro financiero.",
            ].map((problema, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-secondary-foreground" />
                </div>
                <p className="text-primary-foreground/90 text-sm leading-relaxed">{problema}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIAL */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-muted-foreground">Historias reales de familias latinas que transformaron su futuro financiero.</p>
          </div>
          <VideoTestimonial />
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Servicios para Personas</h2>
            <p className="text-muted-foreground">Tres áreas de consultoría diseñadas para transformar tu vida financiera de manera integral.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICIOS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <s.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{s.titulo}</h3>
                <p className="text-muted-foreground mb-5 text-sm">{s.desc}</p>
                <ul className="space-y-2 mb-4">
                  {s.puntos.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {s.nota && (
                  <p className="text-xs text-muted-foreground italic border-t border-border pt-3 mt-3">{s.nota}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Costos — Consultoría Personas</h2>
            <p className="text-muted-foreground">Elige el plan que mejor se adapte a tus necesidades. Siempre comenzamos con una sesión completamente gratuita.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAQUETES.map((p, i) => (
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

      {/* Cuestionario Pre-Consultoría */}
      <section className="py-20 bg-primary/5" id="cuestionario">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Cuestionario Pre-Consultoría — Personas</h2>
            <p className="text-muted-foreground">
              Responde estas preguntas para que nuestro equipo pueda preparar una consultoría completamente personalizada para ti y tu familia.
            </p>
          </div>

          {/* Las preguntas listadas visualmente */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h4 className="font-bold text-primary mb-6 text-lg">Preguntas del cuestionario:</h4>
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

          {/* WhatsApp después del cuestionario */}
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
