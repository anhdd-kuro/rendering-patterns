import z from "zod";
import { MemberInputSchema } from "@/features/member/domain";

export const blogSchema = z.object({
  id: z.string(),
  date: z.string(),
  category: z.string(),
  title: z.string(),
  url: z.string(),
  thumbnail: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
  tags: z.string().array().optional(),
  writer: MemberInputSchema().pick({ nickname: true, imageUrl: true, role: true }),
});

export type Blog = z.infer<typeof blogSchema>;
