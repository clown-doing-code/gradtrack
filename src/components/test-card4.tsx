import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  GraduationCap,
  Calendar,
  MapPin,
  Users,
  Globe,
} from "lucide-react";
import { Button } from "./ui/button";

export default function TestCard4() {
  const universityInfo = {
    name: "Universidad de San Carlos de Guatemala",
    ubicacion: "Ciudad de Guatemala",
    fundacion: 1676,
    estudiantes: "120,000",
    informacion:
      "Universidad pública más grande de Guatemala y Centroamérica. Fundada en 1676. Cuenta con 23 facultades y 35 centros de investigación.",
    facultades: [
      {
        nombre: "Facultad de Humanidades",
        carreras: [
          {
            nombre: "Licenciatura en Lenguas Modernas",
            duracion: "5 años",
            total_creditos: 200,
          },
        ],
      },
    ],
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Informaciones Generales</CardTitle>
        <p className="text-sm text-muted-foreground">
          Información institucional y de carrera
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Universidad Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Información Institucional</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{universityInfo.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{universityInfo.ubicacion}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  Fundada en {universityInfo.fundacion}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  {universityInfo.estudiantes} estudiantes aproximadamente
                </span>
              </div>
            </div>
          </div>

          {/* Carrera Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Información de Carrera</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  {universityInfo.facultades[0].carreras[0].nombre}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  {universityInfo.facultades[0].nombre}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  Duración: {universityInfo.facultades[0].carreras[0].duracion}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  Total de créditos:{" "}
                  {universityInfo.facultades[0].carreras[0].total_creditos}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Información Adicional</h3>
          <p className="text-sm">{universityInfo.informacion}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="btn btn-primary">
          <Globe className="h-4 w-4 " />
          Ir al sitio web
        </Button>
      </CardFooter>
    </Card>
  );
}
