import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle } from "lucide-react";

interface Course {
  name: string;
  credits: number;
}

export default function TestCard3() {
  const completedCourses: Course[] = [
    { name: "Álgebra Lineal", credits: 6 },
    { name: "Cálculo II", credits: 8 },
    { name: "Programación Básica", credits: 6 },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Completadas</CardTitle>
        <CardDescription>Asignaturas completadas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          <div className="space-y-4">
            {completedCourses.map((course, i) => (
              <div key={i} className="flex items-start space-x-4">
                <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {course.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {course.credits} créditos
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
