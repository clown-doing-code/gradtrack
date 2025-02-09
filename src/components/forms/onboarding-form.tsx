"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Id } from "../../../convex/_generated/dataModel";
import { api } from "../../../convex/_generated/api";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export function OnboardingForm() {
  const [step, setStep] = useState(0);
  const [cityId, setCityId] = useState<Id<"cities"> | null>(null);
  const [universityId, setUniversityId] = useState<Id<"universities"> | null>(
    null,
  );
  const [facultyId, setFacultyId] = useState<Id<"faculty"> | null>(null);
  const [careerId, setCareerId] = useState<Id<"careers"> | null>(null);

  const cities = useQuery(api.onboarding.getCities);
  const universities = useQuery(api.onboarding.getUniversities);
  const faculties = useQuery(
    api.onboarding.getFacultiesByUniversity,
    universityId ? { universityId } : "skip",
  );
  const careers = useQuery(
    api.onboarding.getCareersByFaculty,
    facultyId ? { facultyId } : "skip",
  );

  const saveOnboarding = useMutation(api.onboarding.saveUserOnboarding);

  const steps = [
    { title: "Ciudad", isComplete: !!cityId },
    { title: "Universidad", isComplete: !!universityId },
    { title: "Facultad", isComplete: !!facultyId },
    { title: "Carrera", isComplete: !!careerId },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (!cityId || !universityId || !facultyId || !careerId) {
      toast("Por favor, completa todos los campos.");
      return;
    }

    await saveOnboarding({ cityId, universityId, facultyId, careerId });
    window.location.href = "/dashboard"; // Redirigir al dashboard
  };

  return (
    <Card className="w-full max-w-md space-y-6 p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Completa tu perfil</h1>
        <p className="text-muted-foreground">
          Necesitamos algunos datos para personalizar tu experiencia
        </p>
      </div>

      <div className="space-y-4">
        {step === 0 && (
          <Select
            onValueChange={(value) => setCityId(value as Id<"cities">)}
            value={cityId || undefined}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona tu ciudad" />
            </SelectTrigger>
            <SelectContent className="h-[300px]">
              {cities?.map((city) => (
                <SelectItem key={city._id} value={city._id}>
                  {city.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {step === 1 && (
          <Select
            onValueChange={(value) =>
              setUniversityId(value as Id<"universities">)
            }
            value={universityId || undefined}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona tu universidad" />
            </SelectTrigger>
            <SelectContent className="h-[300px]">
              {universities?.map((university) => (
                <SelectItem key={university._id} value={university._id}>
                  {university.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {step === 2 && (
          <Select
            onValueChange={(value) => setFacultyId(value as Id<"faculty">)}
            value={facultyId || undefined}
            disabled={!universityId}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona tu facultad" />
            </SelectTrigger>
            <SelectContent className="h-[300px]">
              {faculties?.map((faculty) => (
                <SelectItem key={faculty._id} value={faculty._id}>
                  {faculty.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {step === 3 && (
          <Select
            onValueChange={(value) => setCareerId(value as Id<"careers">)}
            value={careerId || undefined}
            disabled={!facultyId}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona tu carrera" />
            </SelectTrigger>
            <SelectContent>
              {careers?.map((career) => (
                <SelectItem key={career._id} value={career._id}>
                  {career.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        <div className="flex justify-between">
          <Button onClick={handleBack} disabled={step === 0} variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> Atrás
          </Button>
          <Button onClick={handleNext} disabled={!steps[step].isComplete}>
            {step === steps.length - 1 ? "Finalizar" : "Siguiente"}
            {step < steps.length - 1 && (
              <ChevronRight className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === step ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </Card>
  );
}
