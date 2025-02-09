"use client";

import { useQuery } from "convex/react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "../../../../convex/_generated/api";
import { GlareCard } from "@/components/ui/glare-card";
import { Avatar } from "@/components/ui/avatar";
import {
  QrCode,
  GraduationCap,
  BookOpen,
  MapPin,
  Calendar,
  User,
} from "lucide-react";

export default function ProfileDialog() {
  const { user } = useUser();
  const { userId } = useAuth();
  const onboardingData = useQuery(api.onboarding.getUserOnboardingData, {
    userId: userId || "skip",
  });

  return (
    <GlareCard className="flex flex-col items-center justify-center p-6">
      {!onboardingData ? (
        <div className="p-6">
          <Skeleton className="mb-4 h-8 w-1/2" />
          <Skeleton className="mb-2 h-4 w-full" />
          <Skeleton className="mb-2 h-4 w-full" />
        </div>
      ) : (
        <div>
          <div className="mb-4 flex items-center justify-between border-b border-slate-700 pb-4">
            <Avatar className="h-16 w-16">
              <img
                src="https://uasd.edu.do/wp-content/themes/pagina/img/logo_uasd.svg"
                alt="University Logo"
                className="h-full w-full"
              />
            </Avatar>
            <div className="text-right">
              <h2 className="text-base font-bold text-white">
                {onboardingData.university?.name}
              </h2>
              <p className="text-sm text-slate-400">
                Identificación Estudiantil
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-6">
            <Avatar className="h-16 w-16 rounded-full border-4 border-slate-700">
              <div className="flex h-full w-full items-center justify-center bg-slate-800 text-5xl font-bold text-white">
                {userId?.charAt(0)}
              </div>
            </Avatar>
            <div className="flex-1">
              <h3 className="flex items-center gap-2 text-xl font-medium text-white">
                <User className="h-5 w-5" /> {user?.fullName}
              </h3>
              <div className="mt-2 space-y-2 text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400">Facultad:</span>{" "}
                  {onboardingData.faculty?.name}
                </p>
                <p className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400">Carrera:</span>{" "}
                  {onboardingData.career?.name}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400">Ciudad:</span>{" "}
                  {onboardingData.city?.name}
                </p>
              </div>
            </div>
          </div>

          <div className="my-4 border-t border-slate-700"></div>

          <div className="flex items-end justify-between">
            <div className="text-sm text-slate-400">
              <p className="mb-1 flex items-center gap-2">
                <User className="h-4 w-4" /> ID: {userId?.substring(0, 8)}
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Válido hasta: 2025
              </p>
            </div>
            <div className="flex flex-col items-end">
              <QrCode className="h-20 w-20 text-slate-600" />
              <p className="mt-1 text-right text-xs text-slate-400">
                {onboardingData.university?.website}
              </p>
            </div>
          </div>
        </div>
      )}
    </GlareCard>
  );
}
