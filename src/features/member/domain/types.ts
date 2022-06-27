import z from "zod";

export const memberSchema = z.object({
  id: z.string().min(1),
  nickname: z.string().min(1),
  role: z.string().min(1),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  catchCopy: z.string().optional(),
  imageUrl: z.string().optional(),
});

export type Member = z.infer<typeof memberSchema>;
