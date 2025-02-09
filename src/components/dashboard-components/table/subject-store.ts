import { create } from "zustand";

export type SubjectStatus =
  | "cursando"
  | "finalizado"
  | "no cursado"
  | "retirado";

export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  prerequisites: string[];
  status: SubjectStatus;
}

interface SubjectsState {
  subjects: Subject[];
  updateSubjectStatus: (id: string, newStatus: SubjectStatus) => void;
}

export const useSubjectsStore = create<SubjectsState>((set) => ({
  subjects: [
    {
      id: "1",
      name: "Matemáticas I",
      code: "MAT101",
      credits: 4,
      prerequisites: [],
      status: "no cursado",
    },
    {
      id: "2",
      name: "Física I",
      code: "FIS101",
      credits: 4,
      prerequisites: ["MAT101"],
      status: "no cursado",
    },
    {
      id: "3",
      name: "Programación I",
      code: "PRG101",
      credits: 3,
      prerequisites: [],
      status: "no cursado",
    },
    {
      id: "4",
      name: "Química General",
      code: "QUI101",
      credits: 3,
      prerequisites: [],
      status: "no cursado",
    },
    {
      id: "5",
      name: "Cálculo I",
      code: "CAL101",
      credits: 4,
      prerequisites: ["MAT101"],
      status: "no cursado",
    },
  ],
  updateSubjectStatus: (id, newStatus) =>
    set((state) => ({
      subjects: state.subjects.map((subject) =>
        subject.id === id ? { ...subject, status: newStatus } : subject,
      ),
    })),
}));
