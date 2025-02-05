"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Clock, MoreHorizontal, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type Course = {
  id: string;
  name: string;
  code: string;
  credits: number;
  status: "completed" | "in_progress" | "pending";
};

const onStatusChange = (courseId: string, newStatus: Course["status"]) => {
  // Implement your logic to change the course status here.  This is a placeholder.
  console.log(`Changing status of course ${courseId} to ${newStatus}`);
};

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "name",
    header: "Asignatura",
  },
  {
    accessorKey: "code",
    header: "Clave",
  },
  {
    accessorKey: "credits",
    header: "Créditos",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      return (
        <Badge
          className={
            status === "completed"
              ? "bg-green-500"
              : status === "in_progress"
                ? "bg-blue-500"
                : "bg-gray-500"
          }
        >
          {status === "completed"
            ? "Completada"
            : status === "in_progress"
              ? "Cursando"
              : "Pendiente"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const course = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => onStatusChange(course.id, "completed")}
              className="text-green-600"
            >
              <Check className="mr-2 h-4 w-4" />
              Marcar como completada
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onStatusChange(course.id, "in_progress")}
              className="text-blue-600"
            >
              <Clock className="mr-2 h-4 w-4" />
              Marcar como cursando
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onStatusChange(course.id, "pending")}
              className="text-gray-600"
            >
              <X className="mr-2 h-4 w-4" />
              Marcar como pendiente
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
