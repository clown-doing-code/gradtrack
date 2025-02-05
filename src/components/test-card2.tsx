import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen } from "lucide-react";

interface Course {
  name: string;
  credits: number;
}

export default function TestCard2() {
  const currentCourses: Course[] = [
    { name: "Cálculo III", credits: 6 },
    { name: "Física Moderna", credits: 8 },
    { name: "Programación Avanzada", credits: 6 },
  ];

  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Cursando</CardTitle>
        <CardDescription>Asignaturas en curso actual</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          <div className="space-y-4">
            {currentCourses.map((course, i) => (
              <div key={i} className="flex items-start space-x-4">
                <BookOpen className="mt-1 h-5 w-5 text-blue-500" />
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
