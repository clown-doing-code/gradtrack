import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  universities: defineTable({
    name: v.string(),
    location: v.string(),
  }),

  majors: defineTable({
    name: v.string(),
    faculty: v.string(),
    totalCredits: v.number(),
    universityId: v.id("universities"),
  }).index("universityId", ["universityId"]),

  subjects: defineTable({
    code: v.string(),
    name: v.string(),
    credits: v.number(),
    semester: v.union(v.number(), v.string()),
    majorId: v.id("majors"),
  }).index("majorId", ["majorId"]),

  users: defineTable({
    userId: v.string(),
    city: v.string(),
    universityId: v.id("universities"),
    majorId: v.id("majors"),
    onboardingComplete: v.boolean(),
  }).index("userId", ["userId"]),

  userSubjects: defineTable({
    userId: v.string(),
    subjectId: v.id("subjects"),
    status: v.union(
      v.literal("completed"),
      v.literal("in-progress"),
      v.literal("not-taken"),
    ),
  }).index("userId_subjectId", ["userId", "subjectId"]),
});
