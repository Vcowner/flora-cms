/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: liaokt
 * @Description: 通用表单项
 * @Date: 2024-10-28 10:54:23
 * @LastEditors: liaokt
 * @LastEditTime: 2024-10-28 14:18:15
 */
import React, { ReactNode } from "react";
import { FormControl, FormField, FormItem, FormMessage } from "../form";
import { Control, ControllerRenderProps, FieldValues } from "react-hook-form";

export type TStringObject = {
  [key: string]: string;
};

type TCommonFormItem<T extends FieldValues> = {
  item: (field: ControllerRenderProps<T, any>) => ReactNode;
  control: Control<T, any>;
  name: keyof T;
};

/**
 * 通用表单项组件，用于渲染带有控制逻辑的表单项。
 *
 * @template T 表单字段值类型
 * @param item 表单项渲染函数，接受一个字段属性对象并返回一个 React 节点
 * @param control 表单控制对象
 * @param name 表单项的名称
 */
const CommonFormItem = <T extends FieldValues>({ item, control, name }: TCommonFormItem<T>) => {
  return (
    <FormField
      control={control}
      name={name as never}
      render={({ field }) => (
        <FormItem>
          <FormControl>{item(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { CommonFormItem };
