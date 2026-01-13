import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        
        {/* Texto */}
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Pentest Web <span className="text-primary">Jr</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Estudante de segurança ofensiva com foco em aplicações web.
          </p>

          <p className="mt-2 text-muted-foreground">
            Prática baseada no OWASP Top 10.
          </p>

          <div className="mt-8 flex gap-4">
            <Button asChild>
              <a href="#labs">Ver Labs</a>
            </Button>

            <Button asChild variant="outline">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Visual abstrato */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent blur-2xl" />
          <div className="relative h-80 w-full rounded-2xl border border-white/10" />
        </div>

      </div>
    </section>
  );
}
