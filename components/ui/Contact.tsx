import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background/40">
      <div className="mx-auto max-w-3xl px-6 text-center">

        <h2 className="text-3xl font-bold">Contato</h2>

        <p className="mt-4 text-muted-foreground">
          Aberto a oportunidades como Pentest Web Jr e estágios em segurança.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
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
    </section>
  );
}
