import { Link } from "wouter";
import { Landmark, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Landmark className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold tracking-tight">
                Encuentro Financiero
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              La firma líder en EE.UU. en consultoría financiera y empresarial que impulsa negocios y familias latinas hacia el éxito.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Servicios</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link href="/servicios-personas" className="hover:text-white transition-colors">
                  Consultoría para Personas
                </Link>
              </li>
              <li>
                <Link href="/servicios-empresas" className="hover:text-white transition-colors">
                  Consultoría para Empresas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Compañía</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/casos-exito" className="hover:text-white transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/libros" className="hover:text-white transition-colors">
                  Libros Recomendados
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Miami, FL</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(800) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contacto@encuentrofinanciero.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Encuentro Financiero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
