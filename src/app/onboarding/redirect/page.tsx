"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export default function OnboardingRedirect() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("/dashboard");
    }, 2000); // Retraso de 2 segundos para mostrar el estado de carga

    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-muted text-foreground">
      <Loader className="h-8 w-8 animate-spin text-primary" />
      <h1 className="mt-4 text-xl font-semibold">Redirigiendo al Panel</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Por favor, espera mientras preparamos tu panel...
      </p>
    </div>
  );
}
