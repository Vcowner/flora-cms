/*
 * @Author: liaokt
 * @Description: auth services
 * @Date: 2024-10-25 14:08:53
 * @LastEditors: liaokt
 * @LastEditTime: 2024-10-28 09:47:28
 */
import { authApis } from "./constant/api";
import request from "@/app/base/utils/request";

/**
 * login
 * @description login
 * @param params - login params
 * @returns request response
 */
export function login(params?: unknown) {
  return request(authApis.authLogin, {
    params,
  });
}

/**
 * logout
 * @description logout
 * @param params - logout params
 * @returns request response
 */
export function logout(params?: unknown) {
  return request(authApis.authLogout, {
    params,
  });
}

/**
 * register
 * @description register
 * @param params - register params
 * @returns request response
 */
export function register(params?: unknown) {
  return request(authApis.authRegister, {
    params,
  });
}
