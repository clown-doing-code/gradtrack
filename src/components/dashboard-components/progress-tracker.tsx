"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressTrackerProps {
  totalCredits: number;
  completedCredits: number;
  remainingCredits: number;
}

export default function ProgressTracker({
  totalCredits,
  completedCredits,
  remainingCredits,
}: ProgressTrackerProps) {
  const progressPercentage = Math.round(
    (completedCredits / totalCredits) * 100,
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardDescription>
          Aquí podrás ver el progreso de tu carrera.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Progress value={progressPercentage} className="h-4" />
          <p className="text-right font-medium">
            {progressPercentage}% completado
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <p className="text-2xl font-bold">{totalCredits}</p>
            <p className="text-sm text-muted-foreground">Créditos totales</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-primary">
              {completedCredits}
            </p>
            <p className="text-sm text-muted-foreground">Créditos cursados</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-muted-foreground">
              {remainingCredits}
            </p>
            <p className="text-sm text-muted-foreground">Créditos faltantes</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
