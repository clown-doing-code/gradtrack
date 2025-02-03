export const routeTitles: Record<string, string> = {
  "/dashboard": "Panel Principal",
  "/dashboard/subjects": "Asignaturas",
  "/dashboard/progress": "Progreso",
};

export function getRouteTitle(pathname: string): string {
  // Primero, buscar coincidencia exacta
  if (routeTitles[pathname]) {
    return routeTitles[pathname];
  }

  // Manejar rutas dinámicas
  const dynamicRouteKey = Object.keys(routeTitles).find(
    (key) =>
      key.includes("[") &&
      new RegExp(key.replace(/\[.*?\]/g, "[^/]+") + "$").test(pathname)
  );

  if (dynamicRouteKey) {
    return routeTitles[dynamicRouteKey];
  }

  // Transformación por defecto
  return (
    pathname
      .split("/")
      .filter(Boolean)
      .pop()
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ") || "Página"
  );
}
