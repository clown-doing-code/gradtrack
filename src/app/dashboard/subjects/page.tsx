"use client";
import { columns } from "@/components/dashboard-components/table/columns";
import { DataTable } from "@/components/dashboard-components/table/data-table";
import { useSubjectsStore } from "@/components/dashboard-components/table/subject-store";
import React from "react";

export default function SubjectsPage() {
  const subjects = useSubjectsStore((state) => state.subjects);

  return (
    <div className="flex flex-1 flex-col gap-4 bg-muted p-4 py-4">
      <h1 className="text-2xl font-semibold">Mis Asignaturas</h1>
      <DataTable columns={columns} data={subjects} />
    </div>
  );
}
