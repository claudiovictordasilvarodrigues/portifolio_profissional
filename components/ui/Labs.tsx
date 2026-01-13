import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const labs = [
  {
    title: "XSS Refletido",
    environment: "DVWA",
    vulnerabilities: ["XSS"],
    description:
      "Identificação e exploração de XSS refletido, análise de impacto e entendimento de mitigação.",
    link: "https://github.com/",
  },
  {
    title: "SQL Injection Básico",
    environment: "PortSwigger Lab",
    vulnerabilities: ["SQLi"],
    description:
      "Exploração de SQL Injection simples para bypass de autenticação.",
    link: "https://github.com/",
  },
  {
    title: "IDOR",
    environment: "Lab próprio",
    vulnerabilities: ["IDOR", "Auth"],
    description:
      "Análise de controle de acesso e exploração de IDOR em aplicação simulada.",
    link: "https://github.com/",
  },
];

export default function Labs() {
  return (
    <section id="labs" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        
        <h2 className="text-3xl font-bold">Labs</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Estudos práticos em ambientes controlados focados em vulnerabilidades
          web comuns.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <Card
              key={lab.title}
              className="border-white/10 bg-background/60"
            >
              <CardHeader>
                <CardTitle>{lab.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {lab.environment}
                </p>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {lab.vulnerabilities.map((vuln) => (
                    <Badge key={vuln} variant="secondary">
                      {vuln}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground">
                  {lab.description}
                </p>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-auto w-fit"
                >
                  <a
                    href={lab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver detalhes
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
