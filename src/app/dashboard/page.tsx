import { TestCard1 } from "@/components/test-card1";
import TestCard2 from "@/components/test-card2";
import TestCard3 from "@/components/test-card3";
import TestCard4 from "@/components/test-card4";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 bg-muted p-4 py-4">
      <h1 className="text-2xl font-semibold">Panel Principal</h1>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <TestCard1 creditsCompleted={100} totalCredits={200} />
        <TestCard2 />
        <TestCard3 />
      </div>
      <TestCard4 />
    </div>
  );
}
