"use client";
import React from "react";
import { Button } from "../ui/button";
import { useClerk } from "@clerk/clerk-react";

export default function SignOutButton() {
  const { signOut } = useClerk();

  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={() => signOut({ redirectUrl: "/" })}
    >
      Salir
    </Button>
  );
}
