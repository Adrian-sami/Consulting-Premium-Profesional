import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Star, MessageCircle } from "lucide-react";
import team1 from "@/assets/images/team-1.png";
import team2 from "@/assets/images/team-2.png";
import team3 from "@/assets/images/team-3.png";

const WHATSAPP_NUMBER = "13055550123";

const TEAM = [
  {
    nombre: "Carlos Mendoza",
    cargo: "Director de Consultoría Financiera",
    bio: "Con más de 15 años de experiencia en planificación financiera personal y corporativa en EE.UU., Carlos ha ayudado a más de 500 familias latinas a alcanzar la estabilidad económica y construir patrimonio generacional.",
    img: team1,
  },
  {
    nombre: "Ana Patricia Herrera",
    cargo: "Directora de Consultoría Empresarial",
    bio: "Especialista en estructuración empresarial y acceso a capital para negocios latinos en EE.UU. Ana ha guiado a más de 200 empresas desde su lanzamiento hasta alcanzar crecimiento sostenible.",
    img: team2,
  },
  {
    nombre: "Roberto Castillo",
    cargo: "Especialista en Crédito y Banca",
    bio: "Experto en estrategias crediticias y relaciones bancarias, Roberto ha ayudado a cientos de familias y empresas latinas a construir perfiles financieros sólidos y acceder a líneas de crédito favorables.",
    img: team3,
  },
];

const VALORES = [
  {
    icon: Heart,
    titulo: "Compromiso con la Comunidad",
    desc: "Creemos profundamente en el potencial de la comunidad latina. Nuestro trabajo es más que consultoría — es servir a nuestra gente con honestidad y dedicación.",
  },
  {
    icon: Star,
    titulo: "Excelencia e Integridad",
    desc: "Cada asesoría se entrega con el más alto estándar profesional. Actuamos con transparencia y ética en cada interacción con nuestros clientes.",
  },
  {
    icon: Target,
    titulo: "Resultados Medibles",
    desc: "No prometemos lo imposible — entregamos planes concretos con metas claras y seguimiento continuo para que veas el progreso en cada etapa.",
  },
];

export default function Nosotros() {
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
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">Sobre Nosotros</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Más que consultores. Somos aliados de la comunidad latina.
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Nacimos para eliminar las barreras financieras que frenan el progreso de familias y empresarios latinos en los Estados Unidos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Nuestra Misión</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Proporcionar consultorías financieras y empresariales integrales que permitan a nuestros clientes, especialmente la comunidad latina, integrarse al sistema financiero de EE.UU., optimizar sus estructuras empresariales y personales, acceder a financiamiento estratégico, maximizar rentabilidad y crecimiento sostenible, y fortalecer su presencia digital.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-2xl p-10 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold">Nuestra Visión</h2>
              </div>
              <p className="text-primary-foreground/85 leading-relaxed text-lg">
                Ser la firma líder en EE.UU. en consultoría financiera y empresarial que impulsa negocios y familias latinas hacia el éxito. Un futuro donde la comunidad latina lidera el crecimiento económico de este país, con herramientas, conocimiento y acompañamiento de clase mundial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground">Los principios que guían cada consultoría y cada relación con nuestros clientes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {VALORES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <v.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{v.titulo}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestro Equipo</h2>
            <p className="text-muted-foreground">Profesionales comprometidos con el éxito financiero de la comunidad latina.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden bg-primary/10">
                  <img
                    src={m.img}
                    alt={m.nombre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{m.nombre}</h3>
                  <p className="text-secondary font-medium text-sm mb-4">{m.cargo}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/10 border-t border-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary mb-3">Estamos listos para acompañarle</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Su futuro financiero comienza con una conversación. La primera sesión es siempre gratuita.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            <MessageCircle className="h-6 w-6" />
            Hablar con un consultor
          </a>
        </div>
      </section>
    </Layout>
  );
}
