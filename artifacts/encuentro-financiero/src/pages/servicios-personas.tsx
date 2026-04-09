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
  Phone,
} from "lucide-react";
import serviciosImg from "@/assets/images/servicios-personas.png";

const WHATSAPP_NUMBER = "13055550123";

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
      "Educación financiera familiar y orientación básica en taxes",
    ],
    nota: "",
  },
];

const PAQUETES = [
  {
    nombre: "Primera Sesión",
    precio: "Gratis",
    duracion: "1 hora",
    puntos: ["Evaluación inicial de tu situación financiera", "Identificación de oportunidades", "Recomendaciones personalizadas"],
    destacado: false,
  },
  {
    nombre: "Paquete Básico",
    precio: "Consultar",
    duracion: "3 meses",
    puntos: ["1 llamada de 1 hora cada 2 semanas", "Seguimiento de avances", "Plan de acción inicial"],
    destacado: false,
  },
  {
    nombre: "Paquete Medio",
    precio: "Consultar",
    duracion: "3 meses",
    puntos: [
      "1 visita presencial de 1 hora al mes",
      "3 videollamadas mensuales de seguimiento",
      "Revisión mensual de presupuesto",
      "Reporte de progreso",
    ],
    destacado: true,
  },
  {
    nombre: "Paquete Completo",
    precio: "Consultar",
    duracion: "3 meses",
    puntos: [
      "Plan de acción integral personalizado",
      "2 llamadas semanales",
      "Visita semanal de 1 hora",
      "Seguimiento continuo y reportes",
    ],
    destacado: false,
  },
];

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
    setRespuestaActual(nuevas[indexPregunta + 1] || "");
    if (indexPregunta < PREGUNTAS.length - 1) {
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
          Hemos recibido tus datos. Un consultor de Encuentro Financiero se pondrá en contacto contigo muy pronto.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          Conectar por WhatsApp
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
        <h3 className="text-2xl font-bold text-primary mb-2">Déjenos sus datos</h3>
        <p className="text-muted-foreground mb-6">Contáctenos ya, con gusto le atenderemos.</p>
        <form onSubmit={handleContacto} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-1">Nombre</label>
              <input
                type="text"
                required
                value={contacto.nombre}
                onChange={(e) => setContacto({ ...contacto, nombre: e.target.value })}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                placeholder="Juan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1">Apellido</label>
              <input
                type="text"
                required
                value={contacto.apellido}
                onChange={(e) => setContacto({ ...contacto, apellido: e.target.value })}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                placeholder="García"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">Correo</label>
            <input
              type="email"
              required
              value={contacto.correo}
              onChange={(e) => setContacto({ ...contacto, correo: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
              placeholder="juan@ejemplo.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">Teléfono</label>
            <input
              type="tel"
              required
              value={contacto.telefono}
              onChange={(e) => setContacto({ ...contacto, telefono: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
              placeholder="+1 (305) 555-0123"
            />
          </div>
          <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-2">
            Contáctenos
          </Button>
        </form>
        <div className="mt-6 pt-6 border-t border-border text-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            También puede contactarnos por WhatsApp
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
        exit={{ opacity: 0, x: -40 }}
        className="bg-card border border-border rounded-2xl p-8 max-w-xl mx-auto shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-secondary">
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
        <h3 className="text-xl font-semibold text-primary mb-6">{PREGUNTAS[indexPregunta]}</h3>
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl p-8 max-w-xl mx-auto shadow-lg"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">Cuestionario Pre-Consultoría</h3>
        <p className="text-muted-foreground">
          Estas preguntas nos ayudan a entender tu situación y preparar la mejor estrategia para ti.
          La primera sesión es completamente gratuita.
        </p>
      </div>
      <form onSubmit={handleInicio} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Correo electrónico</label>
          <input
            type="email"
            required
            value={datos.email}
            onChange={(e) => setDatos({ ...datos, email: e.target.value })}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
            placeholder="juan@ejemplo.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Teléfono</label>
          <input
            type="tel"
            required
            value={datos.telefono}
            onChange={(e) => setDatos({ ...datos, telefono: e.target.value })}
            className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
            placeholder="+1 (305) 555-0123"
          />
        </div>
        <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-2">
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
        <div className="absolute inset-0 opacity-15">
          <img src={serviciosImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Consultoría Personal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Construye el futuro financiero que tu familia merece.
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Programas diseñados para integrar a la comunidad latina al sistema financiero de EE.UU., salir de deudas y construir patrimonio generacional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Paquetes y Precios</h2>
            <p className="text-muted-foreground">Elige el plan que mejor se adapte a tus necesidades. Siempre comenzamos con una sesión gratuita.</p>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-4">Más popular</span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${p.destacado ? "text-primary-foreground" : "text-primary"}`}>
                  {p.nombre}
                </h3>
                <p className={`text-sm mb-4 ${p.destacado ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.duracion}
                </p>
                <p className={`text-3xl font-bold mb-6 ${p.destacado ? "text-secondary" : "text-secondary"}`}>
                  {p.precio}
                </p>
                <ul className="space-y-2 flex-1 mb-8">
                  {p.puntos.map((punto, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${p.destacado ? "text-primary-foreground/90" : ""}`}>
                      <CheckCircle className={`h-4 w-4 mt-0.5 shrink-0 ${p.destacado ? "text-secondary" : "text-secondary"}`} />
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-4 rounded-lg font-semibold text-sm transition-colors ${
                    p.destacado
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {p.precio === "Gratis" ? "Agendar Ahora" : "Consultar Precio"}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuestionario */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Cuestionario Pre-Consultoría</h2>
            <p className="text-muted-foreground">
              Responde estas preguntas para que nuestro equipo pueda preparar una consultoría personalizada para ti.
            </p>
          </div>
          <Cuestionario />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="container mx-auto px-4 text-center">
          <Phone className="h-10 w-10 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-3">¿Prefiere hablar con nosotros directamente?</h3>
          <p className="text-muted-foreground mb-6">Nuestro equipo está listo para atenderle por WhatsApp.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            <MessageCircle className="h-6 w-6" />
            Conectar por WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
