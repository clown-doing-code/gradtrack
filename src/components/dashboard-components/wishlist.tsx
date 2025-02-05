"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type WishlistItem = {
  id: string;
  name: string;
};

export function CourseWishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [newItemName, setNewItemName] = useState("");

  const addItem = () => {
    if (newItemName.trim() !== "") {
      setWishlistItems([
        ...wishlistItems,
        { id: Date.now().toString(), name: newItemName.trim() },
      ]);
      setNewItemName("");
    }
  };

  const removeItem = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Asignaturas para el próximo semestre</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-md bg-secondary p-2"
            >
              <span>{item.name}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeItem(item.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addItem();
          }}
          className="flex w-full space-x-2"
        >
          <Input
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Nombre de la asignatura"
          />
          <Button type="submit">
            <Plus className="mr-2 h-4 w-4" />
            Agregar
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
