import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  cities: defineTable({
    name: v.string(),
  }),

  universities: defineTable({
    name: v.string(),
    location: v.string(),
    founded: v.number(),
    students: v.string(),
    description: v.string(),
    website: v.string(),
  }),

  faculty: defineTable({
    name: v.string(),
    universityId: v.id("universities"), // Relación con la tabla de universidades
  }),

  careers: defineTable({
    name: v.string(),
    facultyId: v.id("faculty"),
    universityId: v.id("universities"), // Relación con la tabla de universidades
  }),

  userOnboarding: defineTable({
    userId: v.string(), // ID del usuario de Clerk
    cityId: v.id("cities"),
    universityId: v.id("universities"),
    careerId: v.id("careers"),
    facultyId: v.id("faculty"),
  }),
});
