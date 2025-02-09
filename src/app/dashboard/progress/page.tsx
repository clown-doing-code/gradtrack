import ProgressTracker from "@/components/dashboard-components/progress-tracker";
import TestCard2 from "@/components/test-card2";
import TestCard3 from "@/components/test-card3";
import React from "react";

export default function ProgressPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 bg-muted p-4 py-4">
      <h1 className="text-2xl font-semibold">Mi Progreso</h1>
      <ProgressTracker
        totalCredits={54}
        completedCredits={42}
        remainingCredits={12}
      />
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <TestCard2 />
        <TestCard3 />
      </div>
    </div>
  );
}
