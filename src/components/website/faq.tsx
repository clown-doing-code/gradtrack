import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "¿Qué es GradTrack?",
    answer:
      "GradTrack es una plataforma SaaS diseñada exclusivamente para estudiantes universitarios, que les permite monitorear su progreso académico. Ayuda a los estudiantes a rastrear cursos tomados, créditos obtenidos y créditos necesarios para graduarse.",
  },
  {
    question:
      "¿Cómo me ayuda GradTrack a mantenerme en camino a la graduación?",
    answer:
      "GradTrack proporciona una visión clara de tu trayectoria académica rastreando tus cursos completados, calculando créditos obtenidos y visualizando tu progreso hacia los requisitos de graduación.",
  },
  {
    question: "¿Es GradTrack gratuito?",
    answer:
      "GradTrack ofrece una prueba gratuita de 14 días para todos los nuevos usuarios. Después del periodo de prueba, puedes suscribirte a nuestro plan Premium por $5 al mes para seguir utilizando todas las funciones.",
  },
  {
    question: "¿Puedo sincronizar GradTrack con el sistema de mi universidad?",
    answer:
      "Actualmente, GradTrack es una plataforma independiente. Sin embargo, estamos trabajando en integraciones con varios sistemas universitarios para hacer el proceso aún más sencillo en el futuro.",
  },
  {
    question: "¿Qué tan segura está mi información académica en GradTrack?",
    answer:
      "Nos tomamos muy en serio la seguridad de los datos. Toda tu información está encriptada y almacenada de manera segura. Nunca compartimos tus datos personales con terceros.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Preguntas frecuentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
