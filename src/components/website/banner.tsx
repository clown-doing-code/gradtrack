import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import graduationIllustration from "@/assets/undraw_graduation_u7uc.svg";
import MaxWidthWrapper from "../max-width-wrapper";
import { Progress } from "../ui/progress";

export default function Banner() {
  return (
    <section className="px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20 ">
      <MaxWidthWrapper>
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 lg:mb-12">
            <Image
              src={graduationIllustration}
              alt="Graduación ilustración"
              width={300}
              height={200}
              className="mx-auto mb-8"
              priority
            />
          </div>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Mantente en el camino hacia la graduación
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            GradTrack ayuda a los estudiantes universitarios a monitorear su
            progreso académico, rastrear cursos y contar créditos fácilmente.
          </p>
          <Button size="lg" className="mb-12" asChild>
            <Link href="/auth/sign-up">Comienza tu prueba gratuita</Link>
          </Button>
          <div className="mx-auto max-w-md">
            <p className="mb-2 text-sm">Progreso de ejemplo:</p>
            <Progress value={75} className="h-4" />
            <p className="mt-2 text-sm">75% hacia la graduación</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
