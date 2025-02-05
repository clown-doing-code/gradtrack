import { columns } from "@/components/dashboard-components/table/columns";
import { DataTable } from "@/components/dashboard-components/table/data-table";
import { CourseWishlist } from "@/components/dashboard-components/wishlist";
import React from "react";
const data = [
  {
    id: "1",
    name: "Cálculo III",
    code: "MAT-301",
    credits: 6,
    status: "in_progress",
  },
  {
    id: "2",
    name: "Física Moderna",
    code: "FIS-201",
    credits: 5,
    status: "in_progress",
  },
  {
    id: "3",
    name: "Álgebra Lineal",
    code: "MAT-202",
    credits: 6,
    status: "completed",
  },
  {
    id: "4",
    name: "Cálculo II",
    code: "MAT-102",
    credits: 6,
    status: "completed",
  },
];

export default function SubjectsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 className="text-2xl font-semibold">Mis Asignaturas</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
