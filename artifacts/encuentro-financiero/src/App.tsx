import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ServiciosPersonas from "@/pages/servicios-personas";
import ServiciosEmpresas from "@/pages/servicios-empresas";
import Nosotros from "@/pages/nosotros";
import CasosExito from "@/pages/casos-exito";
import Blog from "@/pages/blog";
import Libros from "@/pages/libros";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicios-personas" component={ServiciosPersonas} />
      <Route path="/servicios-empresas" component={ServiciosEmpresas} />
      <Route path="/nosotros" component={Nosotros} />
      <Route path="/casos-exito" component={CasosExito} />
      <Route path="/blog" component={Blog} />
      <Route path="/libros" component={Libros} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
