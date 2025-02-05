import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const isOnboardingRoute = createRouteMatcher(["/onboarding"]);
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const userId = (await auth()).userId;

  if (userId) {
    // Verificar si el usuario ya completó el onboarding
    const hasCompleted = await convex.query(
      api.onboarding.hasCompletedOnboarding,
      { userId },
    );

    // Redirigir si el usuario ya completó el onboarding y está intentando acceder a /onboarding
    if (hasCompleted && isOnboardingRoute(req)) {
      return Response.redirect(new URL("/onboarding/redirect", req.url));
    }

    // Redirigir si el usuario no ha completado el onboarding y está intentando acceder a una ruta protegida
    if (!hasCompleted && isProtectedRoute(req)) {
      return Response.redirect(new URL("/onboarding", req.url));
    }
  }

  // Proteger rutas protegidas
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
