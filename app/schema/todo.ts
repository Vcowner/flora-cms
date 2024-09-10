import { z } from "@/lib/zod";

export const createTodoZodSchema = z.object({
  todo: z.string().min(1, { message: "不能为空" }),
});

export type createTodoZodSchemaType = z.infer<typeof createTodoZodSchema>;
