import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, CheckCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "13055550123";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function ContactModal({ onClose }: { onClose: () => void }) {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    tipo: "",
    ayuda: "",
    objetivo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-background rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-border"
      >
        {/* Header */}
        <div className="bg-primary px-8 py-6 rounded-t-2xl flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary-foreground">Primera Sesión Gratis</h2>
            <p className="text-primary-foreground/70 text-sm mt-1">
              Déjenos sus datos y le contactamos para agendar su sesión sin costo.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors ml-4 mt-1"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-8 py-8">
          {enviado ? (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">¡Mensaje recibido!</h3>
              <p className="text-muted-foreground mb-8 text-sm">
                Gracias por contactarnos. Un consultor se pondrá en contacto con usted muy pronto para confirmar su sesión gratuita.
              </p>
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
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1">Nombre *</label>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-1">Apellido *</label>
                  <input
                    type="text"
                    required
                    value={form.apellido}
                    onChange={(e) => setForm({ ...form, apellido: e.target.value })}
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                    placeholder="García"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">Correo electrónico *</label>
                <input
                  type="email"
                  required
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">Teléfono *</label>
                <input
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                  placeholder="+1 (305) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">¿Para quién es la consultoría? *</label>
                <select
                  required
                  value={form.tipo}
                  onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background"
                >
                  <option value="">Seleccione una opción...</option>
                  <option value="personas">Para mí / mi familia (Personas)</option>
                  <option value="empresas">Para mi negocio (Empresas)</option>
                  <option value="ambos">Ambos</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">¿Cómo podemos ayudarle?</label>
                <textarea
                  value={form.ayuda}
                  onChange={(e) => setForm({ ...form, ayuda: e.target.value })}
                  rows={3}
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background resize-none"
                  placeholder="Cuéntenos brevemente su situación actual..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-1">¿Qué desea lograr?</label>
                <textarea
                  value={form.objetivo}
                  onChange={(e) => setForm({ ...form, objetivo: e.target.value })}
                  rows={3}
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-background resize-none"
                  placeholder="Sus metas financieras o empresariales..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-base font-bold"
              >
                Solicitar Mi Sesión Gratuita
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Su información es confidencial. Nos pondremos en contacto dentro de las próximas 24 horas.
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/servicios-personas", label: "Servicios para Personas" },
    { href: "/servicios-empresas", label: "Servicios para Empresas" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/casos-exito", label: "Casos de Éxito" },
    { href: "/blog", label: "Blog" },
    { href: "/libros", label: "Libros" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                {/* Brand Isotipo */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <rect width="36" height="36" fill="hsl(225,85%,13%)" />
                  <polygon points="6,30 18,6 30,30" fill="hsl(21,99%,48%)" opacity="0.9" />
                  <polygon points="6,30 18,14 30,30" fill="hsl(138,64%,44%)" opacity="0.7" />
                  <rect x="6" y="28" width="24" height="2" fill="hsl(21,99%,48%)" />
                </svg>
                {/* Brand Name */}
                <div className="flex flex-col leading-none">
                  <span className="font-black text-primary tracking-[0.12em] uppercase text-sm" style={{ fontFamily: "'Fahkwang', sans-serif" }}>
                    Encuentro
                  </span>
                  <span className="font-light text-secondary tracking-[0.15em] uppercase text-sm" style={{ fontFamily: "'Fahkwang', sans-serif" }}>
                    Financiero
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    location === link.href ? "text-secondary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="ml-4 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={() => setModalOpen(true)}
              >
                Primera Sesión Gratis
              </Button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="space-y-1 px-4 pb-4 pt-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    location === link.href
                      ? "bg-secondary/10 text-secondary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  onClick={() => { setIsOpen(false); setModalOpen(true); }}
                >
                  Primera Sesión Gratis
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
