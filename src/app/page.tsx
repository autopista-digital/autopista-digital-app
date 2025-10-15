import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full h-full flex items-center justify-center py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl/none">
                Evoluciona tu Negocio en la Era Digital
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                En EvolveNow Digital, convertimos los desafíos digitales en oportunidades de crecimiento.
              </p>
            </div>
            
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Ofrecemos soluciones integrales de transformación digital, desde la estrategia y consultoría hasta la implementación tecnológica y la optimización de procesos, para asegurar que tu empresa no solo sobreviva, sino que prospere en el competitivo mercado actual.
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-400">
              <Button size="lg">Contáctanos Ahora</Button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
