import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-muted text-foreground">
      <Loader className="h-8 w-8 animate-spin text-primary" />
      <h1 className="mt-4 text-xl font-semibold">Cargando...</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Esto puede tardar unos minutos.
      </p>
    </div>
  );
}
