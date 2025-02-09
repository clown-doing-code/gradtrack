"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  RefreshCcw,
  PauseCircle,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  type Subject,
  type SubjectStatus,
  useSubjectsStore,
} from "./subject-store";

export const columns: ColumnDef<Subject>[] = [
  {
    accessorKey: "name",
    header: "Nombre de la Materia",
  },
  {
    accessorKey: "code",
    header: "Clave de la Materia",
  },
  {
    accessorKey: "credits",
    header: "Créditos",
  },
  {
    accessorKey: "prerequisites",
    header: "Prerequisitos",
    cell: ({ row }) => {
      const prerequisites = row.original.prerequisites;
      return prerequisites.length > 0 ? prerequisites.join(", ") : "Ninguno";
    },
  },
  {
    id: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.original.status;
      const statusColors = {
        cursando: "text-blue-600",
        finalizado: "text-green-600",
        "no cursado": "text-gray-600",
        retirado: "text-red-600",
      };
      return <span className={statusColors[status]}>{status}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const subject = row.original;
      const updateSubjectStatus = useSubjectsStore(
        (state) => state.updateSubjectStatus,
      );
      const subjects = useSubjectsStore((state) => state.subjects);

      const arePrerequisitesCompleted = () => {
        return subject.prerequisites.every((prereq) => {
          const prerequisiteSubject = subjects.find((s) => s.code === prereq);
          return (
            prerequisiteSubject && prerequisiteSubject.status === "finalizado"
          );
        });
      };

      const isDisabled = !arePrerequisitesCompleted();

      const handleStatusChange = (newStatus: SubjectStatus) => {
        updateSubjectStatus(subject.id, newStatus);
      };

      return (
        <div className="flex items-center justify-center">
          {isDisabled ? (
            <Lock className="h-4 w-4 text-gray-400" />
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Abrir menú</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => handleStatusChange("cursando")}
                  className={
                    subject.status === "cursando"
                      ? "bg-blue-100 text-blue-900"
                      : ""
                  }
                >
                  <PauseCircle className="mr-2 h-4 w-4" />
                  Cursando
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleStatusChange("finalizado")}
                  className={
                    subject.status === "finalizado"
                      ? "bg-green-100 text-green-900"
                      : ""
                  }
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Finalizado
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleStatusChange("no cursado")}
                  className={
                    subject.status === "no cursado"
                      ? "bg-gray-100 text-gray-900"
                      : ""
                  }
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  No cursado
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleStatusChange("retirado")}
                  className={
                    subject.status === "retirado"
                      ? "bg-red-100 text-red-900"
                      : ""
                  }
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Retirado
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      );
    },
  },
];
