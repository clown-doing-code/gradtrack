"use client";

import * as React from "react";
import {
  ChartLine,
  BookCopy,
  GraduationCap,
  LayoutPanelLeft,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { ThemeSwitcher } from "../theme-switcher";
import Link from "next/link";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Inicio",
      url: "/dashboard",
      icon: LayoutPanelLeft,
    },
    {
      title: "Asignarturas",
      url: "/dashboard/subjects",
      icon: BookCopy,
    },
    {
      title: "Progreso",
      url: "/dashboard/progress",
      icon: ChartLine,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GraduationCap className="size-4" />
            </div>
          </div>
          <div className="grid flex-1 text-left text-xl leading-tight">
            <span className="truncate font-semibold">GradTrack</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
        <ThemeSwitcher />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
