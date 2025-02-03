import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import MaxWidthWrapper from "../max-width-wrapper";

const plans = [
  {
    name: "Prueba gratuita",
    price: "RD$0",
    duration: "mes",
    features: ["Seguimiento de cursos"],
    cta: "Comienza la prueba gratuita",
  },
  {
    name: "Pro",
    price: "RD$0",
    duration: " mes",
    features: [
      "Seguimiento de cursos",
      "Conteo de créditos",
      "Progreso de graduación",
      "Acceso ilimitado",
      "Soporte prioritario",
    ],
    cta: "Comienza ahora",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
      <MaxWidthWrapper>
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Precios simples
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {plans.map((plan, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold line-through">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      /{plan.duration}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
