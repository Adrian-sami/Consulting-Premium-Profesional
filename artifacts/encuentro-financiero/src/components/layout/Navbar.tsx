import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Landmark } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Landmark className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold tracking-tight text-primary">
                Encuentro Financiero
              </span>
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
            <Button className="ml-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
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
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Primera Sesión Gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
