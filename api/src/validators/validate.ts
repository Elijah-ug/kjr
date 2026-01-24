import z from "zod";

export const adminValidator = z.object({
  name: z.string().min(3).max(100),
  email: z.email(),
  role: z.string().min(3).max(20).default("admin"),
  password: z.string().min(6),
});

export const adminLoginValidator = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export const updateAdminValidator = z.object({
  name: z.string().min(3).max(100).optional(),
  email: z.email().optional(),
  role: z.string().min(3).max(20).optional(),
  password: z.string().min(6).optional(),
});

export const eventsValidator = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(250),
  picurl: z.object().nullable().optional(),
  date: z.string().transform((val) => new Date(val)),
});

export const updateEventsValidator = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(250),
  picurl: z.object().nullable().optional(),
  date: z.string().transform((val) => new Date(val)),
});

export const newsValidator = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(250),
  picurl: z.object().nullable().optional(),
});

export const updateNewsValidator = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(250),
  picurl: z.string().nullable().optional(),
});

export const messageValidator = z.object({
  name: z.string().min(3).max(100),
  email: z.email(),
  message: z.string().min(3).max(250),
  phone: z.string().nullable().optional(),
  subject: z.string().nullable().optional(),
});
