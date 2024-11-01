/*
 * @Author: liaokt
 * @Description: 登录表单组件
 * @Date: 2024-09-10 15:01:15
 * @LastEditors: liaokt
 * @LastEditTime: 2024-10-28 15:59:53
 */

"use client";
import { useRef, useTransition } from "react";
import { createTodoZodSchema, type createTodoZodSchemaType } from "@domain/auth/schema/login";
import { Form, Input, CommonFormItem, TStringObject } from "@/app/base/components/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues } from "react-hook-form";
import { Button, Checkbox, notification } from "antd";

export default function LoginForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [api, contextHolder] = notification.useNotification();

  const form = useForm<TStringObject>({
    resolver: zodResolver(createTodoZodSchema),
    defaultValues: {
      nickName: "",
      userName: "",
      passWord: "",
      agreeProtocol: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const { handleSubmit, control } = form;

  const onSubmit = handleSubmit(
    async (data: createTodoZodSchemaType) => {
      startTransition(async () => {
        // 1. 调用登录接口
        // 2. 登录接口成功回调
        console.log(data);
        // 2.2 重置表单
        //   reset();
        // 3. 登录接口失败回调
      });
    },
    (error) => {
      console.log(error, "----error----");
      api.error({
        message: "信息输入有误",
        description: Object.keys(error).map((item, index) => {
          return <div key={item}>{`${index + 1}. ${error[item].message}`}</div>;
        }),
        duration: 2,
        style: {
          fontSize: "10px",
        },
      });
    }
  );

  return (
    <Form {...form}>
      {contextHolder}
      <form ref={formRef} className="space-y-4">
        <CommonFormItem
          control={control}
          name="nickName"
          item={(field: FieldValues) => <Input placeholder="请输入昵称" {...field} className="h-14" />}
        />
        <CommonFormItem
          control={control}
          name="userName"
          item={(field: FieldValues) => <Input placeholder="请输入用户名" {...field} className="h-14" />}
        />
        <CommonFormItem
          control={control}
          name="passWord"
          item={(field: FieldValues) => <Input placeholder="请输入密码" type="password" {...field} className="h-14" />}
        />
        <CommonFormItem
          control={control}
          name="agreeProtocol"
          item={(field: FieldValues) => (
            <Checkbox {...field}>
              <label className="text-white text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                我同意协议
              </label>
            </Checkbox>
          )}
        />
        <Button onClick={onSubmit} type={"primary"} size={"large"} loading={isPending} className="w-full h-12">
          登录
        </Button>
      </form>
    </Form>
  );
}
