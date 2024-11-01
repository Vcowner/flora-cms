/*
 * @Author: liaokt
 * @Description: 登录的数据校验
 * @Date: 2024-09-10 15:03:29
 * @LastEditors: liaokt
 * @LastEditTime: 2024-10-28 15:57:12
 */
import { z } from "@/lib/zod";

// 数据校验
export const createTodoZodSchema = z.object({
  nickName: z.string().min(1, { message: "请输入您的昵称" }),
  userName: z.string().min(1, { message: "请输入您的用户名" }),
  passWord: z.string().min(1, { message: "请输入您的密码" }),
  agreeProtocol: z.boolean().refine((value) => value, { message: "请勾选同意协议" }),
});

export type createTodoZodSchemaType = z.infer<typeof createTodoZodSchema>;
