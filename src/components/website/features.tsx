import { BookOpen, Calculator, TrendingUp } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Seguimiento de cursos",
    description:
      "Visualiza fácilmente los cursos completados y los pendientes.",
  },
  {
    icon: Calculator,
    title: "Conteo de créditos",
    description:
      "Monitorea los créditos obtenidos y revisa cuántos necesitas para graduarte.",
  },
  {
    icon: TrendingUp,
    title: "Progreso hacia la graduación",
    description: "Visualiza tu progreso hacia la graduación.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-muted px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Características principales
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
