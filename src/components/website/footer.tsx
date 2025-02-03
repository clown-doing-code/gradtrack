import Link from "next/link";
import { GraduationCap } from "lucide-react";
import MaxWidthWrapper from "../max-width-wrapper";

export default function Footer() {
  return (
    <footer className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
      <MaxWidthWrapper>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-start">
              <Link href="/" className="mb-4 flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">GradTrack</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Ayudando a los estudiantes universitarios a mantenerse en el
                camino hacia la graduación.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Producto</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm hover:text-primary">
                    Funciones
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm hover:text-primary">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm hover:text-primary">
                    Preguntas frecuentes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-primary">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-primary">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-primary">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-primary">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-primary">
                    Términos de servicio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-muted-foreground/20 pt-8">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} GradTrack. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
