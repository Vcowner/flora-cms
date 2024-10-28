/*
 * @Author: liaokt
 * @Description: auth services
 * @Date: 2024-10-25 14:08:53
 * @LastEditors: liaokt
 * @LastEditTime: 2024-10-25 15:01:35
 */
import { authApis } from "./constant/api";
import request from "@/app/base/utils/request";

export function login(params?: unknown) {
  return request(authApis.authLogin, {
    params,
  });
}
