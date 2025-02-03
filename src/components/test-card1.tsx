import React from "react";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UniversityProgressProps {
  creditsCompleted: number;
  totalCredits: number;
}

export function TestCard1({
  creditsCompleted,
  totalCredits,
}: UniversityProgressProps) {
  const percentageCompleted = Math.round(
    (creditsCompleted / totalCredits) * 100
  );
  const creditsMissing = totalCredits - creditsCompleted;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progreso General</CardTitle>
        <CardDescription>
          Aquí podrás ver el progreso de tu carrera.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Progress value={percentageCompleted} className="h-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Créditos cursados: {creditsCompleted}</span>
            <span>Créditos faltantes: {creditsMissing}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-center font-semibold mt-auto">
          {percentageCompleted}% completado
        </p>
      </CardFooter>
    </Card>
  );
}
