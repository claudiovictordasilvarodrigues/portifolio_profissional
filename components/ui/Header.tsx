import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        
        {/* Logo / Nome */}
        <span className="text-sm font-semibold tracking-wide">
          Victor Rodrigues
        </span>

        {/* Navegação */}
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#labs" className="hover:text-primary transition-colors">
            Labs
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contato
          </a>

          {/* CTA externo */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-white/10"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </nav>

      </div>
    </header>
  );
}
