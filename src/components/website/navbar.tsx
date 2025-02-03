"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "../theme-switcher";
import SignOutButton from "../buttons/sign-out";

interface HeaderProps {
  isAuthenticated: boolean;
}

export default function Header({ isAuthenticated }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">GradTrack</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <AuthButtons isAuthenticated={isAuthenticated} />
            <ThemeSwitcher />
          </div>

          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          <NavLinks mobile />
          <div className="mt-4 flex flex-col space-y-2">
            <AuthButtons isAuthenticated={isAuthenticated} mobile />
          </div>
          <div className="mt-4 flex justify-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = cn(
    "text-foreground transition-colors hover:text-primary",
    mobile && "block px-3 py-2 text-base font-medium"
  );

  return (
    <>
      <Link href="#features" className={linkClass}>
        Características
      </Link>
      <Link href="#pricing" className={linkClass}>
        Precios
      </Link>
      <Link href="#faq" className={linkClass}>
        Preguntas frecuentes
      </Link>
    </>
  );
}

function AuthButtons({
  isAuthenticated,
  mobile = false,
}: {
  isAuthenticated: boolean;
  mobile?: boolean;
}) {
  if (isAuthenticated) {
    return (
      <>
        <Link href="/dashboard">
          <Button
            size={"sm"}
            className={cn(mobile && "w-full flex items-center gap-1")}
          >
            Abrir el panel
            <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
        </Link>

        <SignOutButton />
      </>
    );
  }

  return (
    <>
      <Link href="/auth/sign-in">
        <Button size={"sm"} className={cn(mobile && "w-full")}>
          Iniciar sesión
        </Button>
      </Link>
      <Link href="/auth/sign-up">
        <Button
          variant="secondary"
          size={"sm"}
          className={cn(mobile && "w-full")}
        >
          Registrarse
        </Button>
      </Link>
    </>
  );
}
