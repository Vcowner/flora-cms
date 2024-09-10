/*
 * @Author: liaokt
 * @Description:
 * @Date: 2024-09-10 15:01:15
 * @LastEditors: liaokt
 * @LastEditTime: 2024-09-10 16:04:18
 */

"use client";
import { createTodoZodSchema, createTodoZodSchemaType } from "@/app/schema/todo";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useTransition } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm({
    resolver: zodResolver(createTodoZodSchema),
    defaultValues: {
      nickName: "",
      userName: "",
      passWord: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const { handleSubmit, reset, control } = form;

  const onSubmit = handleSubmit(async (data: createTodoZodSchemaType) => {
    startTransition(async () => {});
  });

  return (
    <Form {...form}>
      <form ref={formRef} className="space-y-6">
        <FormField
          control={control}
          name="nickName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="请输入昵称" {...field} className="h-14" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="请输入用户名" {...field} className="h-14" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="passWord"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="请输入密码" {...field} className="h-14" />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
      <div className="flex flex-row items-center space-x-2 mt-4">
        <Checkbox />
        <label className=" text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          我同意协议
        </label>
      </div>
      <Button className="w-full h-12 mt-14 bg-[#6f53b5] ">登录</Button>
    </Form>
  );
}
