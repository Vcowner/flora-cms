/*
 * @Author: liaokt
 * @Description:
 * @Date: 2024-09-10 15:01:15
 * @LastEditors: liaokt
 * @LastEditTime: 2024-09-27 15:54:29
 */

"use client";
import { createTodoZodSchema, type createTodoZodSchemaType } from "@/app/schema/login";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
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
    startTransition(async () => {
      // 1. 调用登录接口
      // 2. 登录接口成功回调
      console.log(data);
      // 2.2 重置表单
      reset();
      // 3. 登录接口失败回调
    });
  });

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
        <FormField
          control={control}
          name="nickName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="请输入昵称" {...field} className="h-14" />
              </FormControl>
              <FormMessage />
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
              <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center space-x-2 mt-4">
          <Checkbox />
          <label className=" text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            我同意协议
          </label>
        </div>
        <Button type="submit" loading={isPending} className="w-full h-12 mt-14 bg-[#6f53b5] ">
          登录
        </Button>
      </form>
    </Form>
  );
}
