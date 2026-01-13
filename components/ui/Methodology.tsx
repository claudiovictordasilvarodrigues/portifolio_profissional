import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const steps = [
  {
    title: "Reconhecimento",
    description:
      "Análise inicial da aplicação, entendimento de funcionalidades e superfícies de ataque.",
  },
  {
    title: "Mapeamento",
    description:
      "Identificação de endpoints, parâmetros e fluxos relevantes para testes.",
  },
  {
    title: "Testes Manuais",
    description:
      "Execução de testes focados em vulnerabilidades comuns do OWASP Top 10.",
  },
  {
    title: "Documentação",
    description:
      "Registro dos achados, impacto e possíveis formas de mitigação.",
  },
];

export default function Methodology() {
  return (
    <section className="py-24 bg-background/40">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-3xl font-bold">Metodologia</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Abordagem básica e organizada para testes de segurança em aplicações web.
        </p>

        <Separator className="my-8 bg-white/10" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card
              key={step.title}
              className="border-white/10 bg-background/60"
            >
              <CardHeader>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
