import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Obtener todas las ciudades
export const getCities = query({
  handler: async (ctx) => {
    return await ctx.db.query("cities").collect();
  },
});

// Obtener todas las universidades
export const getUniversities = query({
  handler: async (ctx) => {
    return await ctx.db.query("universities").collect();
  },
});

// Obtener todas las universidades
export const getFaculties = query({
  handler: async (ctx) => {
    return await ctx.db.query("faculty").collect();
  },
});

// Obtener facultades por universidad
export const getFacultiesByUniversity = query({
  args: { universityId: v.id("universities") },
  handler: async (ctx, { universityId }) => {
    return await ctx.db
      .query("faculty")
      .filter((q) => q.eq(q.field("universityId"), universityId))
      .collect();
  },
});

// Obtener carreras por facultad
export const getCareersByFaculty = query({
  args: { facultyId: v.id("faculty") },
  handler: async (ctx, { facultyId }) => {
    return await ctx.db
      .query("careers")
      .filter((q) => q.eq(q.field("facultyId"), facultyId))
      .collect();
  },
});

// Obtener carreras por universidad
export const getCareersByUniversity = query({
  args: { universityId: v.id("universities") },
  handler: async (ctx, { universityId }) => {
    return await ctx.db
      .query("careers")
      .filter((q) => q.eq(q.field("universityId"), universityId))
      .collect();
  },
});

export const getUserOnboarding = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query("userOnboarding")
      .filter((q) => q.eq(q.field("userId"), userId))
      .unique();
  },
});

export const saveUserOnboarding = mutation({
  args: {
    cityId: v.id("cities"), // Usa v.id para asegurar el tipo correcto
    universityId: v.id("universities"),
    careerId: v.id("careers"),
    facultyId: v.id("faculty"),
  },
  handler: async (ctx, { cityId, universityId, careerId, facultyId }) => {
    const userId = (await ctx.auth.getUserIdentity())?.subject;
    if (!userId) throw new Error("Usuario no autenticado");

    await ctx.db.insert("userOnboarding", {
      userId,
      cityId,
      universityId,
      careerId,
      facultyId,
    });
  },
});

export const hasCompletedOnboarding = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const onboarding = await ctx.db
      .query("userOnboarding")
      .filter((q) => q.eq(q.field("userId"), userId))
      .unique();

    return !!onboarding; // Devuelve true si el usuario completó el onboarding
  },
});

// Obtener los datos del onboarding del usuario
export const getUserOnboardingData = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const onboarding = await ctx.db
      .query("userOnboarding")
      .filter((q) => q.eq(q.field("userId"), userId))
      .unique();

    if (!onboarding) return null;

    // Obtener detalles de la ciudad, universidad, facultad y carrera
    const city = await ctx.db.get(onboarding.cityId);
    const university = await ctx.db.get(onboarding.universityId);
    const faculty = await ctx.db.get(onboarding.facultyId);
    const career = await ctx.db.get(onboarding.careerId);

    return {
      city,
      university,
      faculty,
      career,
    };
  },
});
